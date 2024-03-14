import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { LightThemeContants } from "../../constants/colors";
import { filterParams } from "../../utils/filterParams";
// import { ColorConstants } from "../../constants/website";

export default function usePageRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());

  const navigateTo = (path: string, state?: object) => {
    let link = path;

    if (state) {
      navigate(link, { state: state });
      return;
    }

    navigate(link);
  };

  const navigateQuery = (obj: any) => {
    const newQuery = filterParams({
      page: query.page ?? null,
      search: query.search ?? null,
      ...obj,
    });

    const queryParams = createSearchParams(newQuery);
    
    navigate({
      pathname: location.pathname,
      search: queryParams.toString(),
    });
  };

  const getQueries = () => query;

  const progmatic = () => navigate(-1);

  const checkPath = (path: string, status?: string) => {
    const result = path === location.pathname.substring(1);

    if (status === "icon") {
      return result ? LightThemeContants.primary : LightThemeContants.gray;
    }

    return result;
  };

  return { navigateTo, progmatic, checkPath, navigateQuery, getQueries };
}
