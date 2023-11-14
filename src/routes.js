import React, { lazy } from "react";
import GiftContainer from "./Container/GridContaner/GiftContainer";

const MainPage = lazy(() => import("./Container/MainContainer"));
const Page404 = lazy(() => import("./pages/page404"));

const routes = [
  {
    path: "*",
    element: <Page404 />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/gift",
    element: <GiftContainer />,
  },
  // {
  //   path: "/",
  //   element: (
  //     <React.Suspense fallback={<>...</>}>
  //       <Loading />
  //     </React.Suspense>
  //   ),
  // },
];

export default routes;
