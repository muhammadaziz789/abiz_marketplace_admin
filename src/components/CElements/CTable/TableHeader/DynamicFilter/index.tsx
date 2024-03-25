import { useState } from "react";
import { FilterIcon } from "../../../CIconGenerate/Icons/custom";
import { MiniPopover } from "../../../../UI/Popover";
import { FirstColumn } from "./FirstCol";
import { SecondColumn } from "./SecondCol";
import { ThirdColumn } from "./ThirdColumn";

export const TableDynamicFilter = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setVisible(true)}>
        <FilterIcon />
      </button>

      <MiniPopover visible={visible} onClose={() => setVisible(false)}>
        <div className="grid grid-cols-3 gap-x-16px">
          <FirstColumn />
          <SecondColumn />
          <ThirdColumn />
        </div>
      </MiniPopover>
    </div>
  );
};
