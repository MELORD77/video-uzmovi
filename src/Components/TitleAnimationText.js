import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import "../Css/detail.css";
import { Avatar, Grid } from "@mui/material";
import image from "../images/card.jpg";
export default function TitleAnimationText() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible((prev) => !prev);
    }, 2000); // Delay of 2000 milliseconds (2 seconds)

    return () => clearTimeout(timer); // Clear the timeout if the component unmounts
  }, []);

  return (
    <div style={{ zIndex: 10, width: "100%" }}>
      {isVisible && (
        <Fade delay={1e3} cascade damping={1e-1}>
          Title...!
        </Fade>
      )}
      <Grid
        container
        spacing={2}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Grid item>
          <div className="detail_box">
            <h1>
              Electrical <br />
              Service <br />
              Providers
            </h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </p>
            <button className="button-91" role="button">
              Button 91
            </button>
          </div>
        </Grid>
        <Grid item>
          <div className="detail_box">
            <Avatar
              variant="square"
              sx={{
                width: "300px",
                height: "300px",
                boxShadow: "2px 0 10px 10px #fff",
              }}
              alt="image1"
              src={image}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
