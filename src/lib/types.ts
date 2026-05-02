export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  created_at: string;
};

export type Product = {
  id: string;
  name: string;
  sku: string;
  slug: string;
  price: number; // in paise (INR * 100)
  description: string | null;
  specs: Record<string, string> | null;
  image_url: string | null;
  badge: string | null;
  created_at: string;
};

export type CartItem = {
  id: string;
  user_id: string;
  product_id: string;
  quantity: number;
  config: {
    width?: string;
    length?: string;
    [key: string]: string | undefined;
  } | null;
  created_at: string;
  // Joined
  product?: Product;
};

export type OrderStatus =
  | "pending"
  | "paid"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export type Order = {
  id: string;
  user_id: string;
  razorpay_order_id: string | null;
  razorpay_payment_id: string | null;
  amount: number; // in paise
  status: OrderStatus;
  shipping_address: ShippingAddress | null;
  created_at: string;
  // Joined
  order_items?: OrderItem[];
};

export type OrderItem = {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price: number; // price at time of purchase, in paise
  config: CartItem["config"];
  // Joined
  product?: Product;
};

// Razorpay handler response shape
export type RazorpayResponse = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
};

// Razorpay constructor options
export type RazorpayOptions = {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => Promise<void>;
  prefill: Record<string, string>;
  theme: { color: string };
  modal: { ondismiss: () => void };
};

// Order item joined with product fields used in OrdersPage
export type OrderItemWithProduct = {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price: number;
  config: CartItem["config"];
  product: {
    name: string;
    sku: string;
    image_url: string | null;
  } | null;
};

// Cart item as returned from Supabase in the create order route
export type CartItemWithProduct = {
  product_id: string;
  quantity: number;
  config: CartItem["config"];
  product: {
    id: string;
    name: string;
    price: number;
  };
};

export type ShippingAddress = {
  name: string;
  phone: string;
  address_line1: string;
  address_line2?: string;
  city: string;
  state: string;
  pincode: string;
};
