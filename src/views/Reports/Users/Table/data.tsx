// interface ColumnType {
//   title: string;
//   dataIndex: string;
//   width?: number;
//   render?: (text: any, record: any) => React.ReactNode;
// }

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  id: number;
}

export const columns: any = [
  {
    title: "Name",
    dataIndex: "name",
    width: 300,
    render: () => {
      return <>111</>;
    },
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 300,
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "setting",
    dataIndex: "setting",
  },
];
export const data: DataType[] = [
  {
    key: 1011,
    name: `Edward King`,
    age: 32,
    id: 111,
    address: `London, Park Lane no`,
  },
];

for (let i = 0; i < 100; i++) {
  data.push({
    id: i,
    key: i,
    name: `Edward King`,
    age: 3 + i,
    address: `London, Park Lane no`,
  });
}
