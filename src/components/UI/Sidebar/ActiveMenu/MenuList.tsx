import { useCallback, useMemo, useState } from "react";
import { useWebsiteStore } from "../../../../store/website";
import { RouteList } from "./RouteList";
import { MenuCollapse } from "../Menu/Collapse";
import usePageRouter from "../../../../hooks/usePageRouter";
import { MenuItem } from "../Menu/MenuItem";
import epmtyImage from "/images/no-data.png";
import Closer from "../../Closer";
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
    <div className="absolute top-[30px] z-[99] left-32px flex">
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
          <div className="w-[100px] min-h-[110px] mx-auto">
            <img src={epmtyImage} alt="img" />
          </div>
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
