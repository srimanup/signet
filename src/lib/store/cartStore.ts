import { create } from "zustand";
import { CartItem } from "@/lib/types";
import { createClient } from "@/lib/supabase/client";

type CartStore = {
  items: CartItem[];
  loading: boolean;
  fetchCart: () => Promise<void>;
  addItem: (
    productId: string,
    quantity: number,
    config?: CartItem["config"],
  ) => Promise<void>;
  updateQuantity: (cartItemId: string, quantity: number) => Promise<void>;
  removeItem: (cartItemId: string) => Promise<void>;
  clearCart: () => Promise<void>;
  totalAmount: () => number;
  totalItems: () => number;
};

const supabase = createClient();

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  loading: false,

  fetchCart: async () => {
    set({ loading: true });

    const { data, error } = await supabase
      .from("cart_items")
      .select("*, product:products(*)")
      .order("created_at", { ascending: true });

    if (!error && data) {
      set({ items: data as CartItem[] });
    }
    if (error) {
      console.error("Failed to fetch cart items:", error);
    }
    set({ loading: false });
  },

  addItem: async (productId, quantity, config = null) => {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    // Check if item with same product + config already exists
    const existing = get().items.find(
      (i) =>
        i.product_id === productId &&
        JSON.stringify(i.config) === JSON.stringify(config),
    );

    if (existing) {
      await get().updateQuantity(existing.id, existing.quantity + quantity);
      return;
    }

    const { data, error } = await supabase
      .from("cart_items")
      .insert({ product_id: productId, quantity, config, user_id: user?.id })
      .select("*, product:products(*)")
      .single();

    if (!error && data) {
      set((state) => ({ items: [...state.items, data as CartItem] }));
    }
  },

  updateQuantity: async (cartItemId, quantity) => {
    const supabase = createClient();

    if (quantity <= 0) {
      await get().removeItem(cartItemId);
      return;
    }

    const { error } = await supabase
      .from("cart_items")
      .update({ quantity })
      .eq("id", cartItemId);

    if (!error) {
      set((state) => ({
        items: state.items.map((i) =>
          i.id === cartItemId ? { ...i, quantity } : i,
        ),
      }));
    }
  },

  removeItem: async (cartItemId) => {
    const supabase = createClient();

    const { error } = await supabase
      .from("cart_items")
      .delete()
      .eq("id", cartItemId);

    if (!error) {
      set((state) => ({
        items: state.items.filter((i) => i.id !== cartItemId),
      }));
    }
  },

  clearCart: async () => {
    const supabase = createClient();
    await supabase
      .from("cart_items")
      .delete()
      .neq("id", "00000000-0000-0000-0000-000000000000");
    set({ items: [] });
  },

  totalAmount: () => {
    return get().items.reduce((sum, item) => {
      const price = item.product?.price ?? 0;
      return sum + price * item.quantity;
    }, 0);
  },

  totalItems: () => {
    return get().items.reduce((sum, item) => sum + item.quantity, 0);
  },
}));
