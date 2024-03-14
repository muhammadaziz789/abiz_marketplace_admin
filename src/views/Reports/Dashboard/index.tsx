import { CHeader } from "../../../components/CElements/CHeader";
import { PageWrapper } from "../../../components/UI/PageWrapper";
import { DashboardTable } from "./Table";

const DashboardPage = () => {
  return (
    <>
      <CHeader title="dashboard" />
      <PageWrapper>
        <DashboardTable />
      </PageWrapper>
    </>
  );
};

export default DashboardPage;
