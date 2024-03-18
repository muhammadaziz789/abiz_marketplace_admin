import { CInput } from "../../../CInput";

interface Props {
  currentValue: any;
}

export const EditUI = ({ currentValue }: Props) => {
  return <CInput defaultValue={currentValue} />;
};
