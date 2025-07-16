import Footer from "@/components/app/common/Footer";
import Navbar from "@/components/app/common/Navbar";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default AppLayout;
