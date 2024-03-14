import { SidebarMenu } from "./Menu";
import { SidebarBottom } from "./Bottom";
import { MenuFoldIcon } from "../../CElements/CIconGenerate/Icons/custom";

interface Props {
  mode: string;
  routes: any;
  collapsed: boolean;
  setCollapsed: (val: any) => void;
}

export const Sidebar = ({
  mode,
  routes = [],
  collapsed = true,
  setCollapsed = () => {},
}: Props) => {
  const getImgSrc = (mode: string) => {
    return mode === "dark" ? "/logo-full.svg" : "/logo-full-white.svg";
  };

  return (
    <div
      className="bg-[var(--white)] h-full flex flex-col justify-between"
      id="sidebar"
    >
      <div className="h-[70px]">
        <div className={`h-[70px] flex items-center ${collapsed ? 'justify-between px-20px' : 'justify-center'}`}>
          {collapsed ? (
            <img src={getImgSrc(mode)} alt="logo" />
          ) : (
            <img src="/logo.svg" alt="logo" />
          )}
          {collapsed ? (
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="flex items-center"
            >
              <MenuFoldIcon />
            </button>
          ) : (
            ""
          )}
        </div>
      </div>

      <SidebarMenu routes={routes} collapsed={collapsed} />

      <SidebarBottom collapsed={collapsed} />
    </div>
  );
};
