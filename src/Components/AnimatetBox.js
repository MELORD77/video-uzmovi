import React, { useEffect } from "react";
import { AnimatedBox, ImageBox } from "./AnimatedBox.styled";
import { Zoom } from "react-reveal";
import { MessageBox } from "react-chat-elements";
import { Box } from "@mui/material";
export default function AnimatedBoComponent({ alertInfo, num, image }) {
  return (
    <Box display={alertInfo ? "block" : "none"}>
      <AnimatedBox>
        <Zoom opposite>
          <MessageBox
            styles={{ width: "200px" }}
            position="right"
            title="Iltimos"
            type="text"
            text={`${num} ta tugmachani bosing `}
            date={new Date()}
          />
          <ImageBox>
            <img src={image} alt="imgPerson" height={"100%"} width={"100%"} />
          </ImageBox>{" "}
        </Zoom>
      </AnimatedBox>
    </Box>
  );
}
