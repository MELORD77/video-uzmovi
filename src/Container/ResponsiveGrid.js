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
      <Grid
        container
        width={"100%"}
        height={{ xs: "100%", sm: "40%", md: "70%", lg: "70%" }}
        spacing={{ xs: 1, sm: 0, md: 2, lg: 1 }}
        rowSpacing={{ xs: 0, sm: 1, md: 10, lg: 4 }}
        columns={{ xs: 6, sm: 6, md: 24, lg: 24, xl: 24 }}
        display={"flex"}
        sx={{
          py: { xs: "5px", sm: "0px", md: "0px", lg: "20px" },
        }}
        // p={{ xs: "5px", sm: "0px", md: "20px" }}
        // justifyContent={"center"}
        alignItems="stretch"
      >
        {GridData.map((e, index) => (
          <Grid
            item
            xs={1}
            sm={1}
            md={3}
            lg={3}
            xl={3}
            key={index}
            display={"flex"}
            justifyContent={"center"}
            minHeight={65}
          >
            <Box className="giftBox">
              <div className="headerCard">
                <img
                  className="card-Header-footer"
                  src={cardHeaderFooter}
                  alt="card"
                />
                <img
                  src={cardHeaderBorder}
                  alt="card"
                  width={"100%"}
                  height={"18px"}
                />
                <img
                  className="card-Header-Black"
                  src={cardHeader}
                  alt="card"
                />
                <h1 className="header-text">Boriga Baraka</h1>
              </div>
              <Box
                sx={{
                  height: "53%",
                  width: "100%",
                  bgcolor: "rgba(25, 33, 48, 1)",
                }}
              >
                <img
                  src={cardImage}
                  alt="card"
                  width={"96%"}
                  style={{ margin: "2px", marginTop: "0px" }}
                />
              </Box>
              <Box
                sx={{
                  bgcolor: "rgba(51, 65, 89, 1), rgba(25, 33, 48, 1)",
                  marginTop: "10px",
                }}
              >
                <Box className="cardCenter">
                  <img src={cardCenter} alt="cardFooter" width={"100%"} />
                </Box>
                <Box className="cardRomp">
                  <img src={romp} alt="cardFooter" />
                </Box>
                <img
                  src={cardFooterImage}
                  alt="cardFooter"
                  style={{ width: "100%" }}
                />
                <button className="card-Button">
                  <h1 className="button-text"> открыть</h1>
                </button>
              </Box>{" "}
            </Box>
          </Grid>
        ))}
      </Grid>

      <ResponsiveDialog open={open} setOpen={setOpen} />
      {/* {alert && ( */}
      {/* )} */}
    </>
  );
}
