import { Collapse, Dropdown } from "antd";
import { CollapseItem } from "./MenuItem";
import { CIconGenerate } from "../../../CElements/CIconGenerate";
import { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

interface Props {
  open: boolean;
  element: any;
  navigate: (val: string, val2?: string) => void;
  checkpath: (val: string, val2?: string) => void;
}

export const MenuCollapse = ({
  open = true,
  element,
  navigate = () => {},
  checkpath = () => {},
}: Props) => {
  const [activeKey, setActiveKey] = useState(undefined);

  const items: any = [
    {
      key: element.key,
      label: (
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {element.icon ? (
              <div className="mr-16px w-[24px]">
                <CIconGenerate fill="var(--black)" icon={element.icon} />
              </div>
            ) : (
              ""
            )}
            <span>{element.key}</span>
          </div>

          <div>
            {activeKey?.[0] === element.key ? <DownOutlined /> : <UpOutlined />}
          </div>
        </div>
      ),
      children: element.list?.map((item: any, index: number) =>
        item.sidebar ? (
          <CollapseItem
            key={index}
            open={open}
            element={item}
            navigate={navigate}
            checkpath={checkpath}
          />
        ) : (
          ""
        )
      ),
    },
  ];

  const onChange = (key: any) => {
    setActiveKey(key);
  };

  const dropDownitems: any = element.list.map((item: any) => {
    if (!item.sidebar) return;
    return {
      label: (
        <CollapseItem
          element={item}
          navigate={navigate}
          checkpath={checkpath}
        />
      ),
      key: item.path,
    };
  });

  return (
    <div>
      {open ? (
        <Collapse
          items={items}
          bordered={false}
          activeKey={activeKey}
          accordion
          onChange={onChange}
        />
      ) : (
        <div className="px-20px relative h-[42px] flex items-center">
          <Dropdown
            menu={{ items: dropDownitems }}
            trigger={["hover"]}
            placement="bottomRight"
          >
            <button className={"flex justify-center w-full"}>
              <CIconGenerate fill="var(--black)" icon={element.icon} />
            </button>
          </Dropdown>
        </div>
      )}
    </div>
  );
};
