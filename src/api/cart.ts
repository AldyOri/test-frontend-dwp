import axios from "axios";
import type { CartItem } from "./response";
import { toast } from "sonner";

const BASE_URL = "http://localhost:3000";

const getCartItems = async (
  userId: string,
  isBought: boolean | "all" = "all",
): Promise<CartItem[]> => {
  try {
    let url = "";
    if (isBought === "all") {
      url = `${BASE_URL}/cartItems?userId=${userId}`;
    } else if (isBought === true) {
      url = `${BASE_URL}/cartItems?userId=${userId}&isBought=true`;
    } else {
      url = `${BASE_URL}/cartItems?userId=${userId}&isBought=false`;
    }

    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error("failed to get cart items", error);
    throw error;
  }
};

const addCartItem = async (cartItem: CartItem) => {
  try {
    const res = await axios.post(`${BASE_URL}/cartItems`, cartItem);
    toast.success(`Successfully added ${res.data.productName}`);
    return res.data;
  } catch (error) {
    toast.error("Failed to add item to cart");
    console.error("failed to add cart item", error);
    throw error;
  }
};

const updateCartItem = async (id: string, cartItem: Partial<CartItem>) => {
  try {
    const res = await axios.patch(`${BASE_URL}/cartItems/${id}`, cartItem);
    toast.success(`Successfully update item in cart`)
    return res.data
  } catch (error) {
    toast.error("Failed to update item in cart");
    console.error("failed to update cart item", error);
    throw error;
  }
};

const deleteCartItem = async (id: string) => {
  try {
    await axios.delete(`${BASE_URL}/cartItems/${id}`);
    toast.success("Successfully delete item");
  } catch (error) {
    toast.error("Failed to delete item in cart");
    console.error("failed to delete cart item", error);
    throw error;
  }
};

export { getCartItems, addCartItem, updateCartItem, deleteCartItem };
