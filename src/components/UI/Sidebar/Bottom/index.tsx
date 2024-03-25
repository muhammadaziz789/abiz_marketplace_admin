import { memo, useCallback, useState } from "react";
import usePageRouter from "../../../../hooks/usePageRouter";
import { CIconGenerate } from "../../../CElements/CIconGenerate";
import { LogoutModal } from "./Logout";

const list: any = [
  {
    title: "Muhammadaziz",
    path: "profile",
    icon: "profile",
  },
  {
    title: "Settings",
    path: "settings",
    icon: "settings",
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

export const SidebarBottom = memo(({ collapsed = true }: Props) => {
  const { navigateTo } = usePageRouter();
  const [modalOpen, setModalOpen] = useState(false)

  const navigate = (link: string) => {
    if (link === "logout") {
      setModalOpen(true)
      return;
    }
    navigateTo(link);
  };

  const closeModal = useCallback(() => {
    setModalOpen(false)
  }, [])

  return (
    <div className="border-t border-[var(--border)]">
      {list.map((item: any, index: number) => (
        <div
          key={index}
          onClick={() => navigate(item.path)}
          className="inline-flex items-center px-20px h-[42px] w-full hover:bg-[var(--hover)] cursor-pointer"
        >
          <div
            className={`${
              collapsed ? "mr-16px" : "flex justify-center w-full"
            } w-[30px]`}
          >
            {item.icon === "profile" ? (
              <div className="w-[30px] h-[30px]">
                <div className="w-[30px] h-[30px] rounded-full border border-[var(--border)] flex items-center justify-center">
                  <img
                    src="/user.jpeg"
                    alt="user"
                    className="rounded-full w-full h-full"
                  />
                </div>
              </div>
            ) : (
              <CIconGenerate fill="var(--black)" icon={item.icon} />
            )}
          </div>

          {collapsed && (
            <p className="text-[var(--black)] text-sm">{item?.title}</p>
          )}
        </div>
      ))}

      <LogoutModal open={modalOpen} closeModal={closeModal} />
    </div>
  );
});
