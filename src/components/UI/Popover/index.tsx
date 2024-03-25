import Closer from "../Closer";

interface Props {
  visible: boolean;
  position?: any;
  children: any;
  onClose?: () => void;
}

export const MiniPopover = ({
  visible = false,
  position = { right: 0, top: 40 },
  onClose = () => {},
  children,
}: Props) => {
  return (
    <>
      {visible && (
        <div
          className="absolute z-[99] w-auto"
          style={{
            right: position?.right,
            top: position?.top,
          }}
        >
          <div className="bg-[var(--white)] rounded-[16px] px-16px border border-[var(--border)] shadow-lg">{children}</div>
        </div>
      )}
      {visible && <Closer onClick={() => onClose()} />}
    </>
  );
};
