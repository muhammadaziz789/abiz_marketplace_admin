interface Props {
  children: any;
  classes?: string
}

export const PageWrapper = ({ classes = "", children }: Props) => {
  return <div className={`PageWrapper m-20px bg-[var(--white)] rounded-[16px] p-16px ${classes}`}>{children}</div>;
};
