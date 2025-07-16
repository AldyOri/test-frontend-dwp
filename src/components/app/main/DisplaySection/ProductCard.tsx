import { addCartItem } from "@/api/cart";
import type { Product } from "@/api/response";
import { Button } from "@/components/ui/button";
import { getStorageUser } from "@/lib/local-storage";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddCartItem = async () => {
    const user = getStorageUser();
    await addCartItem({
      userId: user.id,
      userName: user.name,
      userEmail: user.email,
      productId: product.id,
      productName: product.name,
      productDescription: product.description,
      productImg: product.img,
      productPrice: product.price,
      productProvider: product.provider,
      productQuota: product.quota,
      productActivePeriod: product.activePeriod,
      isBought: false,
    });
  };

  return (
    <div
      className="relative h-fit w-60 overflow-hidden rounded-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden rounded-sm">
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-full object-cover"
        />

        <div
          className={cn(
            "absolute right-0 bottom-0 left-0 bg-white transition-all duration-150 ease-in-out",
            isHovered ? "translate-y-0" : "translate-y-full",
          )}
        >
          <Button
            onClick={handleAddCartItem}
            className="bg-primary hover:bg-primary/85 w-full rounded-none py-3 font-medium text-white"
          >
            Add To Cart
          </Button>
        </div>
      </div>

      <div className="py-4">
        <p className="mb-1 font-medium text-gray-900">{product.name}</p>
        <p className="mb-1 line-clamp-1 text-sm font-medium text-gray-400">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium">Rp.{product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
