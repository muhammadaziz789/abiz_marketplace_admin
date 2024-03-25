import { useMemo } from "react";

export const BreadcrumbList = (id?: string) => {
  const list = useMemo(() => {
    return [
      {
        title: "Maxsulotlar sahifasi",
        link: -1,
      },
      {
        title: id ? "Maxsulotni tahrirlash" : "Maxsulot qo'shish",
      },
    ];
  }, [id]);

  return { list };
};