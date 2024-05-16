import { ShoppingBasket } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { CartProduct as Product } from "@/types/product";
import CartProduct from "./cart-product";

function CartDrawer() {

  const product: Product[] = [
    {
      "name": "Intelligent Cotton Shoes",
      "image": "https://loremflickr.com/640/480/food?lock=2057580260098048",
      "price": "319.00",
      "description": "Movies",
      "quantity": 1
    },
    {
      "name": "Rustic Granite Ball",
      "image": "https://loremflickr.com/640/480/food?lock=6279754009280512",
      "price": "930.00",
      "description": "Home",
      "quantity": 10
    },
    {
      "name": "Small Frozen Soap",
      "image": "https://loremflickr.com/640/480/food?lock=5092448221003776",
      "price": "422.00",
      "description": "Kids",
      "quantity": 2
    },
    {
      "name": "Sleek Wooden Tuna",
      "image": "https://loremflickr.com/640/480/food?lock=2104921736347648",
      "price": "633.00",
      "description": "Electronics",
      "quantity": 3
    },
    {
      "name": "Oriental Granite Pizza",
      "image": "https://loremflickr.com/640/480/food?lock=2650445321338880",
      "price": "556.00",
      "description": "Clothing",
      "quantity": 4
    },
  ]

  return (
    <Drawer open>
      <DrawerContent className="space-y-4">
        <DrawerHeader className="flex gap-4 flex-wrap justify-between items-center border-b border-foreground/10">
          <div className="flex gap-2 items-center">
            <ShoppingBasket />
            <DrawerTitle className="text-xl font-bold">Your Cart</DrawerTitle>
          </div>
          <Button variant={"none"}>
            <DrawerDescription className="text-destructive hover:underline">
              Remove All
            </DrawerDescription>
          </Button>
        </DrawerHeader>
        <div className="max-h-[50vh] w-full px-4 md:px-10 flex flex-col gap-6 mx-auto overflow-y-scroll no-scrollbar">
          {product.map((product, index) => {
            return (
              <CartProduct key={index} product={product} />
            )
          })}
        </div>
        <DrawerFooter className="border-t space-y-3 border-foreground/10">
          <div className="flex justify-between">
            <p className="text-foreground/70 font-bold text-md">Total</p>
            <p className="text-foreground font-bold text-lg">$100</p>
          </div>
          <Button size={"lg"}>Proceed to Checkout</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default CartDrawer;
