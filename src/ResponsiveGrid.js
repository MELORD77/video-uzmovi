import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "./border.css";
import { createTheme } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import image from "../src/images/logo1.jpg";
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
  { id: 0, click: true },
  { id: 1, click: false },
  { id: 2, click: true },
  { id: 3, click: true },
  { id: 4, click: true },
  { id: 5, click: true },
  { id: 6, click: true },
  { id: 7, click: true },
  { id: 8, click: true },
  { id: 9, click: true },
  { id: 11, click: true },
  { id: 12, click: false },
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
  const handleSort = (id) => {
    // eslint-disable-next-line array-callback-return
    GridData.filter((e) => e.id === id).forEach((e) => (e.click = false));

    console.log(id);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingTop: { lg: "30px", md: "30px" },
        paddingBottom: { lg: "40px", md: "", sm: "40px", xs: "40px" },
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

              height: { md: "180px" },
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
                boxShadow: "0px -10px 15px 1px rgba(225,230,242,0.75)",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                pt: 0.3,
                borderRadius: "10px",
                width: { lg: "65%", md: "100%", sm: "40%", xs: "70%" },
                height: { lg: "25px", md: "30px", sm: "40px", xs: "15px" },
                borderLeft: {
                  xs: `6px solid ${e.click ? "#ecf5ef" : "#F33D28"}`,
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
                className="back"
                onClick={() => {
                  handleSort(e.id);
                }}
                // sx={{
                //   boxShadow:
                //     " rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;",
                //   width: { lg: "95%", md: "95%", xs: "95%" },
                //   height: { lg: "90px", md: "110px", xs: "60px" },
                //   bgcolor: "rgb(255,255,253,0.9)",
                //   position: "relative",
                // }}
              >
                <Typography align="center">Card {e.id}</Typography>
                {/* <img src={image} alt="img" className="card-image" />s */}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
