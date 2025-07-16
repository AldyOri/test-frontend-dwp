import { deleteCartItem } from "@/api/cart";
import type { CartItem } from "@/api/response";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";

interface InactiveCartItemProps {
  cartItem: CartItem;
  onDelete?: () => void;
}

function InactiveCartItem({ cartItem, onDelete }: InactiveCartItemProps) {
  const handleDeleteCartItem = async () => {
    await deleteCartItem(cartItem.id!);
    
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <div className="flex flex-row items-center justify-center gap-x-5 p-5 opacity-50">
      <Checkbox className="size-5 border-black" disabled />
      <img
        className="size-20 w-fit flex-none object-cover"
        src={cartItem.productImg}
        alt={cartItem.productName}
      />
      <div className="w-full">
        <p className="line-clamp-1">{cartItem.productName}</p>
        <p className="text-foreground/50 line-clamp-1">
          {cartItem.productDescription}
        </p>
      </div>
      <p className="w-fit flex-none text-lg font-bold">
        Rp. {cartItem.productPrice}
      </p>
      <button
        onClick={handleDeleteCartItem}
        className="hover:text-foreground/55"
      >
        <Trash2 />
      </button>
    </div>
  );
}

export default InactiveCartItem;
