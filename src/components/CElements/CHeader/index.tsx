import { useWebsiteStore } from "../../../store/website";
import { CBreadcrumb } from "../CBreadcrumb";
import { ActiveMenu } from "./ActiveMenu";
import { ExtraButtons } from "./ExtraButtons";
import { ProfileUI } from "./Profile";

interface Props {
  title?: string;
  extraButtonActions?: any;
  breadcrumbList?: any;
}

export const CHeader = ({
  title = "",
  extraButtonActions,
  breadcrumbList = [],
}: Props) => {
  const { collapsed } = useWebsiteStore();

  return (
    <div className="h-[70px]">
      <div
        className={`px-20px h-[70px] bg-[var(--white)] fixed ${
          collapsed ? "left-[240px]" : "left-[60px]"
        } top-0`}
        style={{
          width: collapsed ? "calc(100vw - 240px)" : "calc(100vw - 60px)",
        }}
      >
        <div className="inline-flex items-center w-full h-full justify-between">
          <div className="flex space-x-20px">
            {/* {!collapsed && (
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="flex items-center"
              >
                <MenuUnFoldIcon />
              </button>
            )} */}
            <ActiveMenu />
            {title && <h1 className="text-xl font-medium">{title}</h1>}
            <CBreadcrumb items={breadcrumbList} />
          </div>

          {extraButtonActions ? <ExtraButtons /> : <ProfileUI />}
        </div>
      </div>
    </div>
  );
};
