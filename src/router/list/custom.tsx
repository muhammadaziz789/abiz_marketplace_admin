import ProfilePage from "../../views/Profile";
import SettingsPage from "../../views/Settings";

export const customList = [
  {
    parent: "",
    title: "test",
    path: "test",
    icon: "",
    sidebar: true,
    element: "Test",
  },
  {
    parent: "",
    title: "profile",
    path: "profile",
    sidebar: false,
    element: <ProfilePage />,
  },
  {
    parent: "",
    title: "settings",
    path: "settings",
    icon: "settings",
    sidebar: false,
    element: <SettingsPage />,
  },
];
