import { TableDynamicFilter } from "./DynamicFilter";
import { ColumnSelection } from "./Selection";
import { TableTitle } from "./Title";

interface Props {
  tableName: string;
  title?: any;
}

export const TableHeader = ({ tableName = "", title = {} }: Props) => {
  return (
    <div className="flex justify-between items-center pb-16px">
      <TableTitle title={title} />
      <div className="flex items-center space-x-16px">
        <TableDynamicFilter />
        <ColumnSelection tableName={tableName} />
      </div>
    </div>
  );
};
