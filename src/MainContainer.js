import React, { useEffect, useRef, useState } from "react";
import "./video.css";
import Container from "@mui/material/Container";
import Zoom from "react-reveal/Zoom";
import { Box } from "@mui/material";
import ResponsiveGrid from "./ResponsiveGrid";
import ResponsiveAppBar from "./Navbar";
import image from "../src/images/logo1.jpg";
import { MessageBox } from "react-chat-elements";
const MainPage = () => {
  const [alertInfo, setAlert] = React.useState(false);
  setTimeout(() => {
    setAlert(!alertInfo);
  }, 4000);
  return (
    <div className="main-container">
      <ResponsiveAppBar />
      <Container maxWidth={"xl"}>
        <Box
          sx={{
            display: "flex",
            height: "85vh",
            width: "100%",
          }}
        >
          <ResponsiveGrid />
        </Box>
        <Zoom opposite when={!alertInfo}>
          <Box
            // display={"none"}
            sx={{
              width: { lg: "400px", md: "200px", xs: "90%" },
              height: { lg: "120px", md: "110px", xs: "60px", sm: "15px" },
              display: "flex",
              position: "absolute",
              bottom: "10px",
              right: "100px",
              // backgroundColor: {
              //   xxs: "red", // theme.breakpoints.up('xxs')
              //   xs: "orange", // theme.breakpoints.up('xs')
              //   sm: "yellow", // theme.breakpoints.up('sm')
              //   md: "green", // theme.breakpoints.up('md')
              //   lg: "blue", // theme.breakpoints.up('lg')
              //   xl: "purple", // theme.breakpoints.up('xl')
              // },
            }}
          >
            <MessageBox
              position="right"
              title="Burhan"
              type="text"
              text="Hi there !"
              date={new Date()}
            />
            <img src={image} alt="img" className="card-image" />
          </Box>
        </Zoom>
      </Container>
    </div>
  );
};
export default MainPage;
