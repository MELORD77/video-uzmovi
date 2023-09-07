import React, { useEffect, useRef, useState } from "react";
import "./video.css";
import Container from "@mui/material/Container";
import Zoom from "react-reveal/Zoom";
import { Box } from "@mui/material";
import ResponsiveGrid from "./ResponsiveGrid";
import ResponsiveAppBar from "./Navbar";
import { styled } from "styled-components";

const StyledBox = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;
const MainPage = () => {
  return (
    <div className="main-container">
      <ResponsiveAppBar />
      <Container maxWidth={"xl"}>
        <Box
          sx={{
            display: "flex",
            height: "90vh",
            width: "100%",
          }}
        >
          <ResponsiveGrid />
        </Box>
      </Container>
    </div>
  );
};
export default MainPage;
