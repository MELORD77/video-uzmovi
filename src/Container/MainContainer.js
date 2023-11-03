import React from "react";
import "../Css/video.css";
import "../Css/giftBox.css";
import "../Css/scroll.css";
import "../Css/cardBody.css";
import { Box } from "@mui/material";
import { useWindowSize } from "@uidotdev/usehooks";
import imageOil from "../images/Rectangle10.png";
import TitleAnimationText from "../Components/TitleAnimationText";
import MarqueeComponent from "../Components/Marquee";
import FooterComponent from "./FooterComponent";

import { motion } from "framer-motion";
const ResponsiveAppBar = React.lazy(() => import("./Navbar"));

const MainPage = () => {
  const size = useWindowSize();
  const mainHeight = size.height === null ? "77vh" : ` ${size.height - 0}px`;
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
    // filter: "blur(3px)",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ResponsiveAppBar />
      <Box height={mainHeight} sx={animationStyles}>
        <TitleAnimationText />
      </Box>

      <Box
        // className={"scroll-stop"}
        sx={{
          height: mainHeight - 100,
          pt: 20,
        }}
      >
        <TitleAnimationText />
        <FooterComponent />
      </Box>
      <MarqueeComponent />
    </motion.div>
  );
};
export default MainPage;
