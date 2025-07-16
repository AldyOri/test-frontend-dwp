import { useState, useEffect, type FormEvent } from "react";
import { LogOut, Search, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavLink, useLocation, useNavigate } from "react-router";
import { Input } from "@/components/ui/input";
import { logout } from "@/api/auth";
import { toast } from "sonner";
import { useFilters } from "@/hooks/useFilter";

const LogoPath = "/x-logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchQuery, setSearchQuery } = useFilters();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
    toast.success("Successfully Logged out");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const displaySection = document.getElementById("display");
    if (displaySection) {
      displaySection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  function getNavbarBackgroundClass(isScrolled: boolean) {
    if (isScrolled) {
      return "bg-white/80 shadow-sm backdrop-blur-sm";
    }

    return "bg-transparent";
  }

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 flex w-full justify-between transition-all duration-300",
        getNavbarBackgroundClass(isScrolled),
      )}
    >
      <div
        className={cn(
          "flex h-16 w-full items-center justify-center gap-2 px-2",
          "md:gap-7 md:px-28",
        )}
      >
        <NavLink end to="/">
          <div className="relative flex size-15 items-center justify-center">
            <img src={LogoPath} />
          </div>
        </NavLink>
        <form onSubmit={handleSubmit} className="relative w-full">
          <Input
            className="rounded-xs"
            placeholder="Cari paket internet..."
            type="text"
            disabled={location.pathname === "/cart"}
            value={searchQuery!}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            className="absolute top-0.5 right-0 size-8 rounded-xs"
            disabled={location.pathname === "/cart"}
            type="submit"
            variant={"ghost"}
          >
            <Search />
          </Button>
        </form>
        <NavLink to="/cart" className="p-2">
          <ShoppingCart
            className={cn("fill-background z-1 size-6 text-black", "md:size-8")}
          />
        </NavLink>

        <button onClick={handleLogout}>
          <LogOut
            className={cn("fill-background size-6 text-black", "md:size-7")}
          />
        </button>
      </div>
    </header>
  );
}
