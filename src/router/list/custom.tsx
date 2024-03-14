import { lazy } from "react";

const DashboardPage = lazy(() => import("../../views/Reports/Dashboard"));


export const customList = [
  {
    parent: '',
    title: "profile",
    path: "profile",
    sidebar: false,
    element: <DashboardPage />,
  },
];
