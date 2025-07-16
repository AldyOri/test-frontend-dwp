import ProductFilters from "./ProductFilters";
import { Menu } from "lucide-react";
import ActiveFilters from "./ActiveFilters";
import ProductCard from "./ProductCard";
import ShopPagination from "./ShopPagination";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getAllProducts } from "@/api/product";
import { useEffect, useState } from "react";
import type { Product } from "@/api/response";
import { useFilters } from "@/hooks/useFilter";

function DisplaySection() {
  const { searchQuery, selectedProvider, selectedActivePeriods } = useFilters();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, [searchQuery, selectedProvider, selectedActivePeriods]);

  const fetchProducts = async () => {
    const res = await getAllProducts({
      search: searchQuery!,
      provider: selectedProvider!,
      activePeriods: selectedActivePeriods,
    });
    setProducts(res);
  };
  return (
    <section id="display" className="flex w-full items-start justify-start">
      <ProductFilters className={cn("hidden", "md:ml-10 md:block")} />

      <div className={"m-5 flex w-full flex-col"}>
        <div className="flex w-full gap-x-2">
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="px-5 md:hidden">
              <ScrollArea className="h-full">
                <ProductFilters className="mb-5" />
              </ScrollArea>
            </SheetContent>
          </Sheet>

          <ActiveFilters
            className="flex w-full"
            resultsCount={products.length}
          />
        </div>

        <div className="m-10 flex flex-wrap items-center justify-center gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <ShopPagination />
      </div>
    </section>
  );
}

export default DisplaySection;
