import { ProductItem } from "./ProductItem";

export const ProductsUI = () => {
  return (
    <div className="grid grid-cols-3 gap-16px">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};
