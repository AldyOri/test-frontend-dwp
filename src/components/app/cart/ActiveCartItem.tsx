import { deleteCartItem } from "@/api/cart";
import type { CartItem } from "@/api/response";
import { Checkbox } from "@/components/ui/checkbox";
import { useCartItem } from "@/hooks/useCartItem";
import type { CheckedState } from "@radix-ui/react-checkbox";
import { Trash2 } from "lucide-react";

interface ActiveCartItemProps {
  cartItem: CartItem;
  onDelete?: () => void;
  isSelected?: boolean;
}

function ActiveCartItem({
  cartItem,
  onDelete,
  isSelected = false,
}: ActiveCartItemProps) {
  const { setSelectedCartItems } = useCartItem();

  const handleCheckedChange = (isChecked: CheckedState) => {
    if (isChecked) {
      setSelectedCartItems((prev) => {
        const exists = prev.some((item) => item.id === cartItem.id);
        if (exists) return prev;
        return [...prev, cartItem];
      });
    } else {
      setSelectedCartItems((prev) => prev.filter((item) => item !== cartItem));
    }
  };

  const handleDeleteCartItem = async () => {
    await deleteCartItem(cartItem.id!);

    setSelectedCartItems((prev) =>
      prev.filter((item) => item.id !== cartItem.id),
    );

    if (onDelete) {
      onDelete();
    }
  };
  return (
    <div className="flex flex-row items-center justify-center gap-x-5 p-5">
      <Checkbox
        checked={isSelected}
        onCheckedChange={handleCheckedChange}
        className="size-5 border-black"
      />
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

export default ActiveCartItem;
