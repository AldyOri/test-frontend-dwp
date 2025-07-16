import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const imgUrl = "/home-vector.svg";

function HeroSection() {
  const handleExplore = () => {
    const flashSalesSection = document.getElementById("flash-sales");
    if (flashSalesSection) {
      flashSalesSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <section
      className={cn(
        "from-primary/25 flex min-h-screen flex-col items-center justify-center gap-y-10 bg-linear-90 to-white px-10 py-20",
        "md:flex-row",
      )}
    >
      <div
        className={cn("flex flex-col items-center gap-y-5", "md:items-start")}
      >
        <h1 className={cn("text-center text-4xl font-bold", "md:text-start")}>
          PERUSAHAAN <span className="text-primary">X</span>
        </h1>
        <p
          className={cn(
            "line-clamp-none max-w-sm text-center text-xl font-bold",
            "md:text-start md:text-2xl",
          )}
        >
          PENYEDIA INTERNET PROVIDER{" "}
          <span className="text-primary">TERPERCAYA </span> DI INDONESIA
        </p>
        <p className={cn("hidden max-w-lg", "md:mb-10 md:block")}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          asperiores, repellendus dignissimos quibusdam similique iste,
          repudiandae fugit aperiam corrupti eius nostrum deserunt consequatur
          quia suscipit excepturi impedit nam, odit sunt.
        </p>
        <img
          className={cn(
            "mb-3 size-[80vw] rounded-2xl object-cover",
            "md:hidden",
          )}
          src={imgUrl}
          alt="featured product image"
        />
        <Button
          className="bg-app-dark-blue w-45 rounded-full px-7 text-lg font-bold hover:bg-gray-700"
          size={"lg"}
          onClick={handleExplore}
        >
          EXPLORE
        </Button>
      </div>

      <img
        className={cn(
          "hidden rounded-2xl object-cover",
          "md:block md:size-[65vh]",
        )}
        src={imgUrl}
        alt="featured product image"
      />
    </section>
  );
}

export default HeroSection;
