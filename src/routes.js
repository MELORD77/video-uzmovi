import React, { lazy } from "react";

const MainPage = lazy(() => import("./Container/MainContainer"));
const Page404 = lazy(() => import("./pages/page404"));
const Loading = lazy(() => import("./pages/Loading"));

const routes = [
  {
    path: "*",
    element: <Page404 />,
  },
  {
    path: "/main",
    element: (
      <React.Suspense fallback={<Loading />}>
        <MainPage />,
      </React.Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <React.Suspense fallback={<>...</>}>
        <Loading />
      </React.Suspense>
    ),
  },
];

export default routes;
