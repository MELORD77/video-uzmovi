import React, { useEffect, useRef, useState } from "react";
import "./video.css";
import Container from "@mui/material/Container";
import Zoom from "react-reveal/Zoom";
import { Box } from "@mui/material";
import ResponsiveGrid from "./ResponsiveGrid";
import ResponsiveAppBar from "./Navbar";
const MainPage = () => {
  return (
    <>
      <Container className="main-container" maxWidth={"xl"}>
        <ResponsiveAppBar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "94.6vh",
            width: "100%",
          }}
        >
          <ResponsiveGrid />
        </Box>
      </Container>
    </>
  );
};
export default MainPage;
