import CTable from "../../../../components/CElements/CTable";
import { columns, data } from "./data";

export const DashboardTable = () => {
  return <CTable columns={columns} data={data} />;
};
