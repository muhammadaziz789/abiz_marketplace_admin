import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";

export const DeleteUI = ({}) => {
  return (
    <Popconfirm
      title="Ma'lumotni o'chirish!"
      description="Tasdiqlash orqali ma'lumotni o'chirib yuborasiz"
      onConfirm={() => {}}
      onCancel={() => {}}
      okText="Tasdiqlash"
      cancelText="Bekor qilish"
      placement="leftTop"
    >
      <Button icon={<DeleteOutlined />} type="primary" danger></Button>
    </Popconfirm>
  );
};
