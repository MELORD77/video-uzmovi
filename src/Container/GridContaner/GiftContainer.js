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
import useSound from "use-sound";
import click_sound from "../../sounds/sound.wav";
import CustomizedDialogs from "../../Components/dialog_Component";
import ResultDialog from "../../Components/Result_dialog";

let count = 0;

export default function GiftContainer() {
  const [open, setOpen] = React.useState(true);
  const size = useWindowSize();
  const { loaded } = useImage(cardImage);
  const [numberAttempts, setNumberAttempts] = useState(3);
  const [play] = useSound(click_sound);
  const mainHeight = size.height === null ? "80vh" : ` ${size.height - 160}px`;
  const mainHeightLg =
    size.height === null ? "80vh" : ` ${size.height - 140}px`;
  const [offerModalOpen, setOfferModalOpen] = React.useState(false);
  // const handleCloseBack = () => {
  //   setOfferModalOpen(false);
  // };
  const handleOpenBack = () => {
    // setOfferModalOpen(true);
  };

  const [data, setData] = React.useState([
    { id: 1, clicked: false, count: null },
    { id: 2, clicked: false, count: null },
    { id: 3, clicked: false, count: null },
    { id: 4, clicked: false, count: null },
    { id: 5, clicked: false, count: null },
    { id: 6, clicked: false, count: null },
    { id: 7, clicked: false, count: null },
    { id: 8, clicked: false, count: null },
    { id: 9, clicked: false, count: null },
    { id: 10, clicked: false, count: null },
    { id: 11, clicked: false, count: null },
    { id: 12, clicked: false, count: null },
    { id: 13, clicked: false, count: null },
    { id: 14, clicked: false, count: null },
    { id: 15, clicked: false, count: null },
    { id: 16, clicked: false, count: null },
    { id: 17, clicked: false, count: null },
    { id: 18, clicked: false, count: null },
    { id: 19, clicked: false, count: null },
    { id: 20, clicked: false, count: null },
    { id: 21, clicked: false, count: null },
    { id: 22, clicked: false, count: null },
    { id: 23, clicked: false, count: null },
    { id: 24, clicked: false, count: null },
  ]);

  const generateRandomNumber = (num) => {
    const newRandomNumber = Math.floor(Math.random() * 9) * 10 + 10;
    return newRandomNumber;
  };

  const generateRandomClick = (maxValue) => {
    const newRandomNumber = Math.floor(Math.random() * (maxValue - 1 + 1)) + 1;
    return newRandomNumber;
  };

  const countClickedTrue = () => {
    const clickedTrueCount = data.filter((item) => item.clicked).length;
    return 24 - clickedTrueCount;
  };

  const sumCounts = () => {
    const totalCount = data.reduce((sum, item) => sum + (item.count || 0), 0);
    return totalCount;
  };

  // Example usage:

  const handleClick = (id) => {
    // Find the clicked item by id
    const clickedItem = data.find((item) => item.id === id);

    count++;
    console.log(numberAttempts);
    console.log(count);
    if (count === numberAttempts) {
      setNumberAttempts(
        generateRandomClick(countClickedTrue() > 8 ? 8 : countClickedTrue())
      );
      count = 0;
    }
    if (clickedItem && !clickedItem.clicked) {
      // Update the clicked property
      clickedItem.clicked = true;
      clickedItem.count = generateRandomNumber();

      // Create a new array with the updated item
      const updatedData = data.map((item) =>
        item.id === id ? clickedItem : item
      );

      // Update the state with the new array
      setData(updatedData);
      sumCounts();
      if (countClickedTrue() === 0) {
        setOpen(false);
        setOfferModalOpen(true);
      }
      play();
    }
  };

  useEffect(() => {
    const delay = 9000; // Delay in milliseconds

    const timer = setTimeout(() => {
      // Code to execute after the delay
      // setImageLoaded(true);
      handleOpenBack();
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
          position: "relative",
        }}
      >
        <Grid container height={{ xs: mainHeight, lg: mainHeightLg }}>
          <ContentTools totalCount={sumCounts()} />
          <Grid item xs={12} md={12}>
            {loaded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <ResponsiveGrid
                  cardImage={cardImage}
                  handleClick={handleClick}
                  data={data}
                  setData={setData}
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

          <GiftFooter numberAttempts={numberAttempts} />
        </Grid>

        <CustomizedDialogs open={open} setOpen={setOpen} />

        <ResultDialog
          totalCount={sumCounts()}
          open={offerModalOpen}
          setOpen={setOfferModalOpen}
        />
      </Container>
    </motion.div>
  );
}
