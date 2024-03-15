import { Checkbox } from "antd";

interface Props {
  checked: boolean;
  element: any;
  handleClick: (val: any) => void;
}

export const ActiveMenuCollapseItem = ({
  checked = false,
  element = {},
  handleClick = () => {},
}: Props) => {
  return (
    <div
      onClick={() => handleClick(element)}
      className="p-16px w-full hover:bg-[var(--hover)] relative cursor-pointer rounded-[8px]"
    >
      <Checkbox checked={checked}>
        <p>{element?.title}</p>
      </Checkbox>
    </div>
  );
};
