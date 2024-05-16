import { CartProduct as Product } from "@/types/product";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

interface CartProductProps {
  product: Product;
}

function CartProduct({ product }: CartProductProps) {
  return (
    <>
      <div className="grid h-20 md:h-24 grid-cols-[80px_3fr_35px_96px]  md:grid-cols-[96px_3fr_125px_96px] gap-2 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-bold text-xl line-clamp-2">{product.name}</h3>
          <p className="text-foreground/50 line-clamp-1">
            {product.description}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center gap-2">
          <Button
            variant={"none"}
            className="h-6 w-6 md:h-8 md:w-8 p-0.5 text-foreground/50 hover:text-primary"
          >
            <Minus size={16} />
          </Button>
          <div className="p-1 pb-1.5 border rounded-md min-w-6 h-6 flex items-center justify-center text-foreground/75 border-foreground/50">
            {product.quantity}
          </div>
          <Button
            variant={"none"}
            className="h-6 w-6 md:h-8 md:w-8 p-0.5 text-foreground/50 hover:text-primary"
          >
            <Plus size={16} />
          </Button>
        </div>
        <p className="text-right text-foreground font-bold text-lg">
          ${product.price}
        </p>
      </div>
      <div className="border-b border-foreground/20"></div>
    </>
  );
}

export default CartProduct;
