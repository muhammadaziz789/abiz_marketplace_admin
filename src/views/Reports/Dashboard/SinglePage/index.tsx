import { CHeader } from "../../../../components/CElements/CHeader";
import { PageWrapper } from "../../../../components/UI/PageWrapper";
import { useWebsiteStore } from "../../../../store/website";

const breadcrumbList = [
  {
    title: "Dashboard page",
    link: -1,
  },
  {
    title: "Dashboard update",
  },
];

export const DashboardSinglePage = () => {
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
      <PageWrapper>wrapper</PageWrapper>
    </>
  );
};
