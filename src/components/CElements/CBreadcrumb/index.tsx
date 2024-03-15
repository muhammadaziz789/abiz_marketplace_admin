import { Breadcrumb } from "antd";
import { memo } from "react";
import { Link, useParams } from "react-router-dom";

interface Props {
  items: any;
}

export const CBreadcrumb = memo(({ items }: Props) => {
  const { id } = useParams();

  const Plustitle = (last: boolean, id?: string) => {
    if (last) {
      return id ? "tahrirlash" : "qo'shish";
    }
    return ""
  };

  const newItems = items?.map((item: any, index: number) => {
    return {
      title: (
        <Link
          to={item.link}
          style={{ color: index == items.length - 1 ? "var(--black)" : "" }}
        >
          {item.title} {Plustitle(index == items.length - 1, id)}
        </Link>
      ),
      link: (
        <>
          {item.link}
        </>
      ),
    };
  });

  return <Breadcrumb items={newItems}></Breadcrumb>;
});
