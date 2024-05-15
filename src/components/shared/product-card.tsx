import { Product } from "@/types/product";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Card className="w-full overflow-clip mx-auto">
      <div className="h-56 overflow-clip">
        <img
          src={product.image}
          alt="image"
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader className="h-32">
        <CardTitle className="line-clamp-2">{product.name}</CardTitle>
        <CardDescription className="line-clamp-1">
          {product.description}
        </CardDescription>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-1 flex-wrap gap-2 justify-between items-center">
        <p className="text-primary font-bold text-xl">${product.price}</p>
        <Button className="">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
