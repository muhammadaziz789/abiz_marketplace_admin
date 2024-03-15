import { Button } from "antd";
import { useParams } from "react-router-dom";

interface Props {
  extraButtonsClick: any;
  titleButtons?: any;
}

export const ExtraButtons = ({
  extraButtonsClick = () => {},
  titleButtons = ["", ""],
}: Props) => {
  const { id } = useParams();

  const titlePrimary: any = (title: string, id?: string) => {
    if (title) return title;

    if (id) return "Update";
    return "Save";
  };

  const titleDefault: any = (title: string) => {
    if (title) return title;
    return "Cancel";
  };

  return (
    <div className="flex space-x-16px">
      <Button
        onClick={() => extraButtonsClick("save")}
        className="save"
        type="primary"
      >
        {titlePrimary(titleButtons[0], id)}
      </Button>
      <Button onClick={() => extraButtonsClick("cencel")} className="cancel">
        {titleDefault(titleButtons[1])}
      </Button>
    </div>
  );
};
