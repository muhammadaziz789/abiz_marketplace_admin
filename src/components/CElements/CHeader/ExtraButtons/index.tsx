import { Button } from "antd";
import { useParams } from "react-router-dom";

interface Props {
  extraButtonsClick: any;
  titleButtons?: any;
  formRef: any;
}

export const ExtraButtons = ({
  extraButtonsClick = () => {},
  titleButtons = ["", ""],
  formRef,
}: Props) => {
  const { id } = useParams();

  const titlePrimary: any = (title: string, id?: string) => {
    if (title) return title;

    return id ? "Update" : "Save";
  };

  const titleDefault: any = (title: string) => {
    return title ? title : "Cancel";
  };

  const handleClick = (type: string) => {
    if (type === "save" && formRef) {
      formRef.current.submitForm();
    }

    extraButtonsClick(type);
  };

  return (
    <div className="flex space-x-8px">
      <Button
        onClick={() => handleClick("save")}
        className="save"
        type="primary"
      >
        {titlePrimary(titleButtons[0], id)}
      </Button>
      <Button onClick={() => handleClick("cencel")} className="cancel">
        {titleDefault(titleButtons[1])}
      </Button>
    </div>
  );
};
