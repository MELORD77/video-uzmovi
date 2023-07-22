import React from "react";
import VideoPlayer from "./videoBlob";

const routes = [
  {
    path: ":id",
    element: <VideoPlayer />,
  },
];

export default routes;
