import { EditOutlined, EyeOutlined, SaveOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { DeleteUI } from "./Delete";

interface Props {
  row: any;
  edit: any;
  column: any;
  index: number;
  setEdit: (val: any) => void;
  rowClick: (val: any) => void;
}

export const SettingCell = ({
  edit,
  index,
  row = {},
  column = {},
  rowClick = () => {},
  setEdit = () => {},
}: Props) => {
  
  return (
    <div className="space-x-3">
      {column.actions?.includes("view") && (
        <Button onClick={() => rowClick(row)} icon={<EyeOutlined />}></Button>
      )}
      {edit === index ? (
        <Button
          type="primary"
          onClick={() => setEdit(null)}
          icon={<SaveOutlined />}
        ></Button>
      ) : column.actions?.includes("edit") ? (
        <Button onClick={() => setEdit(index)} icon={<EditOutlined />}></Button>
      ) : (
        ""
      )}

      {column.actions?.includes("delete") && <DeleteUI />}
    </div>
  );
};
