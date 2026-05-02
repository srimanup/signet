import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createRazorpayOrder } from "@/lib/razorpay";
import { CartItemWithProduct } from "@/lib/types";

export async function POST(request: Request) {
  const supabase = await createClient();

  // Verify user is authenticated
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Fetch user's cart with product prices
  const { data: cartItems, error: cartError } = await supabase
    .from("cart_items")
    .select("*, product:products(id, price, name)")
    .eq("user_id", user.id);

  if (cartError || !cartItems || cartItems.length === 0) {
    return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
  }

  // Calculate total in paise
  const totalPaise = cartItems.reduce(
    (sum: number, item: CartItemWithProduct) => {
      return sum + item.product.price * item.quantity;
    },
    0,
  );

  // Create order in our DB first (status: pending)
  const { data: order, error: orderError } = await supabase
    .from("orders")
    .insert({
      user_id: user.id,
      amount: totalPaise,
      status: "pending",
    })
    .select()
    .single();

  if (orderError || !order) {
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 },
    );
  }

  // Insert order items
  const orderItems = cartItems.map((item: CartItemWithProduct) => ({
    order_id: order.id,
    product_id: item.product_id,
    quantity: item.quantity,
    price: item.product.price,
    config: item.config,
  }));

  await supabase.from("order_items").insert(orderItems);

  // Create Razorpay order
  const razorpayOrder = await createRazorpayOrder(totalPaise, order.id);

  // Save Razorpay order ID back to our order
  await supabase
    .from("orders")
    .update({ razorpay_order_id: razorpayOrder.id })
    .eq("id", order.id);

  return NextResponse.json({
    orderId: order.id,
    razorpayOrderId: razorpayOrder.id,
    amount: totalPaise,
    currency: "INR",
    keyId: process.env.RAZORPAY_KEY_ID,
  });
}
