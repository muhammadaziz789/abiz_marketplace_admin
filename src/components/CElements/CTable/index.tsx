import { Table } from "antd";
import { TablePagination } from "./Functions";
import "./style.scss";
import { useWebsiteStore } from "../../../store/website";
import { useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import { AvailableColumns } from "./Functions";
import { TableHeader } from "./TableHeader";
import { TableCell } from "./TableCell";

interface Props {
  columns: any;
  data?: any;
  headerTitle?: any;
  rowClick?: any;
}

const CTable = ({
  columns = [],
  data = [],
  headerTitle = {},
  rowClick,
}: Props) => {
  const { current, pageSize, pageSizeOptions, handlePageSizeChange } =
    TablePagination();

  const location = useLocation();
  const { tableDetails } = useWebsiteStore();
  const [edit, setEdit]: any = useState(null);

  const { getAvailableColumns } = AvailableColumns();
  const tableName = location.pathname;
  const details: any = tableDetails;

  const availableColumns = useMemo(() => {
    return getAvailableColumns(details, tableName, columns);
  }, [details[tableName], columns]);

  const renderedElements = useMemo(() => {
    return availableColumns?.map((column: any) => {
      return {
        ...column,
        width: column.dataIndex === "setting" ? 150 : column?.width,
        render: (value: any, element: any, index: number) => {
          return (
            <TableCell
              key={index}
              edit={edit}
              index={index}
              value={value}
              row={element}
              column={column}
              setEdit={setEdit}
              rowClick={rowClick}
            />
          );
        },
      };
    });
  }, [availableColumns, edit]);

  return (
    <div id="ctable">
      <TableHeader
        columns={columns}
        tableName={tableName}
        title={headerTitle}
      />
      <div className="border border-[var(--border)] rounded-[16px] overflow-hidden relative">
        <Table
          columns={renderedElements}
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
