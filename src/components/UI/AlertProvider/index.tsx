import { useWebsiteStore } from "../../../store/website";
import { useMemo } from "react";
import { AlertUI } from "./Alert";
const AlertProvider = ({ children }: { children: any }) => {
  const { alert } = useWebsiteStore();

  const AlertInfo: any = useMemo(() => {
    const obj: any = alert;

    if (alert?.type) obj.type = "success";
    return obj;
  }, [alert]);

  return (
    <>
      {AlertInfo?.message && <AlertUI AlertInfo={AlertInfo} />}

      {children}
    </>
  );
};

export default AlertProvider;
