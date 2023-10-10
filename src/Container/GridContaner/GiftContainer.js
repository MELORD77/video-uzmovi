import React from "react";
import { Box, Container, Grid } from "@mui/material";
import ResponsiveGrid from "../ResponsiveGrid";
import "./style.css";
import { useWindowSize } from "@uidotdev/usehooks";
import ButtonAppBar from "../../Components/appBar";
import AnimatedBoxComponent from "../../Components/AnimatedBox";
import { MessageBox } from "react-chat-elements";
import { AnimatedBox, ImageBox } from "../../Components/AnimatedBox.styled";
import image from "../../images/alertImage.png";

export default function GiftContainer() {
  const size = useWindowSize();

  const mainHeight = size.height === null ? "80vh" : ` ${size.height - 205}px`;
  return (
    <div>
      <ButtonAppBar />
      <Container
        sx={{
          maxWidth: { xs: "xxl", md: "xl", lg: "xl" },
        }}
      >
        <Grid container className="grid-container" height={mainHeight}>
          <Grid item xs={12} md={8} className="grid-item">
            <ResponsiveGrid />
          </Grid>
          <Grid item xs={12} md={4} className="grid-item-image">
            <Box>
              <AnimatedBox>
                <MessageBox
                  styles={{ width: "50%" }}
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
            </Box>{" "}
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          width: "100%",
          height: "50px",
          borderTop: "1px solid gray",
          position: "absolute",
          bottom: 0,
        }}
      ></Box>
    </div>
  );
}
