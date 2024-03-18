import CTable from "../../../../components/CElements/CTable";
import usePageRouter from "../../../../hooks/usePageRouter";
import { data, columns } from "./data";

export const UsersTable = () => {
  const { navigateTo } = usePageRouter();

  const rowClick = (val1: any) => {
    navigateTo(`/reports/users/${val1.id}`);
  };

  return (
    <CTable
      columns={columns}
      data={data}
      rowClick={rowClick}
      headerTitle={{ count: 100, title: "Foydalanuvchilar soni" }}
    />
  );
};
