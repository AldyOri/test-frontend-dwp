import { CartItemContext } from "@/contexts/CartItemContext";
import { useContext } from "react";

export const useCartItem = () => {
  const context = useContext(CartItemContext);
  if (!context) {
    throw new Error("useCartItem must be used within a CartItemProvider");
  }
  return context;
};
