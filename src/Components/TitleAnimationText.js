import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import "../Css/detail.css";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
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
            <h1>BORIGA BARAKA</h1>
            <p>Обманчиво простая, невероятно интересная</p>
          </div>
          <div component={NavLink} to={"/gift"} className="button-box">
            <button className="button"> Играть сейчас</button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
