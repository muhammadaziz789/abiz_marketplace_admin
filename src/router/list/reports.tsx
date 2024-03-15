import { lazy } from "react";
import { DashboardSinglePage } from "../../views/Reports/Dashboard/SinglePage";

const DashboardPage = lazy(() => import("../../views/Reports/Dashboard"));


export const reportsList = [
  {
    parent: 'reports',
    title: "dashboard",
    path: "dashboard",
    sidebar: true,
    element: <DashboardPage />,
  },
  {
    parent: 'reports',
    title: "",
    path: "dashboard/:id",
    sidebar: false,
    element: <DashboardSinglePage />,
  },
];
