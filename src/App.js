import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const content = useRoutes(routes);
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | KinoPoisk" defaultTitle="KinoPoisk" />
      {content}
    </HelmetProvider>
  );
}

export default App;
