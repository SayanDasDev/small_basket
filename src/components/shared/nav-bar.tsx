import { CircleUser, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const NavBar = () => {
  return (
    <header className="antialiased bg-accent/20 border-b h-14 flex items-center select-none px-2">
      <div className="max-w-screen-xl mx-auto flex flex-1 justify-between">
        <div className="flex gap-2 items-center">
          <img src="/logo.svg" alt="logo" className="w-8 h-8" />
          <h2 className="text-3xl font-bold text-primary">SmallBasket</h2>
        </div>
        <div className="flex items-center gap-6 text-primary">
          <Button variant={"none"} className="mt-0.5 relative">
            <ShoppingCart size={22} />
            <Badge className="absolute scale-75 -top-2 -right-4">10</Badge>
          </Button>
          <Button variant={"none"}>
            <CircleUser size={28} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
