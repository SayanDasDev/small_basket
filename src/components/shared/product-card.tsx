import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const ProductCard = () => {
  return (
    <Card className="w-full overflow-clip mx-auto">
      <div className="h-56 overflow-clip">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/da/Strawberry_ice_cream_cone_%285076899310%29.jpg"
          alt="image"
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">Strawberry Ice Cream</CardTitle>
        <CardDescription className="line-clamp-1">NIC ice creams</CardDescription>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex flex-1 justify-between items-center">
          <p className="text-primary font-bold text-xl">$5.00</p>
          <Button className="">Add to Cart</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
