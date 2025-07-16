import { cn } from "@/lib/utils";

function IlustrationSection() {
  return (
    <div
      className={cn(
        "hidden h-full items-center justify-center",
        "md:flex md:w-1/2",
      )}
    >
      <img
        className="object-cover"
        src="/login-vector.svg"
        alt="login vector"
      />
    </div>
   );
}

export default IlustrationSection;
