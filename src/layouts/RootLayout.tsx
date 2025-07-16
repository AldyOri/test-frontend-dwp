import { Toaster } from "@/components/ui/sonner";
import { CartItemProvider } from "@/providers/CartItemProvider";
import { FilterProvider } from "@/providers/FilterProvider";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <main>
      <CartItemProvider>
        <FilterProvider>
          <Outlet />
          <Toaster />
        </FilterProvider>
      </CartItemProvider>
    </main>
  );
}

export default RootLayout;
