// import { Input } from "antd";

import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface Props {
  column: any;
  value: any;
  row: any;
}

export const TableCell = ({ row = {}, column = {}, value }: Props) => {
  const currentValue = column?.render
    ? Array.isArray(column.dataIndex)
      ? column.render(column.dataIndex.map((data: any) => row?.[data]))
      : column.render(row?.[column.dataIndex], row)
    : row?.[column.dataIndex]
    ? row?.[column.dataIndex]
    : value;

  // console.log('column', column);

  if (column.dataIndex === "setting") {
    return (
      <div className="space-x-2">
        <Button icon={<EyeOutlined />}></Button>
        <Button icon={<EditOutlined />}></Button>
        <Button icon={<DeleteOutlined />} type="primary" danger></Button>
      </div>
    );
  }

  return <>{currentValue}</>;
};
