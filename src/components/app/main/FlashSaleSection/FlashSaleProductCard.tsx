import { addCartItem } from "@/api/cart";
import type { FlashSaleItem } from "@/api/response";
import { Button } from "@/components/ui/button";
import { getStorageUser } from "@/lib/local-storage";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ProductCardProps {
  flashSaleItem: FlashSaleItem;
}

function FlashSaleProductCard({ flashSaleItem }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddCartItem = async () => {
    const user = getStorageUser();
    await addCartItem({
      userId: user.id,
      userName: user.name,
      userEmail: user.email,
      productId: flashSaleItem.productId,
      productName: flashSaleItem.productName,
      productDescription: flashSaleItem.productDescription,
      productImg: flashSaleItem.productImg,
      productPrice: flashSaleItem.discountedPrice,
      productProvider: flashSaleItem.productProvider,
      productQuota: flashSaleItem.productQuota,
      productActivePeriod: flashSaleItem.productActivePeriod,
      isBought: false,
    });
  };

  return (
    <div
      className="relative w-60 rounded-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden rounded-sm">
        <img
          src={flashSaleItem.productImg}
          alt={flashSaleItem.productName}
          className="h-full w-full object-cover"
        />

        <p className="bg-primary text-background absolute top-2 left-2 rounded-md px-3 py-1 text-xs">
          -{flashSaleItem.discountPercentage}%
        </p>

        <div
          className={cn(
            "absolute right-0 bottom-0 left-0 bg-white transition-all duration-150 ease-in-out",
            isHovered ? "translate-y-0" : "translate-y-full",
          )}
        >
          <Button
            onClick={handleAddCartItem}
            type="button"
            className="bg-primary hover:bg-primary/85 w-full rounded-none py-3 font-medium text-white"
          >
            Add To Cart
          </Button>
        </div>
      </div>

      <div className="py-4">
        <p className="mb-1 font-medium text-gray-900">
          {flashSaleItem.productName}
        </p>
        <p className="mb-1 line-clamp-1 text-sm font-medium text-gray-400">
          {flashSaleItem.productDescription}
        </p>
        <div className="flex flex-col items-start justify-between">
          <p className="mb-2 flex items-center gap-2">
            <span className="font-medium">
              Rp.{flashSaleItem.discountedPrice}
            </span>
            <span className="text-sm text-gray-500 line-through">
              Rp.{flashSaleItem.originalPrice}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FlashSaleProductCard;
