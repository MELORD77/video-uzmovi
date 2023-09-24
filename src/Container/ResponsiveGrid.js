import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "../Css/border.css";
import ResponsiveDialog from "../Components/AlertDialog";
import { Button } from "@mui/material";
import "react-chat-elements/dist/main.css";
import image from "../images/tablisa.jpg";
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
    <Box
      sx={{
        flexGrow: 1,
        paddingTop: { lg: "30px", md: "30px", sm: "0px", xs: "30px" },
        paddingBottom: { lg: "40px", md: "0", sm: "0px", xs: "40px" },
        position: "relative",
        height: { xs: "40vh", md: "70vh" },
      }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"stretch"}
    >
      <Grid
        container
        width={"100%"}
        spacing={{ xs: 0, sm: 2, md: 3, lg: 3 }}
        columns={{ xs: 6, sm: 6, md: 24, lg: 24, xl: 24 }}
        alignItems="center"
        sx={{ justifyContent: { xs: "center", md: "start", lg: "start" } }}
      >
        {GridData.map((e, index) => (
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              height: { xs: "70px", md: "180px", lg: "180px" },
            }}
            xs={1}
            sm={1}
            md={3}
            lg={3}
            xl={3}
            key={index}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "100%" },
                height: { xs: "80%", md: "80%" },
                backgroundColor: " rgba( 22,17,5, 0.1)",
                backdropFilter: " blur(1px)",
                boxShadow: "inset 0px 0px 3px 0.5px #fff ",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                pt: { xs: 1, md: 2 },
                m: { xs: 0.5, md: 0 },
              }}
            >
              <StyledBox clicked={`${e.clicked}`}>
                <Button
                  onClick={() => {
                    handleSort(e.id);
                    handleClickOpen();
                  }}
                  sx={{
                    boxShadow: " rgba(250,250,250,0.70)  -0px 15px 20px -10px;",
                    minWidth: { xs: "85%" },
                    width: {
                      xl: "95%",
                      lg: "95%",
                      md: "90%",
                      xs: "75%",
                      sm: "10px",
                    },
                    padding: "0px",
                    margin: "0px",
                    height: {
                      xl: "95px",
                      lg: "95px",
                      md: "90px",
                      xs: "40px",
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
            </Box>
          </Grid>
        ))}
      </Grid>

      <ResponsiveDialog open={open} setOpen={setOpen} />
      {/* {alert && ( */}

      {/* )} */}
    </Box>
  );
}
