import { lazy } from "react";
import { DashboardSinglePage } from "../../views/Reports/Dashboard/SinglePage";

const DashboardPage = lazy(() => import("../../views/Reports/Dashboard"));


export const reportsList = [
  {
    parent: 'reports',
    title: "Foydalanuvchilar",
    path: "users",
    sidebar: true,
    element: <DashboardPage />,
  },
  {
    parent: 'reports',
    title: "",
    path: "users/:id",
    sidebar: false,
    element: <DashboardSinglePage />,
  },
  {
    parent: 'reports',
    title: "",
    path: "users/create",
    sidebar: false,
    element: <DashboardSinglePage />,
  },
];
