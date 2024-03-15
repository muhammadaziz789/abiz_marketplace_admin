import { ReactNode } from "react";
import { useWebsiteStore } from "../../../store/website";
import { CBreadcrumb } from "../CBreadcrumb";
import { ActiveMenu } from "./ActiveMenu";
import { ExtraButtons } from "./ExtraButtons";

interface Props {
  title?: string;
  extraButtonsClick?: any;
  breadcrumbList?: any;
  children?: ReactNode
}

export const CHeader = ({
  title = "",
  extraButtonsClick,
  breadcrumbList = [],
  children
}: Props) => {
  const { collapsed } = useWebsiteStore();

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
            <ActiveMenu />
            {title && !breadcrumbList.length && <h1 className="text-xl font-medium">{title}</h1>}
            <CBreadcrumb items={breadcrumbList} />
          </div>
          {children}
          {extraButtonsClick ? (
            <ExtraButtons extraButtonsClick={extraButtonsClick} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
