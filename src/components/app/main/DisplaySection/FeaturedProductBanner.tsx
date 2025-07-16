import { addCartItem } from "@/api/cart";
import { getFlashSales } from "@/api/product";
import type { FlashSaleItem } from "@/api/response";
import { Button } from "@/components/ui/button";
import { getStorageUser } from "@/lib/local-storage";
import { cn } from "@/lib/utils";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

function FeaturedProductBanner() {
  const [flashSaleItem, setFlashSaleItem] = useState<FlashSaleItem>();

  useEffect(() => {
    fetchFlashSales();
  }, []);

  const fetchFlashSales = async () => {
    const res = await getFlashSales();
    setFlashSaleItem(res.items[0]);
  };

  const handleAddCartItem = async () => {
    const user = getStorageUser();
    await addCartItem({
      userId: user.id,
      userName: user.name,
      userEmail: user.email,
      productId: flashSaleItem!.productId,
      productName: flashSaleItem!.productName,
      productDescription: flashSaleItem!.productDescription,
      productImg: flashSaleItem!.productImg,
      productPrice: flashSaleItem!.discountedPrice,
      productProvider: flashSaleItem!.productProvider,
      productQuota: flashSaleItem!.productQuota,
      productActivePeriod: flashSaleItem!.productActivePeriod,
      isBought: false,
    });
  };

  return (
    <div className="border-primary/25 my-10 flex flex-col items-center justify-center space-y-5 rounded-sm border-4 py-9">
      <img
        className="size-50 object-cover"
        src="https://placehold.co/400"
        alt=""
      />
      <p className="text-lg font-semibold">{flashSaleItem?.productName}</p>
      <p className="text-sm">
        Only for:{" "}
        <span className="rounded-sm bg-yellow-200 px-3 py-1 font-semibold">
          Rp. {flashSaleItem?.discountedPrice}
        </span>
      </p>

      <div className="flex w-full flex-col gap-y-2">
        <Button onClick={handleAddCartItem} className="mx-10 rounded-xs">
          <ShoppingCart />
          ADD TO CART
        </Button>
        <Button
          className={cn(
            "text-primary border-primary mx-10 rounded-xs border-2",
            "hover:text-primary",
          )}
          variant={"outline"}
        >
          VIEW DETAILS
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default FeaturedProductBanner;
