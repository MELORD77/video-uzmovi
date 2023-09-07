import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3, lg: 5 }}
        columns={{ xs: 3, sm: 3, md: 12, lg: 24 }}
        sx={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "start",
          bgcolor:
            "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
        }}
      >
        {Array.from(Array(24)).map((_, index) => (
          <Grid xs={3} sm={1} md={4} lg={3} key={index}>
            <Box
              sx={{
                width: "90%",
                height: "50px",
                mb: "20px",
                borderLeft: "12px solid #fcfffe",
                borderTop: "12px solid #fcfffe",
                borderRight: "12px solid #fcfffe",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "160px",
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
