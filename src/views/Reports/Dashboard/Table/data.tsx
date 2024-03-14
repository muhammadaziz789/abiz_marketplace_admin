interface ColumnType {
  title: string;
  dataIndex: string;
  width?: number;
  render?: (text: any, record: any) => React.ReactNode;
}

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export const columns: any = [
  {
    title: "Name",
    dataIndex: "name",
    width: 300
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
    key: 1011,
    name: `Edward King`,
    age: 32,
    address: `London, Park Lane no`,
  },
];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King`,
    age: 3 + i,
    address: `London, Park Lane no`,
  });
}