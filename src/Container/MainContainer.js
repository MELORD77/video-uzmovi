import React from "react";
import "../Css/video.css";
import "../Css/giftBox.css";
import "../Css/scroll.css";
import "../Css/cardBody.css";
import { Box } from "@mui/material";
import { useWindowSize } from "@uidotdev/usehooks";
import mainBackgroundImage from "../images/Rectangle10.png";
import TitleAnimationText from "../Components/TitleAnimationText";
import MarqueeComponent from "../Components/Marquee";
import FooterComponent from "./FooterComponent";

import { motion } from "framer-motion";
const ResponsiveAppBar = React.lazy(() => import("./Navbar"));

const MainPage = () => {
  const size = useWindowSize();
  const mainHeight = size.height === null ? "77vh" : ` ${size.height - 0}px`;
  const animationStyles = {
    height: "92vh",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ResponsiveAppBar />
      <Box sx={animationStyles}>
        <TitleAnimationText />
      </Box>

      <Box
        // className={"scroll-stop"}
        sx={{
          height: mainHeight - 180,
        }}
      >
        <TitleAnimationText />
      </Box>
      <Box sx={{ m: 4, mt: 15 }}>
        <FooterComponent />
      </Box>
      <MarqueeComponent />
    </motion.div>
  );
};
export default MainPage;
