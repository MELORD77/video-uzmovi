import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "../Css/border.css";
import { Skeleton, Stack } from "@mui/material";
import "react-chat-elements/dist/main.css";

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

export default function SkeletonPage() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingTop: { lg: "0px", md: "30px", sm: "0px", xs: "30px" },
        paddingBottom: { lg: "40px", md: "0", sm: "0px", xs: "40px" },
        position: "relative",
        height: "auto",
      }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"stretch"}
    >
      <Grid
        width={"100%"}
        container
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
            <Box sx={{ width: "90%" }}>
              <Skeleton
                animation="wave"
                width={"100%"}
                sx={{ height: { xs: "100px", md: "180px", lg: "220px" } }}
              />
            </Box>
          </Grid>
        ))}
        <Stack
          width={"98%"}
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start"
          spacing={2}
        >
          <Skeleton
            animation="wave"
            width={"20%"}
            sx={{ height: { xs: "100px", md: "180px", lg: "200px" } }}
          />
          <Skeleton
            animation="wave"
            width={"10%"}
            sx={{ height: { xs: "100px", md: "180px", lg: "350px" } }}
          />
        </Stack>
      </Grid>
    </Box>
  );
}
