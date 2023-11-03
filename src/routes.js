import React, { Suspense, lazy } from "react";
import GiftContainer from "./Container/GridContaner/GiftContainer";

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
    element: <MainPage />,
  },
  {
    path: "/gift",
    element: <GiftContainer />,
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
