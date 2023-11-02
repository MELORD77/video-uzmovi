import React from "react";
import { Container, Grid } from "@mui/material";
import ResponsiveGrid from "../ResponsiveGrid";
import "./style.css";
import { useWindowSize } from "@uidotdev/usehooks";
import imageBg from "../../images/Rectangle10.png";
import ResponsiveAppBar from "../Navbar";
import ContentTools from "./ContentTools";
import GiftFooter from "./giftFooter";

export default function GiftContainer() {
  const size = useWindowSize();

  const mainHeight = size.height === null ? "80vh" : ` ${size.height - 105}px`;
  return (
    <div
      style={{
        backgroundImage: `url(${imageBg})`,

        // backgroundAttachment: "fixed",
        border: "0.1px solid rgba(51, 65, 89, 0.1)",
      }}
    >
      <ResponsiveAppBar />
      <Container
        sx={{
          maxWidth: { xs: "xxl", md: "xl", lg: "xl" },
          pt: { xs: 7, lg: 10 },
        }}
      >
        <Grid container height={mainHeight}>
          <ContentTools />

          <Grid item xs={12} md={12}>
            <ResponsiveGrid />
          </Grid>
          <GiftFooter />
        </Grid>
      </Container>
    </div>
  );
}
