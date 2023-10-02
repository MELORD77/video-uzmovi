import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import "../Css/border.css";
import ResponsiveDialog from "../Components/AlertDialog";
import { Button } from "@mui/material";
import "react-chat-elements/dist/main.css";
import image from "../images/card.jpg";
import StyledBox from "../Components/StyledBox";

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
        // width={"100%"}
        // ml={"20px"}
        height={{ xs: "50%", md: "70%", lg: "90%" }}
        spacing={{ xs: 0, sm: 2, md: 3, lg: 3 }}
        columns={{ xs: 6, sm: 6, md: 24, lg: 24, xl: 24 }}
        display={"flex"}
        p={"30px"}
        justifyContent={"center"}
        alignItems="stretch"
        borderRadius={"10px"}
        bgcolor={"rgb(35, 51, 222,0.50)"}
        boxShadow={" #000 0px 0px 20px 10px inset;"}
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
            // sx={{ border: "1px solid red" }}
            justifyContent={"center"}
            minHeight={80}
          >
            <StyledBox clicked={`${e.clicked}`}>
              <Button
                onClick={() => {
                  handleSort(e.id);
                  handleClickOpen();
                }}
                sx={{
                  boxShadow: " rgba(250,250,250,0.70)  -0px 15px 20px -10px;",
                  minWidth: { xs: "90%" },
                  width: {
                    xl: "95%",
                    lg: "95%",
                    md: "90%",
                    xs: "80%",
                  },
                  padding: "0px",
                  margin: "0px",
                  height: {
                    xl: "90px",
                    lg: "70px",
                    md: "70px",
                    xs: "45px",
                    sm: "50px",
                  },
                  position: "relative",
                  display: "flex",
                }}
              >
                {e.clicked && (
                  <img
                    loading="lazy"
                    src={image}
                    width={"100%"}
                    height={"100%"}
                    alt="img"
                  />
                )}
              </Button>
            </StyledBox>
          </Grid>
        ))}
      </Grid>

      <ResponsiveDialog open={open} setOpen={setOpen} />
      {/* {alert && ( */}
      {/* )} */}
    </>
  );
}
