import { memo } from "react";
import { iconsList } from "./list";

interface Props {
  icon: string;
  fill?: any;
}

export const CIconGenerate = memo(({ icon, fill, ...props }: Props) => {
  const findedIcon = iconsList.find((el) => el.name === icon);
  if (!findedIcon) return null;

  return <findedIcon.component fill={fill} {...props} />;
});
