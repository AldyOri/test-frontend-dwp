import axios from "axios";
import {
  deleteStorageUser,
  getStorageUser,
  setStorageUser,
} from "@/lib/local-storage";
import { toast } from "sonner";
import type { User } from "./response";

const BASE_URL = "http://localhost:3000";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const res = await axios.get<User[]>(
      `${BASE_URL}/users?email=${email}&password=${password}`,
    );
    if (res.data.length > 0) {
      setStorageUser({
        id: res.data[0].id,
        name: res.data[0].name,
        email: res.data[0].email,
      });

      toast.success("Login Success");
      return true;
    } else {
      toast.error("Incorrect Email or Password");
      return false;
    }
  } catch (error) {
    console.error("Error login", error);
    throw error;
  }
};

export const logout = () => {
  deleteStorageUser();
};

export const isLoggedin = () => {
  const user = getStorageUser();
  if (user) return true;
  return false;
};
