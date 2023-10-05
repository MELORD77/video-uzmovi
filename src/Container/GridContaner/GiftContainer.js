import React from "react";
import { Box, Container, Grid } from "@mui/material";
import ResponsiveGrid from "../ResponsiveGrid";
import ResponsiveAppBar from "../Navbar";
import "./style.css";
import { useWindowSize } from "@uidotdev/usehooks";

export default function GiftContainer() {
  const size = useWindowSize();

  const mainHeight = size.height === null ? "80vh" : ` ${size.height - 150}px`;
  return (
    <div>
      <ResponsiveAppBar />
      <Container
        sx={{
          maxWidth: { xs: "xxl", md: "lg", lg: "xl" },
        }}
      >
        <Grid container className="grid-container" height={mainHeight}>
          <Grid item xs={12} md={8} className="grid-item">
            <ResponsiveGrid />
          </Grid>
          <Grid item xs={12} md={4} className="grid-item">
            <Box className="image-box"></Box>{" "}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
