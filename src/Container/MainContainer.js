import React from "react";
import "../Css/video.css";
import "../Css/giftBox.css";
import "../Css/scroll.css";
import { Box, Grid } from "@mui/material";
import { useWindowSize } from "@uidotdev/usehooks";
import imageOil from "../images/Oil.jpg";
import gift from "../images/gift.png";
import YouTube from "react-youtube";
import { Fade } from "react-awesome-reveal";
import TitleAnimationText from "../Components/TitleAnimationText";
import MarqueeComponent from "../Components/Marquee";
const ResponsiveAppBar = React.lazy(() => import("./Navbar"));

const MainPage = () => {
  const size = useWindowSize();
  console.log(size);
  console.log(`${size.height - 200}px`);
  const mainHeight = size.height === null ? "78vh" : ` ${size.height - 100}px`;
  const animationStyles = {
    "@keyframes myAnim": {
      "0%": {
        backgroundPosition: "center bottom",
        backgroundSize: "80%",
      },
      "100%": {
        backgroundPosition: "center bottom",
        backgroundSize: "100%",
      },
    },
    animation: "myAnim 2s ease 0s 1 normal forwards",
    backgroundImage: `url(${imageOil})`,
    backgroundAttachment: "fixed",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className="scroll-snap">
      <ResponsiveAppBar />
      <Box height={mainHeight} sx={animationStyles}>
        <TitleAnimationText />
      </Box>
      <Box className="giftBox">
        <img
          alt="gift"
          width={"100%"}
          height={"100%"}
          src={gift}
          loading="lazy"
        />
      </Box>
      <Box></Box>
      <Box
        className={"scroll-stop"}
        sx={{
          height: { xs: "45%", sm: 2, md: "40%", lg: "60vh" },
          position: "relative",
          backgroundAttachment: "fixed",
          boxShadow: "1px 1px 5px 1px rgb(128,128,128,1)",
          pt: "10px",
          mt: "10px",
          mb: "10px",
        }}
      >
        <Fade
          delay={1e3}
          cascade
          damping={1e-1}
          duration={5}
          triggerOnce
        ></Fade>
        <Grid
          container
          spacing={5}
          p={3}
          height={"100%"}
          justifyContent={"space-evenly"}
        >
          <Grid item xs={12} md={6} lg={4} xl={4}>
            <Fade direction="up">
              <YouTube
                videoId="yq4JuYcs69w"
                opts={{
                  width: "100%",
                  position: "relative",
                  overflow: "hidden",
                  paddingTop: "56.25%",
                  // playerVars: {
                  //   autoplay: 1,
                  // },
                }}
                onReady={() => {
                  console.log("ready");
                }}
              />
            </Fade>
          </Grid>
          <Grid item xs={12} md={6} lg={4} xl={4}>
            <Fade direction="up">
              <YouTube
                videoId="yq4JuYcs69w"
                opts={{
                  width: "100%",
                  position: "relative",
                  overflow: "hidden",
                  paddingTop: "56.25%",
                  // playerVars: {
                  //   autoplay: 1,
                  // },
                }}
                onReady={() => {
                  console.log("ready");
                }}
              />
            </Fade>
          </Grid>
        </Grid>
        <MarqueeComponent />
      </Box>
    </div>
  );
};
export default MainPage;
