import { DefaultInput } from "./DefaultInput";

interface Props {
  type?: string;
  error?: any;
  label?: string;
  classes?: string;
  required?: boolean;
  inputType?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (val: any) => void;
  defaultValue?: number | string;
}

export const CInput = ({
  error,
  value = "",
  label = "",
  classes = "",
  type = "text",
  required = false,
  placeholder = "",
  defaultValue = "",
  inputType = "default",
  onChange = () => {},
}: Props) => {
  switch (inputType) {
    case "mask":
      return "mask input here";
    default:
      return (
        <DefaultInput
          type={type}
          error={error}
          value={value}
          label={label}
          classes={classes}
          required={required}
          onChange={onChange}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      );
  }
};
