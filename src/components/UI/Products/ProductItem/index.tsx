import { Button } from "antd";

export const ProductItem = () => {
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

        <Button className="bg-[var(--lightGray)] mt-5">Edit Product</Button>
      </div>
    </div>
  );
};
