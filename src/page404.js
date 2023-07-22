import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Image from "../src/images/error404.svg";

import { Stack, Typography } from "@mui/material";

function Page404() {
  const { t } = useTranslation();
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ height: "calc(100vh - 200px)" }}
    >
      <Helmet title="404 Error" />
      <img src={Image} alt="404" style={{ maxWidth: 500 }} />
      <Typography component="div" variant="h5" align="center" gutterBottom>
        {t("Саҳифа топилмади")}
      </Typography>
    </Stack>
  );
}

export default Page404;
