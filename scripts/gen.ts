import { faker } from "@faker-js/faker";
import fs from "fs";
import { Product } from "../src/types/product";

const genFakeProduct = () => {
  const product: Product = {
    name: faker.commerce.productName(),
    image: faker.image.urlLoremFlickr({ category: 'food' }),
    price: faker.commerce.price(),
    description: faker.commerce.department(),
  };

  return product;
};

const genFakeProducts = (n: number) => {
  const products: Product[] = [];

  Array.from({ length: n }).forEach(() => {
    products.push(genFakeProduct());
  });

  return products;
};

const genJSON = (filePath: string, n: number) => {
  const products = genFakeProducts(n);

  fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
}

let number = process.argv[2];


if(!number) number = '25';

genJSON('./data/products.json', parseInt(number));

console.log(`Generated ${number} products in ./data/products.json`);