import { Input } from "antd";
import { useEffect, useState } from "react";
import { CLabel } from "./Label";

interface Props {
  props?: any;
  value?: any;
  error?: any;
  type: string;
  label?: string;
  classes?: string;
  defaultValue?: any;
  required?: boolean;
  placeholder?: string;
  onChange?: (val: any) => void;
}

export const DefaultInput = ({
  type,
  value,
  label,
  error,
  classes,
  required,
  placeholder,
  defaultValue,
  onChange = () => {},
  ...props
}: Props) => {
  const [current, setCurrent]: any = useState(null);
  const handleChange = (val: any) => {
    onChange(val);
    setCurrent(val);
  };

  useEffect(() => {
    if (value) {
      if (value == 0) setCurrent("");
      else setCurrent(value);
    } else {
      setCurrent(defaultValue);
    }
  }, [defaultValue, value]);

  return (
    <>
      <CLabel label={label} required={required} />
      <Input
        type={type}
        value={current}
        className={`${
          error ? "border-[var(--error)]" : "border-[var(--border)]"
        } text-[var(--black)] border placeholder-[var(--gray)] ${classes}`}
        placeholder={!label ? placeholder : ""}
        onChange={(e) => handleChange(e.target.value)}
        {...props}
      />
    </>
  );
};
