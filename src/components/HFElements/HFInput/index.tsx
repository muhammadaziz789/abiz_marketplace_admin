import { Controller } from "react-hook-form";
import { CInput } from "../../CElements/CInput";

interface Props {
  type?: string;
  rules?: any;
  name: string;
  control: any;
  label?: string;
  required?: boolean;
}

export const HFInput = ({
  type,
  name,
  control,
  rules,
  label = "",
  required = false,
}: Props) => {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        defaultValue=""
        rules={{
          ...rules,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <CInput
            type={type}
            value={value}
            error={error}
            label={label}
            onChange={onChange}
            required={required}
          />
        )}
      />
    </div>
  );
};
