import { useCallback } from "react";
import usePageRouter from "../../../../hooks/usePageRouter";
import { CIconGenerate } from "../../../CElements/CIconGenerate";

const list: any = [
  {
    title: "profile",
    path: "profile",
    icon: "profile",
  },
  {
    title: "logout",
    path: "logout",
    icon: "logout",
  },
];

interface Props {
  collapsed: boolean;
}

export const SidebarBottom = ({ collapsed = true }: Props) => {
  const { navigateTo } = usePageRouter();

  const navigate = useCallback((link: string) => {
    if (link === 'logout') {
      return
    }
    navigateTo(link);
  }, []);

  return (
    <div className="border-t border-[var(--border)] pb-20px">
      {list.map((item: any, index: number) => (
        <div
          key={index}
          onClick={() => navigate(item.path)}
          className="inline-flex items-center px-16px h-[42px] w-full hover:bg-[var(--hover)] cursor-pointer"
        >
          <div className="mr-16px">
            <CIconGenerate fill="var(--black)" icon={item.icon} />
          </div>

          {collapsed && (
            <p className="text-[var(--black)] text-sm">{item?.title}</p>
          )}
        </div>
      ))}
    </div>
  );
};
