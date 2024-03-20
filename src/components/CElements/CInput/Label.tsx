export const CLabel = ({
  label,
  required = false,
}: {
  label?: string;
  required?: boolean;
}) => {
  return label ? (
    <p className="mb-[5px] font-medium">
      {required && <span className="text-red-500 mr-1">*</span>}
      {label}
    </p>
  ) : (
    ""
  );
};
