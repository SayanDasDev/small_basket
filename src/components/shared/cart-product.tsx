import { CartProduct as Product } from "@/types/product"
import { Button } from "../ui/button"
import { Minus, Plus } from "lucide-react"

interface CartProductProps {
  product: Product
}

function CartProduct({product}: CartProductProps) {
  return (
    <div className="grid h-20 md:h-24 grid-cols-[80px_3fr_35px_96px]  md:grid-cols-[96px_3fr_125px_96px] gap-2 items-center">
      <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
      <div className="flex flex-col">
        <h3 className="font-bold text-xl line-clamp-2">{product.name}</h3>
        <p className="text-foreground/50 line-clamp-1">{product.description}</p>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center gap-0.5 md:gap-2">
        <Button variant={"outline"} className="h-6 w-6 md:h-8 md:w-8 p-0.5">
          <Plus size={16} />
        </Button>
        <span>{product.quantity}</span>
        <Button variant={"outline"} className="h-6 w-6 md:h-8 md:w-8 p-0.5">
          <Minus size={16} />
        </Button>
      </div>
      <p className="text-right font-bold text-lg">${product.price}</p>
    </div>
  )
}

export default CartProduct