export const TableTitle = ({ title }: { title?: any }) => {
  if (!title.count) return <div></div>

  return (
    <div className="flex">
      <p className="text[var(--gray)] font-medium">{title.title},</p>
      <div className="ml-2 font-bold">
        <span>Jami:</span> <span>{title.count} ta</span>{" "}
      </div>
    </div>
  );
};
