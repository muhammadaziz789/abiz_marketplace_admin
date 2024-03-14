import { lazy } from "react";

const DashboardPage = lazy(() => import("../../views/Reports/Dashboard"));


export const catalogList = [
  {
    parent: 'catalog',
    title: "Foyda",
    path: "income",
    sidebar: true,
    element: <DashboardPage />,
  },
  {
    parent: 'catalog',
    title: "Zarar",
    path: "outcome",
    sidebar: true,
    element: <DashboardPage />,
  },
];
