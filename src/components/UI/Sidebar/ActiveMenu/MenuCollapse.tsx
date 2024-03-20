import { Collapse } from "antd";
// import { CollapseItem } from "./MenuItem";
import { CIconGenerate } from "../../../CElements/CIconGenerate";
import { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { ActiveMenuCollapseItem } from "./ActiveItem";

interface Props {
  element: any;
  handleClick: (val: string, val2?: string) => void;
  checkedList: any;
}

export const ActiveMenuCollapse = ({
  element,
  handleClick = () => {},
  checkedList = [],
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
          <ActiveMenuCollapseItem
            key={index}
            element={item}
            checked={checkedList.includes(item.path)}
            handleClick={() => handleClick({ ...item, icon: element.icon })}
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

  return (
    <div>
      <Collapse
        items={items}
        bordered={false}
        activeKey={activeKey}
        accordion
        onChange={onChange}
      />
    </div>
  );
};
