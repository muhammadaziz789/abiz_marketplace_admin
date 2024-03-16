import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface Props {
  row: any;
  rowClick: (val: any) => void;
  setEdit: (val: boolean) => void;
}

export const SettingCell = ({
  row = {},
  rowClick = () => {},
  setEdit = () => {},
}: Props) => {
  return (
    <div className="space-x-3">
      <Button onClick={() => rowClick(row)} icon={<EyeOutlined />}></Button>
      <Button onClick={() => {
        console.log('eee');
        
        setEdit(true)
      }} icon={<EditOutlined />}></Button>
      <Button icon={<DeleteOutlined />} type="primary" danger></Button>
    </div>
  );
};
