import { EditUI } from "./Edit";
import { SettingCell } from "./SettingCell";
interface Props {
  index: number;
  column: any;
  value: any;
  row: any;
  edit: any;
  rowClick?: (val: any) => void;
  setEdit: (val: any) => void;
}

export const TableCell = ({
  index,
  edit,
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

  if (column.dataIndex === "setting") {
    return (
      <SettingCell
        row={row}
        edit={edit}
        index={index}
        rowClick={rowClick}
        setEdit={setEdit}
      />
    );
  }

  return (
    <>
      {index === edit ? (
        <EditUI currentValue={currentValue} />
      ) : (
        <div onClick={() => rowClick(row)}>{currentValue}</div>
      )}
    </>
  );
};
