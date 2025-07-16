import { isLoggedin } from "@/api/auth";
import { Navigate, Outlet, redirect } from "react-router";

function ProtectedRoute() {
  if (!isLoggedin()) {
    redirect("/login");
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
