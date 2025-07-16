import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "@/layouts/RootLayout";
import AppLayout from "@/layouts/AppLayout";
import CartPage from "@/pages/CartPage";
import AuthRoute from "./AuthRoute";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <AppLayout />,
            children: [
              {
                path: "/",
                Component: HomePage,
              },
              {
                path: "/cart",
                Component: CartPage,
              },
            ],
          },
        ],
      },

      {
        element: <AuthRoute />,
        children: [
          {
            path: "/login",
            Component: LoginPage,
          },
        ],
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
