import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "./border.css";
import { createTheme } from "@mui/material/styles";
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
  return (
    <Box
      sx={{ flexGrow: 1, paddingTop: "20px", paddingBottom: "50px" }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"stretch"}
    >
      <Grid
        container
        spacing={{ xs: 3, sm: 3, md: 3, lg: 5 }}
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
            <Box
              className="border-animation"
              sx={{
                boxShadow: "0px -5px 16px 2px rgba(201,79,79,0.53)",
                position: "relative",
                width: { lg: "100%", md: "100%", sm: "40%", xs: "70%" },
                height: { lg: "40px", md: "30px", sm: "40px", xs: "15px" },
                borderLeft: {
                  xs: "6px solid #fcfffe",
                  lg: "10px solid #fcfffe",
                },
                borderTop: {
                  xs: "6px solid #fcfffe",
                  lg: "10px solid #fcfffe",
                },
                borderRight: {
                  xs: "6px solid #fcfffe",
                  lg: "10px solid #fcfffe",
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
                sx={{
                  boxShadow: "-2px -7px 16px -3px rgba(168,134,134,0.53) inset",
                  width: { lg: "100%", md: "100%", xs: "100%" },
                  height: { lg: "130px", md: "120px", xs: "60px" },
                  bgcolor: "rgb(255,255,253,0.5)",
                }}
              ></Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
