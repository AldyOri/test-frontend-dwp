import { isLoggedin } from "@/api/auth";
import { Navigate, Outlet } from "react-router";

function AuthRoute() {
  if (isLoggedin()) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default AuthRoute;
