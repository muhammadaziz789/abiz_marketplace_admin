import { EditOutlined, EyeOutlined, SaveOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { DeleteUI } from "./Delete";

interface Props {
  row: any;
  edit: any;
  index: number;
  rowClick: (val: any) => void;
  setEdit: (val: any) => void;
}

export const SettingCell = ({
  edit,
  index,
  row = {},
  rowClick = () => {},
  setEdit = () => {},
}: Props) => {
  return (
    <div className="space-x-3">
      <Button onClick={() => rowClick(row)} icon={<EyeOutlined />}></Button>
      {edit === index ? (
        <Button
          type="primary"
          onClick={() => setEdit(null)}
          icon={<SaveOutlined />}
        ></Button>
      ) : (
        <Button onClick={() => setEdit(index)} icon={<EditOutlined />}></Button>
      )}

      <DeleteUI />
    </div>
  );
};
