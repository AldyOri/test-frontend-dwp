import type { CartItem } from "@/api/response";
import { CartItemContext } from "@/contexts/CartItemContext";
import { useState, type ReactNode } from "react";

export const CartItemProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCartItems, setSelectedCartItems] = useState<CartItem[]>([]);

  return (
    <CartItemContext.Provider
      value={{ selectedCartItems, setSelectedCartItems }}
    >
      {children}
    </CartItemContext.Provider>
  );
};
