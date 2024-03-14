import { Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../views/Auth/Login";
import Registration from "../views/Auth/Registration";
import { useAuthStore } from "../store/auth";
import MainLayout from "../layouts/MainLayout";
import ErrorBoundary from "../utils/ErrorBoundary";
import { routeList, newRouteList } from "./list";
import PageFallback from "../components/UI/PageFallback";
import { useWebsiteStore } from "../store/website";

const Router = () => {
  const { isAuth, setAuth } = useAuthStore();
  const { setRoutes } = useWebsiteStore();

  // useEffect(() => {
  //     setAuth(true)
  // }, [])

  useEffect(() => {
    if (newRouteList.length) {
      setRoutes(newRouteList);
    }
  }, [newRouteList]);

  const generatePath: any = (route: any) => {
    let link = route.path;

    return link;
  };

  if (!isAuth) {
    return (
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Suspense>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/reports/dashboard" />} />
        {routeList.map((route: any) => {
          return (
            <Route
              key={route.title}
              path={generatePath(route)}
              element={
                <ErrorBoundary>
                  <Suspense fallback={<PageFallback />}>
                    {route.element}
                  </Suspense>
                </ErrorBoundary>
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default Router;
