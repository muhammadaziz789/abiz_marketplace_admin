import { HumburgerIcon } from "../../../CElements/CIconGenerate/Icons/custom";
import { ActiveMenuList } from "./MenuList";
import Closer from "../../Closer";
import { useActiveMenu } from "../../../../store/activeMenu";

export const ActiveMenu = ({ collapsed }: { collapsed: boolean }) => {
  const { open_menu, setOpenMenu } = useActiveMenu();
  return (
    <div id="activeMenu" className="relative">
      {collapsed && (
        <button onClick={() => setOpenMenu(true)} className="cursor-pointer">
          <HumburgerIcon />
        </button>
      )}

      {open_menu && <ActiveMenuList />}

      {open_menu && <Closer onClick={() => setOpenMenu(false)} />}
    </div>
  );
};
