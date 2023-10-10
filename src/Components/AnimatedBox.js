import React from "react";
import { AnimatedBox, ImageBox } from "./AnimatedBox.styled";
// import { Zoom } from "react-reveal";
import { MessageBox } from "react-chat-elements";
import { Box } from "@mui/material";
import image from "../images/alertImage.png";
export default function AnimatedBoxComponent({ alertInfo, num, setLoading }) {
  return (
    <Box display={true ? "block" : "none"}>
      <AnimatedBox>
        {/* <Zoom opposite> */}
        <MessageBox
          styles={{ width: "50%" }}
          position="right"
          title="Iltimos"
          type="text"
          text={`${num} ta tugmachani bosing `}
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
        {/* </Zoom> */}
      </AnimatedBox>
    </Box>
  );
}
