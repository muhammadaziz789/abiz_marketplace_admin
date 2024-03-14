import { SettingsIcon } from "./Icons/custom";
import { DashboardIcon, LogoutIcon, ProductsIcon, ProfileIcon } from "./Icons/sidebar";

export const iconsList = [
  {
    name: "dashboard",
    component: DashboardIcon,
  },
  {
    name: "catalog",
    component: ProductsIcon,
  },
  {
    name: "profile",
    component: ProfileIcon,
  },
  {
    name: "settings",
    component: SettingsIcon,
  },
  {
    name: "logout",
    component: LogoutIcon,
  },
];
