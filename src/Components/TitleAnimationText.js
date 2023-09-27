import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Fade, Zoom, Reveal } from "react-awesome-reveal";
export default function TitleAnimationText() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible((prev) => !prev);
    }, 2000); // Delay of 2000 milliseconds (2 seconds)

    return () => clearTimeout(timer); // Clear the timeout if the component unmounts
  }, []);

  return (
    <>
      {isVisible && (
        <Fade
          delay={1e3}
          cascade
          damping={1e-1}
          style={{
            fontSize: "79px",
            fontFamily: "monospace !important",
            fontWeight: "900 !important",
            color: "#fff!important",
          }}
        >
          Title...!
        </Fade>
      )}
    </>
  );
}
