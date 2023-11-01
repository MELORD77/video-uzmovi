import React from "react";
import { Container, Grid } from "@mui/material";
import ResponsiveGrid from "../ResponsiveGrid";
import "./style.css";
import { useWindowSize } from "@uidotdev/usehooks";
import imageBg from "../../images/Rectangle10.png";
import ResponsiveAppBar from "../Navbar";

export default function GiftContainer() {
  const size = useWindowSize();

  const mainHeight = size.height === null ? "80vh" : ` ${size.height - 105}px`;
  return (
    <div
      style={{
        backgroundImage: `url(${imageBg})`,

        // backgroundAttachment: "fixed",
        border: "0.1px solid rgba(51, 65, 89, 0.1)",
      }}
    >
      <ResponsiveAppBar />
      <Container
        sx={{
          maxWidth: { xs: "xxl", md: "xl", lg: "lg" },
        }}
      >
        <Grid container className="grid-container" height={mainHeight}>
          <Grid item xs={12} md={12} className="grid-item">
            <ResponsiveGrid />
          </Grid>
          {/* <Box>
            <AnimatedBox>
              <MessageBox
                styles={{ width: "60%" }}
                position="right"
                title="Iltimos"
                type="text"
                text={`${3} ta tugmachani bosing `}
                date={new Date()}
              />
              <ImageBox>
                <img
                  onLoad={() => {
                    // setLoading(false);
                  }}
                  src={image}
                  alt="imgPerson"
                  loading="lazy"
                  height={"100%"}
                  width={"100%"}
                />
              </ImageBox>{" "}
            </AnimatedBox>
          </Box>{" "} */}
        </Grid>
      </Container>
      {/* <Box
        sx={{
          width: "100%",
          height: "50px",
          borderTop: "1px solid gray",
          position: "absolute",
          bottom: 0,
        }}
      ></Box> */}
    </div>
  );
}
