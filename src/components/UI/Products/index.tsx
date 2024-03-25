import { useCallback } from "react";
import usePageRouter from "../../../hooks/usePageRouter";
import { ProductItem } from "./ProductItem";

export const ProductsUI = ({ link = "" }) => {
  const list = [1, 2, 3, 4, 5];
  const { navigateTo } = usePageRouter();

  const handleItemClick = useCallback((element: any) => {
    navigateTo(`${link}/${element}`);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-16px">
      {list.map((item) => (
        <ProductItem
          key={item}
          element={item}
          handleItemClick={handleItemClick}
        />
      ))}
    </div>
  );
};
