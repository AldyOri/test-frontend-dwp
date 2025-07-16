import { Checkbox } from "@/components/ui/checkbox";
import ActiveCartItem from "./ActiveCartItem";
import InactiveCartItem from "./InactiveCartItem";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import type { CartItem } from "@/api/response";
import { getCartItems, updateCartItem } from "@/api/cart";
import { getStorageUser } from "@/lib/local-storage";
import { useCartItem } from "@/hooks/useCartItem";
import type { CheckedState } from "@radix-ui/react-checkbox";

function MainSection() {
  const { selectedCartItems, setSelectedCartItems } = useCartItem();
  const [activeCartItems, setActiveCartItems] = useState<CartItem[]>([]);
  const [inactiveCartItems, setInactiveCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    fetchActiveCartItems();
    fetchInactiveCartItems();
  }, []);

  const handleSelectAll = (isChecked: CheckedState) => {
    if (isChecked) {
      setSelectedCartItems(activeCartItems);
    } else {
      setSelectedCartItems([]);
    }
  };

  const handleBuyCartItems = async () => {
    if (selectedCartItems.length === 0) return;

    await Promise.all(
      selectedCartItems.map((cartItem) =>
        updateCartItem(cartItem.id!, { isBought: true }),
      ),
    );

    setSelectedCartItems([]);

    await fetchActiveCartItems();
    await fetchInactiveCartItems();
  };

  const fetchActiveCartItems = async () => {
    const user = getStorageUser();
    const res = await getCartItems(user.id, false);
    setActiveCartItems(res);
  };

  const fetchInactiveCartItems = async () => {
    const user = getStorageUser();
    const res = await getCartItems(user.id, true);
    setInactiveCartItems(res);
  };

  const isAllSelected =
    activeCartItems.length > 0 &&
    activeCartItems.every((item) =>
      selectedCartItems.some((selected) => selected.id === item.id),
    );

  return (
    <section className="bg-accent mt-16 px-30">
      <div className="flex flex-row items-start justify-center gap-x-5">
        <div className="w-2/3">
          <div className="w-full">
            <h1 className="my-5 text-2xl font-bold">Keranjang</h1>
            <div className="bg-background h-fit w-full rounded-xl">
              <div className="flex items-center justify-start gap-3 px-5 py-5">
                <Checkbox
                  checked={isAllSelected}
                  onCheckedChange={handleSelectAll}
                  className="size-5 border-black"
                />
                <p className="font-semibold">Pilih Semua</p>
              </div>

              <div className="bg-accent h-2 w-full" />
              {activeCartItems.map((activeCartItem) => (
                <ActiveCartItem
                  key={activeCartItem.id}
                  cartItem={activeCartItem}
                  onDelete={fetchActiveCartItems}
                  isSelected={selectedCartItems.some(
                    (item) => item.id === activeCartItem.id,
                  )}
                />
              ))}
            </div>
          </div>

          <div className="mb-10 w-full">
            <h1 className="my-5 text-2xl font-bold">Sudah Dibeli</h1>
            <div className="bg-background h-fit w-full rounded-xl">
              {inactiveCartItems.map((inactiveCartItem) => (
                <InactiveCartItem
                  key={inactiveCartItem.id}
                  cartItem={inactiveCartItem}
                  onDelete={fetchInactiveCartItems}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="sticky top-0 left-0 w-1/3 pt-18">
          <div className="w-full space-y-3 rounded-xl bg-white p-6">
            <h1 className="text-lg font-semibold">Ringkasan Belanja</h1>
            <p className="flex justify-between">
              <span>Total:</span>
              <span className="text-lg font-bold">
                Rp.
                {selectedCartItems.reduce(
                  (sum, cartItem) => sum + cartItem.productPrice,
                  0,
                )}
              </span>
            </p>
            <Button onClick={handleBuyCartItems} className="w-full text-lg">
              Beli
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
