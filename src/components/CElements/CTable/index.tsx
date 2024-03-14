import { Table } from "antd";
import { TablePagination } from "./Functions";
import "./style.scss";
import { ColumnSelection } from "./Selection";
import { useWebsiteStore } from "../../../store/website";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { AvailableColumns } from "./Functions";

interface Props {
  columns: any;
  data?: any;
}

const CTable = ({ columns = [], data = [] }: Props) => {
  const { current, pageSize, pageSizeOptions, handlePageSizeChange } =
    TablePagination();

  const location = useLocation();
  const { tableDetails } = useWebsiteStore();

  const { getAvailableColumns } = AvailableColumns();
  const tableName = location.pathname;
  const details: any = tableDetails;

  const availableColumns = useMemo(() => {
    return getAvailableColumns(details, tableName, columns);
  }, [details[tableName], columns]);

  return (
    <div id="ctable">
      <div className="flex justify-end pb-16px">
        <ColumnSelection columns={columns} tableName={tableName} />
      </div>
      <div className="border border-[var(--border)] rounded-[16px] overflow-hidden relative">
        <Table
          columns={availableColumns}
          dataSource={availableColumns?.length ? data : []}
          pagination={{
            current,
            pageSize,
            pageSizeOptions,
            onChange: handlePageSizeChange,
          }}
          scroll={{ y: "500px" }}
        />
      </div>
    </div>
  );
};

export default CTable;
