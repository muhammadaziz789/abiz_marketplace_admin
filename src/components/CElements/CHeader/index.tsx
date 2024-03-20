import { ReactNode } from "react";
import { useWebsiteStore } from "../../../store/website";
import { CBreadcrumb } from "../CBreadcrumb";
import { ExtraButtons } from "./ExtraButtons";
import { HumburgerIcon } from "../CIconGenerate/Icons/custom";
import { useActiveMenu } from "../../../store/activeMenu";

interface Props {
  title?: string;
  extraButtonsClick?: any;
  breadcrumbList?: any;
  children?: ReactNode;
  formRef?: any;
}

export const CHeader = ({
  title = "",
  extraButtonsClick,
  breadcrumbList = [],
  formRef,
  children,
}: Props) => {
  const { collapsed } = useWebsiteStore();
  const { setOpenMenu } = useActiveMenu();

  return (
    <div className="h-[70px]">
      <div
        className={`px-20px h-[70px] z-[98] bg-[var(--white)] fixed ${
          collapsed ? "left-[240px]" : "left-[60px]"
        } top-0`}
        style={{
          width: collapsed ? "calc(100vw - 240px)" : "calc(100vw - 60px)",
        }}
      >
        <div className="inline-flex items-center w-full h-full justify-between">
          <div className="flex items-center space-x-20px">
            {!collapsed && (
              <button
                onClick={() => setOpenMenu(true)}
                className="cursor-pointer"
              >
                <HumburgerIcon />
              </button>
            )}
            {title && !breadcrumbList.length && (
              <h1 className="text-xl font-medium">{title}</h1>
            )}
            <CBreadcrumb items={breadcrumbList} />
          </div>
          {children}
          {extraButtonsClick ? (
            <ExtraButtons
              formRef={formRef}
              extraButtonsClick={extraButtonsClick}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
