import CTable from "../../../../components/CElements/CTable";
import { data, columns } from "./data";

export const DashboardTable = () => {
 
  return <CTable columns={columns} data={data} />;
};
