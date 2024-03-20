import { useImperativeHandle } from "react";

interface Props {
  formRef: any;
  handleSubmit: (val: any) => any;
  onSubmit: (val: any) => void;
  children: any
}

const HFWrapper = ({
  formRef,
  handleSubmit = () => {},
  onSubmit = () => {},
  children,
}: Props) => {
  useImperativeHandle(formRef, () => ({
    submitForm() {
      handleSubmit(onSubmit)();
    },
  }));

  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      {children}
    </form>
  );
};

export default HFWrapper;
