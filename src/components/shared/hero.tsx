import { ShoppingCart, User } from "lucide-react"
import { Button } from "../ui/button"

const Hero = () => {
  return (
    <div className="px-4 py-20 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 md:gap-6">
      <div className="max-w-screen-md flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary">Discover all products at best prices</h1>
        <p className="mt-4 text-lg md:text-xl text-primary/80">
          A marketplace where you can find all the products you need at the best prices.
        </p>
        <div className="flex mt-4 gap-3 flex-wrap">
          <Button size="lg" className="text-lg font-medium flex gap-2 px-4">
            <ShoppingCart size={18} />
            Start Shopping
          </Button>
          <Button size="lg" variant={"secondary"} className="text-lg font-medium flex gap-2 px-4">
            <User size={18} />
            Edit Account
          </Button>
        </div>
      </div>
      <img src="/hero-image.jpg" alt="hero" className="w-full max-w-[450px] mx-auto h-full object-cover border-[8px] border-primary-foreground/50 rounded-lg rotate-2" />
    </div>
  )
}

export default Hero
