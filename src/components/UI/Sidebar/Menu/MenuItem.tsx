import { CIconGenerate } from "../../../CElements/CIconGenerate";

interface Props {
  open?: boolean;
  element: any;
  navigate: (val: string) => void;
  checkpath: (val: string, val2?: string) => any;
}

export const MenuItem = ({
  open = true,
  element = {},
  navigate = () => {},
  checkpath = () => {},
}: Props) => {
  return (
    <div
      onClick={() => navigate(element.path)}
      className="inline-flex items-center px-20px h-[42px] w-full hover:bg-[var(--hover)] cursor-pointer"
      style={{
        backgroundColor: checkpath(element.path) ? "var(--primary)" : "",
      }}
    >
      {element.icon && (
        <div
          className={`${
            open ? "mr-16px" : "flex justify-center w-full"
          } w-[24px]`}
        >
          <CIconGenerate
            fill={checkpath(element.path) ? "white" : "var(--black)"}
            icon={element.icon}
          />
        </div>
      )}

      {open ? (
        <p
          className="text-[var(--black)] text-sm"
          style={{
            color: checkpath(element.path) ? "white" : "var(--black)",
          }}
        >
          {element?.title}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export const CollapseItem = ({
  element = {},
  navigate = () => {},
  checkpath = () => {},
}: Props) => {
  return (
    <div
      onClick={() => navigate(element.path)}
      className="inline-flex items-center px-20px h-[42px] w-full hover:bg-[var(--hover)] relative cursor-pointer rounded-[8px]"
      style={{
        backgroundColor: checkpath(element.path) ? "var(--primary)" : "",
      }}
    >
      <div
        className="w-[8px] h-[8px] rounded-full mr-16px"
        style={{
          backgroundColor: checkpath(element.path) ? "white" : "var(--gray)",
        }}
      ></div>

      {checkpath(element.path) ? (
        <div className="absolute -left-[17px] top-1/2 -translate-y-1/2 w-[6px] h-full bg-[var(--primary)] rounded-full"></div>
      ) : (
        ""
      )}

      <p
        style={{
          color: checkpath(element.path) ? "white" : "var(--black)",
        }}
      >
        {element?.title}
      </p>
    </div>
  );
};
