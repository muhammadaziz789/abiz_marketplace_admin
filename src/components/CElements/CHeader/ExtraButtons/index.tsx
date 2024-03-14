import { Button } from "antd";

export const ExtraButtons = () => {
  return (
    <div className="flex space-x-16px">
      <Button className="save" type="primary">save</Button>
      <Button className="cancel">cancel</Button>
    </div>
  );
};
