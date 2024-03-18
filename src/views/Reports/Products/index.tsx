import { Button } from "antd";
import { CHeader } from "../../../components/CElements/CHeader";
import { PageWrapper } from "../../../components/UI/PageWrapper";
import { BannerUI } from "./Banner";
import { ProductList } from "./List";
import { PlusOutlined } from "@ant-design/icons";

const ProductsPage = () => {
  return (
    <>
      <CHeader title="Maxsulotlar">
        <Button type="primary" icon={<PlusOutlined />}>
          Maxsulot qo'shish
        </Button>
      </CHeader>

      <PageWrapper classes="bg-transparent p-0">
        <BannerUI />
      </PageWrapper>

      <PageWrapper classes="bg-transparent p-0">
        <ProductList />
      </PageWrapper>
    </>
  );
};

export default ProductsPage;
