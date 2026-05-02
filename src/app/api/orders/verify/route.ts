import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { verifyRazorpaySignature } from "@/lib/razorpay";

export async function POST(request: Request) {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    order_id,
  } = body;

  if (
    !razorpay_order_id ||
    !razorpay_payment_id ||
    !razorpay_signature ||
    !order_id
  ) {
    return NextResponse.json(
      { error: "Missing payment fields" },
      { status: 400 },
    );
  }

  // Verify signature
  const isValid = verifyRazorpaySignature({
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  });

  if (!isValid) {
    return NextResponse.json(
      { error: "Invalid payment signature" },
      { status: 400 },
    );
  }

  // Update order status to paid
  const { error: updateError } = await supabase
    .from("orders")
    .update({
      status: "paid",
      razorpay_payment_id,
    })
    .eq("id", order_id)
    .eq("user_id", user.id); // ensure user owns this order

  if (updateError) {
    return NextResponse.json(
      { error: "Failed to update order" },
      { status: 500 },
    );
  }

  // Clear user's cart after successful payment
  await supabase.from("cart_items").delete().eq("user_id", user.id);

  return NextResponse.json({ success: true, orderId: order_id });
}
