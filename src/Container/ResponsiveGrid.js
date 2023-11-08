import * as React from "react";
import "../Css/giftBox.css";
import { Box, Typography } from "@mui/material";
import "react-chat-elements/dist/main.css";
import cardFooterImage from "../images/footer.svg";
import cardHeader from "../images/cardHeader.svg";
import cardHeaderBorder from "../images/cardHeaderBorder.svg";
import cardHeaderFooter from "../images/cardHeaderFooter.svg";
import cardCenter from "../images/cardCenter.svg";
import romp from "../images/romp.svg";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useSound from "use-sound";

import click_sound from "../sounds/sound.wav";
export default function ResponsiveGrid({
  open,
  setOpen,
  imageLoaded,
  cardImage,
}) {
  const [data, setData] = React.useState([
    { id: 1, clicked: true, count: null },
    { id: 2, clicked: true, count: null },
    { id: 3, clicked: true, count: null },
    { id: 4, clicked: true, count: null },
    { id: 5, clicked: true, count: null },
    { id: 6, clicked: true, count: null },
    { id: 7, clicked: true, count: null },
    { id: 8, clicked: true, count: null },
    { id: 9, clicked: true, count: null },
    { id: 10, clicked: true, count: null },
    { id: 11, clicked: true, count: null },
    { id: 12, clicked: true, count: null },
    { id: 13, clicked: true, count: null },
    { id: 14, clicked: true, count: null },
    { id: 15, clicked: true, count: null },
    { id: 16, clicked: true, count: null },
    { id: 17, clicked: true, count: null },
    { id: 18, clicked: true, count: null },
    { id: 19, clicked: true, count: null },
    { id: 20, clicked: true, count: null },
    { id: 21, clicked: true, count: null },
    { id: 22, clicked: true, count: null },
    { id: 23, clicked: true, count: null },
    { id: 24, clicked: true, count: null },
  ]);
  const [play] = useSound(click_sound);

  const handleClick = (id) => {
    // Find the clicked item by id
    const clickedItem = data.find((item) => item.id === id);

    if (clickedItem) {
      // Update the clicked property
      clickedItem.clicked = !clickedItem.clicked;
      clickedItem.count = generateRandomNumber();

      // Create a new array with the updated item
      const updatedData = data.map((item) =>
        item.id === id ? clickedItem : item
      );

      // Update the state with the new array
      setData(updatedData);
    }
    play();
  };

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 9) * 10 + 10;
    return newRandomNumber;
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          alignContent: "flex-start",
          gap: "7px",
          flexWrap: "wrap",
        }}
      >
        {data.map((e, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            key={index}
            className="giftGrid"
            onClick={() => handleClick(e.id)}
          >
            {!e.clicked ? (
              <motion.div>
                <Box className="giftBox">
                  <div className="headerCard">
                    <img
                      loading="lazy"
                      className="card-Header-footer"
                      src={cardHeaderFooter}
                      alt="card"
                    />
                    <img
                      loading="lazy"
                      src={cardHeaderBorder}
                      alt="card"
                      width={"100%"}
                      height={"18px"}
                    />
                    <img
                      loading="lazy"
                      className="card-Header-Black"
                      src={cardHeader}
                      alt="card"
                    />
                    <h1 className="header-text">Boriga Baraka</h1>
                  </div>
                  <Box
                    sx={{
                      width: "97%",
                      ml: "2%",
                      mt: "2%",
                      borderRadius: "5px",
                      height: "97%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",

                      bgcolor: "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    <Box sx={{}}>
                      <h1 className="pointCount">{e.count} </h1>
                      <h1 className="pointCountText"> очков</h1>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            ) : (
              <motion.div style={{ display: "block" }}>
                <Box className="giftBox">
                  <div className="headerCard">
                    <img
                      loading="lazy"
                      className="card-Header-footer"
                      src={cardHeaderFooter}
                      alt="card"
                    />
                    <img
                      loading="lazy"
                      src={cardHeaderBorder}
                      alt="card"
                      width={"100%"}
                      height={"18px"}
                    />
                    <img
                      loading="lazy"
                      className="card-Header-Black"
                      src={cardHeader}
                      alt="card"
                    />
                    <h1 className="header-text">Boriga Baraka</h1>
                  </div>

                  <Box className="cardContent">
                    <LazyLoadImage
                      className="image"
                      loading="lazy"
                      effect="blur"
                      alt={"card"}
                      src={cardImage} // use normal <img> attributes as props
                      width={"100%"}
                      // beforeLoad={(e) => console.log(e)}
                    />
                  </Box>
                  <Box className="cardFooter">
                    <Box className="cardCenter">
                      <img
                        loading="lazy"
                        src={cardCenter}
                        alt="cardFooter"
                        width={"100%"}
                      />
                    </Box>
                    <Box>
                      <img
                        loading="lazy"
                        className="cardRomp"
                        src={romp}
                        alt="cardFooter"
                      />
                    </Box>
                    <img
                      className="cardFooterImage"
                      loading="lazy"
                      src={cardFooterImage}
                      alt="cardFooter"
                      width={"100%"}
                    />
                    <button className="card-Button">
                      <h1 className="button-text"> открыть</h1>
                    </button>
                  </Box>
                </Box>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* <ResponsiveDialog open={open} setOpen={setOpen} /> */}
      {/* {alert && ( */}
      {/* )} */}
    </>
  );
}
