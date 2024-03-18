interface Props {
  children: any;
  classes?: string
}

export const PageWrapper = ({ classes = "", children }: Props) => {
  return <div className={`PageWrapper m-20px bg-[var(--white)] p-16px rounded-[16px] ${classes}`}>{children}</div>;
};
