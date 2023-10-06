import React from "react";
import { Box, Container, Grid } from "@mui/material";
import ResponsiveGrid from "../ResponsiveGrid";
import "./style.css";
import { useWindowSize } from "@uidotdev/usehooks";
import ButtonAppBar from "../../Components/appBar";

export default function GiftContainer() {
  const size = useWindowSize();

  const mainHeight = size.height === null ? "80vh" : ` ${size.height - 205}px`;
  return (
    <div>
      <ButtonAppBar />
      <Container
        sx={{
          maxWidth: { xs: "xxl", md: "xl", lg: "xl" },
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
      <Box
        sx={{
          width: "100%",
          height: "50px",
          borderTop: "1px solid gray",
          position: "absolute",
          bottom: 0,
        }}
      ></Box>
    </div>
  );
}
