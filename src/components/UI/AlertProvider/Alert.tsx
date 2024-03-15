import { useEffect } from "react";
import { useWebsiteStore } from "../../../store/website";
import { CloseOutlined } from "@ant-design/icons";
import { Alert } from "antd";

const defaultObj: any = {
  message: "",
  description: "",
  type: "success",
};

export const AlertUI = ({ AlertInfo }: { AlertInfo: any }) => {
  const { setAlert } = useWebsiteStore();

  useEffect(() => {
    if (AlertInfo?.message) {
      setTimeout(() => {
        setAlert(defaultObj);
      }, 5000);
    }
  }, [AlertInfo]);


  return (
    <>
      <div className="fixed top-20px right-20px z-[99]">
        <div className="flex justify-end">
          <CloseOutlined onClick={() => setAlert(defaultObj)} />
        </div>
        <Alert
          message={AlertInfo.message}
          description={AlertInfo?.description}
          type={AlertInfo.type || "success"}
          showIcon
        />
      </div>
    </>
  );
};
