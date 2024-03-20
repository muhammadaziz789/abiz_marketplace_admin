import { CInput } from "../../../CInput";

interface Props {
  currentValue: any;
}

export const EditUI = ({ currentValue }: Props) => {
  if (typeof currentValue === "object") return <>{currentValue}</>

  return <CInput defaultValue={currentValue} />;
};
