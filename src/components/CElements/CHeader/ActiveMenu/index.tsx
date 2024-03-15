import { useState } from "react";
import { HumburgerIcon } from "../../CIconGenerate/Icons/custom";
import { ActiveMenuList } from "./MenuList";
import Closer from "../../../UI/Closer";

export const ActiveMenu = () => {
  const [open, setOpen] = useState(false)
  return (
    <div id="activeMenu" className="relative z-[99]">
      <button onClick={() => setOpen(true)} className="cursor-pointer">
        <HumburgerIcon />
      </button>
      
      {open && <ActiveMenuList  />}

      {open && <Closer onClick={() => setOpen(false)} />}
    </div>
  );
};
