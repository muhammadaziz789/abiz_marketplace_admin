interface Props {
  children: any;
}

export const PageWrapper = ({ children }: Props) => {
  return <div className="PageWrapper m-20px bg-[var(--white)] p-16px rounded-[16px]">{children}</div>;
};
