import { ColumnSelection } from "./Selection";
import { TableTitle } from "./Title";

interface Props {
  columns: any;
  tableName: string;
  title?: any
}

export const TableHeader = ({ columns = [], tableName = "", title = {} }: Props) => {
  return (
    <div className="flex justify-between items-center pb-16px">
      <TableTitle title={title} />
      <ColumnSelection columns={columns} tableName={tableName} />
    </div>
  );
};
