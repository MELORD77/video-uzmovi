import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "./border.css";
import { createTheme } from "@mui/material/styles";
import image from "../src/images/logo1.jpg";
import { MessageBox } from "react-chat-elements";
import Fade from "react-reveal/Fade";
import ResponsiveDialog from "./AlertDialog";
import { Button, Typography } from "@mui/material";
import { Bounce, Flip, Zoom } from "react-reveal";
import "react-chat-elements/dist/main.css";
const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
});

const GridData = [
  { id: 1, click: true },
  { id: 2, click: true },
  { id: 3, click: true },
  { id: 4, click: true },
  { id: 5, click: true },
  { id: 6, click: true },
  { id: 7, click: true },
  { id: 8, click: true },
  { id: 9, click: true },
  { id: 10, click: true },
  { id: 11, click: false },
  { id: 12, click: true },
  { id: 13, click: true },
  { id: 14, click: true },
  { id: 15, click: true },
  { id: 16, click: true },
  { id: 17, click: true },
  { id: 18, click: true },
  { id: 19, click: true },
  { id: 20, click: true },
  { id: 21, click: true },
  { id: 22, click: true },
  { id: 23, click: true },
  { id: 24, click: true },
];

export default function ResponsiveGrid() {
  const [open, setOpen] = React.useState(false);
  const [alertInfo, setAlert] = React.useState(false);

  const handleSort = (id) => {
    // eslint-disable-next-line array-callback-return
    GridData.filter((e) => e.id === id).forEach((e) => (e.click = false));

    console.log(id);
  };
  const handleClickOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, [1500]);
  };
  setTimeout(() => {
    setAlert(!alertInfo);
  }, 4000);

  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingTop: { lg: "30px", md: "30px", sm: "0px" },
        paddingBottom: { lg: "40px", md: "0", sm: "0px", xs: "40px" },
        position: "relative",
      }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"stretch"}
    >
      <Grid
        container
        spacing={{ xs: 3, sm: 2, md: 3, lg: 4 }}
        columns={{ xs: 4, sm: 6, md: 24, lg: 24, xl: 24 }}
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: { lg: " rgba( 10,35,98, 0.5)" },
          backdropFilter: { lg: " blur(2px)" },
          borderRadius: { lg: "10px" },
          border: { lg: " 1px solid rgba( 10,35,98, )" },
        }}
      >
        {GridData.map((e, index) => (
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              height: { md: "180px", lg: "150px" },
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
                boxShadow: `2px -11px 16px -4px   ${
                  !e.click ? "#eb0537" : "rgba(225,230,242,0.75)"
                }`,
                position: "relative",
                display: "flex",
                justifyContent: "center",
                pt: 0.5,
                borderRadius: { lg: "10px", sm: "8px", xs: "5px" },
                width: { lg: "65%", md: "75%", sm: "40%", xs: "65%" },
                height: { lg: "20px", md: "25px", sm: "15px", xs: "12px" },
                borderLeft: {
                  xs: `6px solid ${e.click ? "#ecf5ef" : "#eb0537"}`,
                  sm: `6px solid ${e.click ? "#ecf5ef" : "#eb0537"}`,

                  lg: `10px solid ${e.click ? "#ecf5ef" : "#eb0537"}`,
                  md: `10px solid ${e.click ? "#ecf5ef" : "#eb0537"}`,
                },
                borderTop: {
                  xs: `6px solid ${e.click ? "#ecf5ef" : "#eb0537"}`,
                  sm: `6px solid ${e.click ? "#ecf5ef" : "#eb0537"}`,
                  lg: `10px solid ${e.click ? "#ecf5ef" : "#eb0537"}`,
                  md: `10px solid ${e.click ? "#ecf5ef" : "#eb0537"}`,
                },
                borderRight: {
                  xs: `6px solid ${e.click ? "#ecf5ef" : "#eb0537"}`,
                  sm: `6px solid ${e.click ? "#ecf5ef" : "#eb0537"}`,
                  md: `10px solid ${e.click ? "#ecf5ef" : "#eb0537"}`,
                  lg: `10px solid ${e.click ? "#ecf5ef" : "#eb0537"}`,
                },
              }}
            >
              <Button
                onClick={() => {
                  handleSort(e.id);
                  handleClickOpen();
                }}
                sx={{
                  boxShadow: " rgba(0, 0, 0, 0.80) 0px 20px 20px -10px;",
                  minWidth: { xs: "90%" },
                  // " rgba(50, 50, 93, 0.5) 0px 130px 160px -2px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px  inset;",
                  width: {
                    xl: "90%",
                    lg: "85%",
                    md: "80%",
                    xs: "20px",
                    sm: "10px",
                  },
                  padding: "0px",
                  margin: "0px",
                  height: {
                    xl: "90px",
                    lg: "85px",
                    md: "90px",
                    xs: "60px",
                    sm: "50px",
                  },
                  position: "relative",
                  display: "flex",
                  // backgroundColor: {
                  //   xxs: "red", // theme.breakpoints.up('xxs')
                  //   xs: "orange", // theme.breakpoints.up('xs')
                  //   sm: "yellow", // theme.breakpoints.up('sm')
                  //   md: "green", // theme.breakpoints.up('md')
                  //   lg: "blue", // theme.breakpoints.up('lg')
                  //   xl: "purple", // theme.breakpoints.up('xl')
                  // },
                }}
              >
                {e.click && (
                  <>
                    <Typography
                      display={{ xl: "block", xs: "none" }}
                      align="center"
                    >
                      Card {e.id}
                    </Typography>
                    {/* <img src={image} width={"100%"} alt="img" /> */}
                  </>
                )}
              </Button>
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
