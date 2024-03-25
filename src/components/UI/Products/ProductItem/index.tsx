import { Button } from "antd";
import { memo } from "react";

interface Props {
  element: any;
  handleItemClick: (val: any) => void
}

export const ProductItem: React.FC<Props> = memo(({ element, handleItemClick = () => {} }) => {
  return (
    <div className="bg-[var(--white)] rounded-[16px] overflow-hidden">
      <div className="h-[250px]">
        <img
          className="w-full h-full object-cover"
          src="/user.jpeg"
          alt="img"
        />
      </div>

      <div className="p-16px">
        <div>
          <h3 className="text-[var(--black)] text-base mb-2">Apple Watch Series 4 </h3>
          <span className="text-[var(--primary)]">$120.00</span>
        </div>

        <Button onClick={() => handleItemClick(element)} className="bg-[var(--lightGray)] mt-5">Edit Product</Button>
      </div>
    </div>
  );
})
