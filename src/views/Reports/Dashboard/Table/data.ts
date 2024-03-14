interface ColumnType {
  title: string;
  dataIndex: string;
  width?: number;
}

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export const columns: ColumnType[] = [
  {
    title: "Name",
    dataIndex: "name",
    width: 300,
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 150,
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

export const data: DataType[] = [
  {
    key: "1",
    name: `Edward King`,
    age: 32,
    address: `London, Park Lane no`,
  },
];
