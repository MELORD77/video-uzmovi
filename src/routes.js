import React, { lazy } from "react";

const MainPage = lazy(() => import("./Container/MainContainer"));
const routes = [
  {
    path: "*",
    element: <MainPage />,
  },
];

export default routes;
