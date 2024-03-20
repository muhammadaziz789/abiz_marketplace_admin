import { useEffect } from "react";
import { useWebsiteStore } from "../../../../store/website";
import usePageRouter from "../../../../hooks/usePageRouter";
import { useLocation } from "react-router-dom";

export const TablePagination = () => {
  const { tableDetails, setTableDetails } = useWebsiteStore();
  const { navigateQuery, getQueries } = usePageRouter();
  const query = getQueries();
  const pageSizeOptions = [10, 20, 50, 100];
  const location = useLocation();
  const tableName = location.pathname;
  const details: any = tableDetails;

  const handlePageSizeChange = (current: number, pageSize: number) => {
    const prevObj = details[tableName] || {};
    const obj = {
      ...details,
      [tableName]: {
        ...prevObj,
        pageSize,
        current,
      },
    };

    setTableDetails(obj);

    navigateQuery({ ...obj[tableName] });
  };

  useEffect(() => {
    const obj = details[tableName] || {};
    if (obj?.pageSize) {
      navigateQuery({ pageSize: obj.pageSize, current: obj.current });
    }
  }, [details[tableName]]);

  return {
    current: details[tableName]?.current || query?.current || 1,
    pageSize: details[tableName]?.pageSize || query?.pageSize || 10,
    pageSizeOptions,
    handlePageSizeChange,
  };
};

export const AvailableColumns = () => {
  const getAvailableColumns = (
    details: any,
    tableName: string,
    columns: any
  ) => {
    const list = details?.[tableName]?.columns;
    let result: any = [];
    if (list?.length) {
      columns.map((item: any) => {
        if (item.dataIndex === "setting") {
          const obj = item;
          obj.view = list.includes("view");
          obj.edit = list.includes("edit");
          obj.delete = list.includes("delete");

          result.push(obj);

          return;
        }

        if (list.includes(item.dataIndex)) {
          result.push(item);
        }
      });
    } else {
      result = columns;
    }

    return result;
  };

  return { getAvailableColumns };
};
