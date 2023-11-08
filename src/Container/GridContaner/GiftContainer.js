import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import ResponsiveGrid from "../ResponsiveGrid";
import { motion } from "framer-motion";
import "./style.css";
import { useWindowSize } from "@uidotdev/usehooks";
import imageBg from "../../images/Rectangle10.png";
import ResponsiveAppBar from "../Navbar";
import ContentTools from "./ContentTools";
import GiftFooter from "./giftFooter";

import SkeletonPage from "../../Components/Skeleton";
import useImage from "react-use-image";
import cardImage from "../../images/Vector.svg";
export default function GiftContainer() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const size = useWindowSize();
  const mainHeight = size.height === null ? "80vh" : ` ${size.height - 160}px`;
  const mainHeightLg =
    size.height === null ? "80vh" : ` ${size.height - 140}px`;
  const { loaded } = useImage(cardImage);
  console.log(loaded);
  useEffect(() => {
    const delay = 2000; // Delay in milliseconds

    const timer = setTimeout(() => {
      // Code to execute after the delay
      setImageLoaded(true);
      console.log("Delayed function executed");
    }, delay);

    // Clean up the timer when the component unmounts or changes
    return () => clearTimeout(timer);
  }, []);
  return (
    <motion.div
      style={{
        backgroundImage: `url(${imageBg})`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ResponsiveAppBar />
      <Container
        sx={{
          maxWidth: { xs: "xxl", md: "xl", lg: "xl" },
          px: { xs: 3, lg: 10 },
          pt: { xs: 8, lg: 10 },
        }}
      >
        <Grid container height={{ xs: mainHeight, lg: mainHeightLg }}>
          <ContentTools />

          <Grid item xs={12} md={12}>
            {loaded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                // transition={{ delay: 00.5, duration: 0.5 }}
              >
                <ResponsiveGrid
                  imageLoaded={imageLoaded}
                  cardImage={cardImage}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <SkeletonPage />
              </motion.div>
            )}
          </Grid>
          <GiftFooter />
        </Grid>
      </Container>
    </motion.div>
  );
}
