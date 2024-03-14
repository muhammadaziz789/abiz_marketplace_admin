import { memo, useCallback } from "react";
import { MenuItem } from "./MenuItem";
import usePageRouter from "../../../../hooks/usePageRouter";
import { MenuCollapse } from "./Collapse";

interface Props {
  routes: any;
  collapsed: boolean;
}

export const SidebarMenu = memo(({ routes, collapsed = true }: Props) => {
  const { navigateTo, checkPath } = usePageRouter();

  const navigate = useCallback((link: string) => {
    navigateTo(link);
  }, []);

  return (
    <div className="py-16px h-full overflow-scroll">
      {routes?.map((item: any, index: number) => (
        <div key={index}>
          {item.key ? (
            <MenuCollapse
              open={collapsed}
              element={item}
              navigate={navigate}
              checkpath={checkPath}
            />
          ) : (
            <>
              {item.sidebar && (
                <MenuItem
                  open={collapsed}
                  element={item}
                  navigate={navigate}
                  checkpath={checkPath}
                />
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
});
