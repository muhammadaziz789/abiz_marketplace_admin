import { ArrowLeftOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { memo } from "react";
import { Link } from "react-router-dom";

interface Props {
  items: any;
}

export const CBreadcrumb = memo(({ items }: Props) => {

  const newItems = items?.map((item: any, index: number) => {
    return {
      title: (
        <>
          {index === 0 && <ArrowLeftOutlined />}
          <Link
            to={item.link}
            style={{ color: index == items.length - 1 ? "var(--black)" : "" }}
          >
            {item.title}
          </Link>
        </>
      ),
      link: <>{item.link}</>,
    };
  });

  return <Breadcrumb items={newItems}></Breadcrumb>;
});
