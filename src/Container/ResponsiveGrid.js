import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import "../Css/border.css";
import "../Css/giftBox.css";
import ResponsiveDialog from "../Components/AlertDialog";
import { Box, Button, Typography } from "@mui/material";
import "react-chat-elements/dist/main.css";
import cardImage from "../images/Vector.svg";
import cardFooterImage from "../images/footer.svg";
import cardHeader from "../images/cardHeader.svg";
import cardHeaderBorder from "../images/cardHeaderBorder.svg";
import cardHeaderFooter from "../images/cardHeaderFooter.svg";
import cardCenter from "../images/cardCenter.svg";
import romp from "../images/romp.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
const GridData = [
  { id: 1, clicked: true },
  { id: 2, clicked: true },
  { id: 3, clicked: true },
  { id: 4, clicked: true },
  { id: 5, clicked: true },
  { id: 6, clicked: true },
  { id: 7, clicked: true },
  { id: 8, clicked: true },
  { id: 9, clicked: true },
  { id: 10, clicked: true },
  { id: 11, clicked: true },
  { id: 12, clicked: true },
  { id: 13, clicked: true },
  { id: 14, clicked: true },
  { id: 15, clicked: true },
  { id: 16, clicked: true },
  { id: 17, clicked: true },
  { id: 18, clicked: true },
  { id: 19, clicked: true },
  { id: 20, clicked: true },
  { id: 21, clicked: true },
  { id: 22, clicked: true },
  { id: 23, clicked: true },
  { id: 24, clicked: true },
];

export default function ResponsiveGrid({ handleClick, open, setOpen }) {
  const handleSort = (id) => {
    // eslint-disable-next-line array-callback-return
    GridData.filter((e) => e.id === id).forEach((e) => (e.clicked = false));

    // console.log(id);
  };
  const handleClickOpen = () => {
    handleClick();
    // setTimeout(() => {
    //   setOpen(false);
    // }, 3000);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "start",
          alignContent: "start",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        {GridData.map((e, index) => (
          <div key={index}>
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
                  loading="lazy"
                  effect="blur"
                  alt={"card"}
                  src={cardImage} // use normal <img> attributes as props
                  width={"100%"}
                  onLoad={(e) => console.log(e)}
                />
                {/* <img loading="lazy" src={cardImage} alt="card" width={"100%"} /> */}
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
                  loading="lazy"
                  src={cardFooterImage}
                  alt="cardFooter"
                  style={{ width: "100%" }}
                />
                <button className="card-Button">
                  <h1 className="button-text"> открыть</h1>
                </button>
              </Box>{" "}
            </Box>
          </div>
        ))}
      </div>

      {/* <ResponsiveDialog open={open} setOpen={setOpen} /> */}
      {/* {alert && ( */}
      {/* )} */}
    </>
  );
}
