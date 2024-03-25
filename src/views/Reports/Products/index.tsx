import { Button } from "antd";
import { CHeader } from "../../../components/CElements/CHeader";
import { PageWrapper } from "../../../components/UI/PageWrapper";
import { BannerUI } from "./Banner";
import { ProductList } from "./List";
import { PlusOutlined } from "@ant-design/icons";
import usePageRouter from "../../../hooks/usePageRouter";

const ProductsPage = () => {
  const { navigateTo } = usePageRouter()
  return (
    <>
      <CHeader title="Maxsulotlar sahifasi">
        <Button onClick={() => navigateTo('/reports/product/create')} type="primary" icon={<PlusOutlined />}>
          Maxsulot qo'shish
        </Button>
      </CHeader>

      <PageWrapper classes="bg-transparent p-[0]">
        <BannerUI />
      </PageWrapper>

      <PageWrapper classes="bg-transparent p-[0]">
        <ProductList />
      </PageWrapper>
    </>
  );
};

export default ProductsPage;
