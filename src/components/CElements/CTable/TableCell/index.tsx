import { SettingCell } from "./SettingCell";
interface Props {
  column: any;
  value: any;
  row: any;
  edit: boolean;
  rowClick?: (val: any) => void;
  setEdit: (val: boolean) => void;
}

export const TableCell = ({
  edit = false,
  setEdit = () => {},
  row = {},
  column = {},
  value,
  rowClick = () => {},
}: Props) => {
  const currentValue = column?.render
    ? Array.isArray(column.dataIndex)
      ? column.render(column.dataIndex.map((data: any) => row?.[data]))
      : column.render(row?.[column.dataIndex], row)
    : row?.[column.dataIndex]
    ? row?.[column.dataIndex]
    : value;

  return column.dataIndex === "setting" ? (
    <SettingCell row={row} rowClick={rowClick} setEdit={setEdit} />
  ) : (
    <div onClick={() => rowClick(row)}>{currentValue}</div>
  );
};
