import { DefaultInput } from "./DefaultInput";

export const CInput = ({
  value = "",
  inputType = "default",
  onChange = () => {},
  label = "",
  placeholder = "",
  error = "",
  classes = "",
  defaultValue = "123"
}) => {
  
  switch (inputType) {
    case "mask":
      return (
        ""
      );
    default:
      return (
        <DefaultInput
          value={value}
          onChange={onChange}
          label={label}
          error={error}
          classes={classes}
          defaultValue={defaultValue}
          placeholder={placeholder}
        />
      );
  }
};
