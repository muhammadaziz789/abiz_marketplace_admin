import { Input } from "antd";
import { useEffect, useState } from "react";

interface Props {
  value?: any;
  type?: string;
  label?: string;
  error?: any;
  classes?: string;
  placeholder?: string;
  defaultValue?: any;
  onChange?: (val: any) => void;
}

export const DefaultInput = ({
  value,
  type,
  label,
  error,
  classes,
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
