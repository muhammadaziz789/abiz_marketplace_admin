import { Checkbox, Switch } from "antd";
import { SettingsIcon } from "../../../CIconGenerate/Icons/custom";
import { useEffect, useState } from "react";
import Closer from "../../../../UI/Closer";
import { useWebsiteStore } from "../../../../../store/website";
import {
  DeleteFilled,
  EditFilled,
  EyeOutlined,
} from "@ant-design/icons";

interface Props {
  columns: any;
  tableName: string;
}

export const ColumnSelection = ({ columns, tableName = "" }: Props) => {
  const { tableDetails, setTableDetails } = useWebsiteStore();
  const details: any = tableDetails;
  const [visible, setVisible] = useState(false);
  const [list, setList]: any = useState([]);

  const handleSelection = (id: any) => {
    let arr: any = details?.[tableName]?.columns || [];

    if (arr.includes(id)) {
      arr = arr.filter((item: any) => item !== id);
    } else arr = [...arr, id];

    setList(arr);

    const obj: any = {
      ...details,
      [tableName]: { ...details[tableName], columns: arr },
    };

    setTableDetails(obj);
  };

  useEffect(() => {
    if (details?.[tableName]?.columns?.length) {
      setList(details[tableName].columns);
    } else {
      setList([
        ...columns?.map((item: any) => item.dataIndex),
        ...["view", "edit", "delete"],
      ]);
    }
  }, [details[tableName]]);

  return (
    <>
      <div className="relative">
        <button onClick={() => setVisible(true)}>
          <SettingsIcon width={24} />
        </button>

        {visible && (
          <div className="absolute right-0 top-[30px] z-[99] bg-[var(--white)] rounded-[16px] px-16px border border-[var(--border)] shadow-lg">
            {columns?.map((item: any) => (
              <div key={item.dataIndex} className="py-8px">
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelection(item.dataIndex);
                  }}
                >
                  <Checkbox checked={list.includes(item.dataIndex)}>
                    {item.title}
                  </Checkbox>
                </div>
                {item.dataIndex === "setting" && (
                  <div className="my-2 flex space-x-4">
                    <Switch
                      checkedChildren={<EyeOutlined />}
                      onChange={() => handleSelection("view")}
                      checked={list.includes("view")}
                      className="bg-[var(--gray)]"
                    />
                    <Switch
                      checkedChildren={<EditFilled />}
                      onChange={() => handleSelection("edit")}
                      checked={list.includes("edit")}
                      className="bg-[var(--gray)]"
                    />
                    <Switch
                      checkedChildren={<DeleteFilled />}
                      onChange={() => handleSelection("delete")}
                      className="bg-[var(--gray)]"
                      checked={list.includes("delete")}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {visible && <Closer onClick={() => setVisible(false)} />}
    </>
  );
};
