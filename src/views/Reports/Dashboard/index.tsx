import { Button } from "antd";
import { CHeader } from "../../../components/CElements/CHeader";
import { PageWrapper } from "../../../components/UI/PageWrapper";
import { DashboardTable } from "./Table";
import { PlusOutlined } from "@ant-design/icons";
import usePageRouter from "../../../hooks/usePageRouter";

const DashboardPage = () => {
  const { navigateTo } = usePageRouter();
  return (
    <>
      <CHeader title="Foydalanuvchilar">
        <Button
          onClick={() => navigateTo("/reports/users/update")}
          type="primary"
          className="save"
          icon={<PlusOutlined />}
        >
          Foydalanuvchi qo'shish
        </Button>
      </CHeader>
      <PageWrapper>
        <DashboardTable />
      </PageWrapper>
    </>
  );
};

export default DashboardPage;
