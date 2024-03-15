// import { RouteList } from "./RouteList";

import { useCallback, useMemo, useState } from "react";
import { useWebsiteStore } from "../../../../store/website";
import { RouteList } from "./RouteList";
import { MenuCollapse } from "../../../UI/Sidebar/Menu/Collapse";
import usePageRouter from "../../../../hooks/usePageRouter";
import { MenuItem } from "../../../UI/Sidebar/Menu/MenuItem";
import epmtyImage from "/images/no-data.png";
import Closer from "../../../UI/Closer";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export const ActiveMenuList = () => {
  const { activeMenuList } = useWebsiteStore();
  const [routeOpen, setRouteOpen] = useState(false);
  const { navigateTo, checkPath } = usePageRouter();
  const list = useMemo(() => {
    return activeMenuList;
  }, [activeMenuList]);

  const navigate = useCallback((link: string) => {
    navigateTo("/" + link);
  }, []);

  return (
    <div className="absolute left-32px top-4px z-[99] flex">
      <div className="border border-[var(--border)] shadow-lg bg-[var(--white)] rounded-[16px] min-w-[240px] overflow-hidden">
        {list?.length ? (
          <>
            {list?.map((item: any, index: number) => (
              <div key={index}>
                {item.key ? (
                  <MenuCollapse
                    open={true}
                    element={item}
                    navigate={navigate}
                    checkpath={checkPath}
                  />
                ) : (
                  <>
                    {item.sidebar && (
                      <MenuItem
                        open={true}
                        element={item}
                        navigate={navigate}
                        checkpath={checkPath}
                      />
                    )}
                  </>
                )}
              </div>
            ))}
          </>
        ) : (
          <img src={epmtyImage} alt="img" />
        )}
        {!routeOpen && (
          <Button
            onClick={() => setRouteOpen(true)}
            className="absolute -right-[44px] top-1/2 -translate-y-1/2 save"
            icon={<PlusOutlined />}
          />
        )}
      </div>
      {routeOpen && <RouteList setRouteOpen={setRouteOpen} />}
      {routeOpen && <Closer onClick={() => setRouteOpen(false)} />}
    </div>
  );
};
