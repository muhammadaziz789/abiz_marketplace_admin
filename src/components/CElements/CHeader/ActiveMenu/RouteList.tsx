import { useWebsiteStore } from "../../../../store/website";
import epmtyImage from "/images/no-data.png";
import { useEffect, useState } from "react";
import { ActiveMenuCollapse } from "./MenuCollapse";
import { ActiveMenuCollapseItem } from "./ActiveItem";
import { Button } from "antd";

interface Props {
  setRouteOpen: (val: boolean) => void;
}

export const RouteList = ({ setRouteOpen = () => {} }: Props) => {
  const { routes, activeMenuList, setActiveMenuList } = useWebsiteStore();
  const [list, setList]: any = useState([]);
  const [activeList, setActiveList] = useState([]);

  const handleClick = (element: any) => {
    let arr: any = activeList || [];

    if (arr.some((item: any) => item.path === element.path)) {
      arr = arr.filter((item: any) => item.path !== element.path);
    } else arr = [...arr, element];

    setActiveList(arr);
  };

  const handleSubmit = (arr: any) => {
    setActiveMenuList(arr);
    setRouteOpen(false);
  };

  useEffect(() => {
    if (activeMenuList?.length) {
      setActiveList(activeMenuList);
    }
  }, [activeMenuList]);

  useEffect(() => {
    if (activeList?.length) {
      const links = activeList?.map((item: any) => {
        return item?.path;
      });
      setList(links);
    } else setList([]);
  }, [activeList]);

  return (
    <div className="ml-16px min-w-[240px] py-16px relative z-[99] border border-[var(--border)] shadow-lg bg-[var(--white)] rounded-[16px]">
      {routes?.length ? (
        <>
          {routes.map((item: any, index: number) => (
            <div key={index}>
              {item.key ? (
                <ActiveMenuCollapse
                  element={item}
                  handleClick={handleClick}
                  checkedList={list}
                />
              ) : (
                <>
                  {item.sidebar && (
                    <div className="px-8px">
                      <ActiveMenuCollapseItem
                        element={item}
                        checked={list?.includes(item.path)}
                        handleClick={handleClick}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </>
      ) : (
        <img src={epmtyImage} alt="empty" />
      )}
      <Button
        onClick={() => handleSubmit(activeList)}
        className="absolute bottom-[-40px] right-0 save"
      >
        Saqlash
      </Button>
    </div>
  );
};
