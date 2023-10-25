import { Grid } from "@mui/material";
import React from "react";
import YouTube from "react-youtube";
export default function Footer() {
  return (
    <>
      <Grid
        container
        columnSpacing={15}
        // gap={5}
        p={3}
        mt={0}
        justifyContent={"space-evenly"}
        alignItems={"end"}
      >
        <Grid item xs={12} md={6} lg={4} xl={4}>
          <YouTube
            videoId="yq4JuYcs69w"
            opts={{
              width: "100%",
              position: "relative",
              overflow: "hidden",
              paddingTop: "56.25%",
            }}
            onReady={() => {
              console.log("ready");
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={4}>
          <YouTube
            videoId="yq4JuYcs69w"
            opts={{
              width: "100%",
              position: "relative",
              overflow: "hidden",
              paddingTop: "56.25%",
              // playerVars: {
              //   autoplay: 1,
              // },
            }}
            onReady={() => {
              console.log("ready");
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={4}>
          <YouTube
            videoId="yq4JuYcs69w"
            opts={{
              width: "100%",
              position: "relative",
              overflow: "hidden",
              paddingTop: "56.25%",
              // playerVars: {
              //   autoplay: 1,
              // },
            }}
            onReady={() => {
              console.log("ready");
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
