import type { CartItem } from "@/api/response";
import { createContext, type Dispatch } from "react";

interface CartItemContextType {
  selectedCartItems: CartItem[];
  setSelectedCartItems: Dispatch<React.SetStateAction<CartItem[]>>;
}

export const CartItemContext = createContext<CartItemContextType | undefined>(
  undefined,
);
