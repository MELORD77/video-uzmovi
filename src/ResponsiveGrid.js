import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "./border.css";
import { createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
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

export default function ResponsiveGrid() {
  const [borderColor, setBorderColor] = React.useState("#ecf5ef");
  const BorderBoxStyle = {
    boxShadow: "0px -10px 10px 2px rgba(225,230,242,0.75)",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    pt: 0.3,
    width: { lg: "65%", md: "100%", sm: "40%", xs: "70%" },
    height: { lg: "22px", md: "30px", sm: "40px", xs: "15px" },
    borderLeft: {
      xs: `6px solid ${borderColor}`,
      lg: `10px solid ${borderColor}`,
      md: `10px solid ${borderColor}`,
    },
    borderTop: {
      xs: `6px solid ${borderColor}`,
      lg: `10px solid ${borderColor}`,
      md: `10px solid ${borderColor}`,
    },
    borderRight: {
      xs: `6px solid ${borderColor}`,
      md: `10px solid ${borderColor}`,
      lg: `10px solid ${borderColor}`,
    },
    // backgroundColor: {
    //   xxs: "red", // theme.breakpoints.up('xxs')
    //   xs: "orange", // theme.breakpoints.up('xs')
    //   sm: "yellow", // theme.breakpoints.up('sm')
    //   md: "green", // theme.breakpoints.up('md')
    //   lg: "blue", // theme.breakpoints.up('lg')
    //   xl: "purple", // theme.breakpoints.up('xl')
    // },
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
        {Array.from(Array(24)).map((_, index) => (
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
            <Box className="border-animation" sx={BorderBoxStyle}>
              <Box
                className="back"
                onClick={() => {
                  setBorderColor("#F33D28");
                }}
                sx={{
                  boxShadow:
                    " rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;",
                  width: { lg: "95%", md: "95%", xs: "95%" },
                  height: { lg: "90px", md: "110px", xs: "60px" },
                  bgcolor: "rgb(255,255,253,0.9)",
                  position: "relative",
                }}
              >
                {/* <img src={image} alt="img" className="card-image" /> */}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
