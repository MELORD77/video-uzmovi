import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "./border.css";
import { createTheme } from "@mui/material/styles";
import image from "../src/images/logo1.jpg";
import { MessageBox } from "react-chat-elements";
import Fade from "react-reveal/Fade";
import ResponsiveDialog from "./AlertDialog";
import { Typography } from "@mui/material";
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
  const [display, setDisplay] = React.useState("none");
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
      console.log("asdfasdf");
    }, [1500]);
  };
  setTimeout(() => {
    setAlert(!alertInfo);
  }, 4000);

  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingTop: { lg: "30px", md: "30px" },
        paddingBottom: { lg: "40px", md: "", sm: "40px", xs: "40px" },
        position: "relative",
      }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"stretch"}
    >
      <Grid
        container
        spacing={{ xs: 3, sm: 3, md: 3, lg: 4 }}
        columns={{ xs: 4, sm: 3, md: 24, lg: 24, xl: 24 }}
        alignItems="center"
        justifyContent="center"
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
              className="border-animation"
              sx={{
                boxShadow: `0px -8px 16px -5px  ${
                  !e.click ? "rgba(218,65,32,0.75)" : "rgba(225,230,242,0.75)"
                }`,
                position: "relative",
                display: "flex",
                justifyContent: "center",
                pt: 0.3,
                borderRadius: { lg: "10px", sm: "10px", xs: "5px" },
                width: { lg: "70%", md: "100%", sm: "40%", xs: "65%" },
                height: { lg: "25px", md: "30px", sm: "40px", xs: "12px" },
                borderLeft: {
                  xs: `6px solid ${e.click ? "#ff3103" : "#F33D28"}`,
                  lg: `10px solid ${e.click ? "#ecf5ef" : "#F33D28"}`,
                  md: `10px solid ${e.click ? "#ecf5ef" : "#F33D28"}`,
                },
                borderTop: {
                  xs: `6px solid ${e.click ? "#ecf5ef" : "#F33D28"}`,
                  lg: `10px solid ${e.click ? "#ecf5ef" : "#F33D28"}`,
                  md: `10px solid ${e.click ? "#ecf5ef" : "#F33D28"}`,
                },
                borderRight: {
                  xs: `6px solid ${e.click ? "#ecf5ef" : "#F33D28"}`,
                  md: `10px solid ${e.click ? "#ecf5ef" : "#F33D28"}`,
                  lg: `10px solid ${e.click ? "#ecf5ef" : "#F33D28"}`,
                },
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
              <Box
                onClick={() => {
                  handleSort(e.id);
                  handleClickOpen();
                }}
                sx={{
                  boxShadow: " rgba(0, 0, 0, 0.80) 0px 25px 20px -20px;",
                  // " rgba(50, 50, 93, 0.5) 0px 130px 160px -2px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px  inset;",
                  width: { xl: "95%", lg: "80%", md: "95%", xs: "90%" },
                  height: {
                    xl: "120px",
                    lg: "110px",
                    md: "110px",
                    xs: "60px",
                    sm: "15px",
                  },
                  position: "relative",
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
                    <img src={image} alt="img" className="card-image" />
                  </>
                )}
              </Box>
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
