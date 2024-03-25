import { useEffect } from "react";
import { useWebsiteStore } from "../../../../store/website";
import usePageRouter from "../../../../hooks/usePageRouter";
import { useLocation } from "react-router-dom";

export const TablePagination = (columns: any) => {
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
    } else {
      navigateQuery({ pageSize: 10, current: 1 });

      const arr = columns?.map((item: any, index: number) => {
        const obj: any = {};
        obj.order = index;
        obj.active = true;
        obj.title = item.title;
        obj.dataIndex = item.dataIndex;
        if (item.dataIndex === "setting") {
          obj.actions = ["view", "edit", "delete"];
        }

        return obj;
      });

      const obj: any = {
        ...details,
        [tableName]: { pageSize: 10, current: 1, columns: arr },
      };

      setTableDetails(obj);
    }
  }, [details[tableName]]);

  return {
    current: details[tableName]?.current || query?.current,
    pageSize: details[tableName]?.pageSize || query?.pageSize,
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
      list.forEach((item: any) => {
        const obj: any = item;

        if (obj?.active) {
          const newObj = columns.find(
            (item: any) => item.dataIndex === obj.dataIndex
          );
          return result.push({ ...obj, ...newObj });
        }
      });
    } else {
      result = columns;
    }

    return result;
  };

  return { getAvailableColumns };
};
