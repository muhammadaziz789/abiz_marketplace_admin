import { Button } from "antd";
import { CHeader } from "../../../components/CElements/CHeader";
import { PageWrapper } from "../../../components/UI/PageWrapper";
import { UsersTable } from "./Table";
import { PlusOutlined } from "@ant-design/icons";
import usePageRouter from "../../../hooks/usePageRouter";

const UsersPage = () => {
  const { navigateTo } = usePageRouter();
  return (
    <>
      <CHeader title="Foydalanuvchilar">
        <Button
          onClick={() => navigateTo("/reports/users/create")}
          type="primary"
          className="save"
          icon={<PlusOutlined />}
        >
          Foydalanuvchi qo'shish
        </Button>
      </CHeader>
      <PageWrapper>
        <UsersTable />
      </PageWrapper>
    </>
  );
};

export default UsersPage;
