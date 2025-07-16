import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { useState, type FormEvent } from "react";
import { FcGoogle } from "react-icons/fc";
import { login } from "@/api/auth";
import { useNavigate } from "react-router";

function FormSection() {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isLoginSuccess = await login({ email, password });
    if (isLoginSuccess) {
      navigate("/");
    } else {
      navigate("/login");
    }

    setEmail("");
    setPassword("");
  };
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center",
        "md:w-1/2",
      )}
    >
      <form
        onSubmit={handleSubmit}
        className="flex max-w-xs flex-col items-center justify-center gap-y-6"
      >
        <div className="flex flex-col gap-y-2">
          <h1 className="text-center text-3xl font-semibold">
            Login to your account
          </h1>
          <h2 className="text-foreground/50 text-center text-sm">
            Enter your email and password below to login to your account
          </h2>
        </div>

        <div className="w-full space-y-2">
          <Label>
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="relative w-full space-y-2">
          <Label>
            Password <span className="text-red-500">*</span>
          </Label>
          <Input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="ghost"
            className="absolute right-0.5 bottom-2.5 size-8"
            type="button"
            onClick={() => setIsPasswordVisible((prev) => !prev)}
          >
            {isPasswordVisible ? (
              <EyeOff className="size-5" />
            ) : (
              <Eye className="size-5" />
            )}
          </Button>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-y-3">
          <Button
            className="w-full"
            type="submit"
            disabled={email.trim() === "" || password.trim() === ""}
          >
            Login
          </Button>
          <div className="flow-row flex w-full items-center justify-center">
            <div className="bg-foreground/25 mt-1 h-0.5 w-full" />
            <span className="mx-3 font-semibold">or</span>
            <div className="bg-foreground/25 mt-1 h-0.5 w-full" />
          </div>
          <Button className="w-full" variant="outline" type="button">
            <FcGoogle />
            Google
          </Button>
        </div>
        <p>
          Don't have an account?{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline hover:underline-offset-2"
          >
            Register
          </a>
        </p>
      </form>
    </div>
  );
}

export default FormSection;
