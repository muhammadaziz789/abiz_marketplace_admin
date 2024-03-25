import { useMemo } from "react";

export const BreadcrumbList = (id?: string) => {
  const list = useMemo(() => {
    return [
      {
        title: "Foydalanuvchilar sahifasi",
        link: -1,
      },
      {
        title: id ? "Foydalanuvchini tahrirlash" : "Foydalanuvchi qo'shish",
      },
    ];
  }, [id]);

  return { list };
};