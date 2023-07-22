import React from "react";
import VideoPlayer from "./videoBlob";

const routes = [
  {
    path: ":id",
    element: <VideoPlayer />,
  },
  {
    path: "*",
    element: <VideoPlayer />,
  },
];

export default routes;
