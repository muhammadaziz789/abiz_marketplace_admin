import { CHeader } from "../../../../components/CElements/CHeader";
import { PageWrapper } from "../../../../components/UI/PageWrapper";
import { useWebsiteStore } from "../../../../store/website";
import HFWrapper from "../../../../components/HFElements/HFWrapper";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { HFInput } from "../../../../components/HFElements/HFInput";
import { useParams } from "react-router-dom";
import { BreadcrumbList } from "./Functions";

export const ProductSinglePage = () => {
  const { id } = useParams();
  const { setAlert } = useWebsiteStore();
  const formRef = useRef();
  const { list: breadcrumbList } = BreadcrumbList(id);

  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  const extraButtonsClick = (type: string) => {
    if (type === "save") {
      setAlert({ message: "Dashboard created", type: "success" });
    }
  };

  return (
    <>
      <CHeader
        extraButtonsClick={extraButtonsClick}
        breadcrumbList={breadcrumbList}
        formRef={formRef}
      />
      <PageWrapper>
        <HFWrapper
          formRef={formRef}
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
        >
          <div className="grid grid-cols-4 gap-16px">
            <HFInput
              control={control}
              name="name"
              label="Name"
              required={true}
            />
            <HFInput
              control={control}
              name="age"
              label="Age"
              type="number"
              required={true}
            />
          </div>
        </HFWrapper>
      </PageWrapper>
    </>
  );
};
