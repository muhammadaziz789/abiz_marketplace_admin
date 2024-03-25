import { Checkbox, Switch } from "antd";
import { SettingsIcon } from "../../../CIconGenerate/Icons/custom";
import { useState } from "react";
import { useWebsiteStore } from "../../../../../store/website";
import { DeleteFilled, EditFilled, EyeOutlined } from "@ant-design/icons";
import { MiniPopover } from "../../../../UI/Popover";

interface Props {
  tableName: string;
}

export const ColumnSelection = ({ tableName = "" }: Props) => {
  const { tableDetails, setTableDetails } = useWebsiteStore();
  const details: any = tableDetails;
  const [visible, setVisible] = useState(false);

  const handleSelection = (dataIndex: any, filter?: string) => {
    let arr: any = details?.[tableName]?.columns || [];
    arr = arr.map((item: any) => {
      if (item.dataIndex === dataIndex) {
        if (dataIndex === "setting" && filter) {
          if (item.actions.includes(filter)) {
            item.actions = item.actions.filter(
              (item: string) => item !== filter
            );
          } else {
            item.actions = [...item.actions, filter];
          }
        } else {
          item.active = !item.active;
        }
      }

      return item;
    });

    const obj: any = {
      ...details,
      [tableName]: { ...details[tableName], columns: arr },
    };

    setTableDetails(obj);
  };

  return (
    <div className="relative">
      <button onClick={() => setVisible(true)}>
        <SettingsIcon width={24} />
      </button>

      {visible && (
        <MiniPopover visible={visible} onClose={() => setVisible(false)}>
          {details[tableName].columns.map((item: any) => (
            <div key={item.dataIndex} className="py-8px">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  handleSelection(item.dataIndex);
                }}
              >
                <Checkbox checked={item.active}>{item.title}</Checkbox>
              </div>
              {item.dataIndex === "setting" && (
                <div className="my-2 flex space-x-4">
                  <Switch
                    checkedChildren={<EyeOutlined />}
                    onChange={() => handleSelection("setting", "view")}
                    checked={item.actions.includes("view")}
                    className="bg-[var(--gray)]"
                  />
                  <Switch
                    checkedChildren={<EditFilled />}
                    onChange={() => handleSelection("setting", "edit")}
                    checked={item.actions.includes("edit")}
                    className="bg-[var(--gray)]"
                  />
                  <Switch
                    checkedChildren={<DeleteFilled />}
                    onChange={() => handleSelection("setting", "delete")}
                    className="bg-[var(--gray)]"
                    checked={item.actions.includes("delete")}
                  />
                </div>
              )}
            </div>
          ))}
        </MiniPopover>
      )}
    </div>
  );
};
