import { Outlet } from "react-router-dom";
import cls from "./style.module.scss";
import { Sidebar } from "../../components/UI/Sidebar";
import { ChangeThems } from "./Functions";
import { useWebsiteStore } from "../../store/website";

const MainLayout = () => {
  const mode: any = "light";
  const { collapsed, setCollapsed } = useWebsiteStore();
  const { routes } = useWebsiteStore();

  return (
    <div className={cls.layout}>
      <div
        className="h-[100vh] duration-200"
        style={{ width: collapsed ? "240px" : "60px" }}
      >
        <div
          className="fixed left-0 h-full duration-200 z-[99]"
          style={{ width: collapsed ? "240px" : "60px" }}
        >
          <Sidebar
            mode={mode}
            collapsed={collapsed}
            routes={routes}
            setCollapsed={setCollapsed}
          />
        </div>
      </div>
      <div
        className={`${cls.content} duration-200`}
        style={{ width: collapsed ? "calc(100vw - 240px)" : "calc(100vw - 60px)" }}
      >
        <Outlet />
      </div>

      <ChangeThems mode={mode} />
    </div>
  );
};

export default MainLayout;
