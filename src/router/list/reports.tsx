import { lazy } from "react";

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
    title: "report",
    path: "report",
    sidebar: true,
    element: <DashboardPage />,
  },
  {
    parent: '',
    title: "test",
    path: "test",
    icon: 'catalog',
    sidebar: true,
    element: <DashboardPage />,
  },
];
