import { Input } from "antd";
import { CHeader } from "../../../../components/CElements/CHeader";
import { PageWrapper } from "../../../../components/UI/PageWrapper";
import { useWebsiteStore } from "../../../../store/website";

const breadcrumbList = [
  {
    title: "Foydalanuvchilar sahifasi",
    link: -1,
  },
  {
    title: "Foydalanuvchi",
  },
];

export const UsersTableSinglePage = () => {
  const { setAlert } = useWebsiteStore();
  const extraButtonsClick = (type: string) => {
    if (type === "save") {
      setAlert({ message: "Dashboard created", type: "success" });
    }
  };

  return (
    <>
      <CHeader
        extraButtonsClick={extraButtonsClick}
        breadcrumbList={breadcrumbList}
      />
      <PageWrapper>
        <Input />
      </PageWrapper>
    </>
  );
};
