export type Product = {
  name: string;
  image: string;
  price: string;
  description: string;
};

export type CartProduct = Product & { quantity: number };