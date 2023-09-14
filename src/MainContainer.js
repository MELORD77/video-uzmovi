import React from "react";
import "./video.css";
import Container from "@mui/material/Container";
import Zoom from "react-reveal/Zoom";
import { Box } from "@mui/material";
import ResponsiveGrid from "./ResponsiveGrid";
import ResponsiveAppBar from "./Navbar";
import image from "../src/images/pngegg.png";
import { MessageBox } from "react-chat-elements";
import { AnimatedBox } from "./Components/AnimatedBox.styled";
const MainPage = () => {
  const [alertInfo, setAlert] = React.useState(false);
  setTimeout(() => {
    setAlert(!alertInfo);
  }, 4000);
  return (
    <div className="main-container">
      <ResponsiveAppBar />
      <Container maxWidth={"lg"}>
        <Box
          sx={{
            mt: { lg: "20px" },
            display: "flex",
            height: "85vh",
            width: "100%",
          }}
        >
          <ResponsiveGrid />
        </Box>
        <AnimatedBox>
          <Zoom opposite when={!alertInfo}>
            <MessageBox
              position="right"
              title="Iltimos"
              type="text"
              text="4 ta tugmachani bosing !"
              date={new Date()}
            />

            <img src={image} alt="img" className="card-image" />
          </Zoom>
        </AnimatedBox>
      </Container>
    </div>
  );
};
export default MainPage;
