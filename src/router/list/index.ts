import { catalogList } from "./catalog";
import { customList } from "./custom";
import { reportsList } from "./reports";

// const defaultObj = {
//   parent: "",
//   title: "",
//   link: "",
//   header: false,
//   sidebar: false,
//   icon: "",
//   element: "default",
// };

const defaultParents: any = {
  reports: {
    list: [],
    icon: "dashboard",
  },
  catalog: {
    list: [],
    icon: "catalog",
  },
};

const list = [...reportsList, ...catalogList, ...customList];

const handleList = (arr: any, obj: any) => {
  arr.forEach((element: any) => {
    if (element?.parent) element.path = `${element.parent}/${element.path}`;
    
    if (element.parent in obj) {
      obj[element.parent].key = element.parent;
      obj[element.parent].list.push(element);
    }
  });

  const newArr: any = [];

  arr.forEach((element: any) => {
    if (element.parent in obj) {
      if (!newArr.some((item: any) => item.key === element.parent)) {
        newArr.push(obj[element.parent]);
      }
    } else {
      newArr.push(element);
    }
  });

  return newArr;
};

export const routeList = list;
export const newRouteList = handleList(list, defaultParents);
