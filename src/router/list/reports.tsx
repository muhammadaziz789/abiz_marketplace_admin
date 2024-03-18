import { lazy } from "react";
import { UsersTableSinglePage } from "../../views/Reports/Users/SinglePage";

const UsersPage = lazy(() => import("../../views/Reports/Users"));
const ProductsPage = lazy(() => import("../../views/Reports/Products"))


export const reportsList = [
  {
    parent: 'reports',
    title: "Maxsulotlar",
    path: "dashboard",
    sidebar: true,
    element: <ProductsPage />,
  },
  {
    parent: 'reports',
    title: "Foydalanuvchilar",
    path: "users",
    sidebar: true,
    element: <UsersPage />,
  },
  {
    parent: 'reports',
    title: "",
    path: "users/:id",
    sidebar: false,
    element: <UsersTableSinglePage />,
  },
  {
    parent: 'reports',
    title: "",
    path: "users/create",
    sidebar: false,
    element: <UsersTableSinglePage />,
  },
];
