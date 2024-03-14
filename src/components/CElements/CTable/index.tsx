import { Table } from "antd";

interface Props {
  columns: any;
  data?: any;
}

const CTable = ({ columns = [], data = [] }: Props) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 50 }}
      scroll={{ y: "calc(100vh - 280px)" }}
    />
  );
};

export default CTable;
