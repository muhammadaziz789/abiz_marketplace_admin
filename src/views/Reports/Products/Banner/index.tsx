import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
const images = ["/images/img1.jpg", "/images/img2.jpg"];

export const BannerUI = () => {
  const [index, setIndex] = useState(0);

  const handleNavigate = (index: number, arr: any) => {
    if (arr.length - 1 === index) {
      setIndex((prev) => --prev);
    } else {
      setIndex((prev) => ++prev);
    }
  };
  return (
    <div className="h-[400px] rounded-[16px] overflow-hidden relative">
      <div className="relative z-[2] py-32px px-[94px] text-white h-full flex items-center bg-[#00000033]">
        <div>
          <span className="text-sm">September 12-22</span>
          <h1 className="text-4xl font-medium my-2">
            Enjoy free home delivery in <br /> this summer
          </h1>
          <p className="mb-4">
            Designer Dresses - Pick from trendy Designer Dress.
          </p>
          <Button type="primary">Get Started</Button>
        </div>
      </div>

      <>
        <img
          className="w-full h-full object-cover absolute left-0 top-0"
          src={images[index]}
          alt={images[index]}
        />

        <div className="absolute left-16px top-1/2 -translate-y-1/2 z-[2]">
          <Button
            onClick={() => handleNavigate(index, images)}
            className="bg-[var(--border)] rounded-full"
            icon={<LeftOutlined />}
          ></Button>
        </div>
        <div className="absolute right-16px top-1/2 -translate-y-1/2 z-[2]">
          <Button
            onClick={() => handleNavigate(index, images)}
            className="bg-[var(--border)] rounded-full"
            icon={<RightOutlined />}
          ></Button>
        </div>
      </>
    </div>
  );
};
