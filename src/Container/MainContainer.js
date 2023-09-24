import React, { useEffect, useState, lazy } from "react";
import "../Css/video.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import SkeletonPage from "../Components/Skeleton";
const ResponsiveGrid = React.lazy(() => import("./ResponsiveGrid"));
const ResponsiveAppBar = React.lazy(() => import("./Navbar"));
const AnimatedBoxComponent = lazy(() => import("../Components/AnimatedBox.js"));

const MainPage = () => {
  const [alertInfo, setAlert] = React.useState(true);
  const [count, setCount] = React.useState(0);
  const [num, setNum] = useState(0);
  const [maxNum] = useState(8);

  const [open, setOpen] = React.useState(false);
  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const Timer = () => {
    const timer = setTimeout(() => {
      // setAlert(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  };
  const handleClick = () => {
    setCount((prev) => prev + 1);
    if (num === 0) {
      setNum(randomNumberInRange(1, maxNum));
    }
    if (num !== 0 && num === count) {
      Timer();
      setCount(1);
      setNum(randomNumberInRange(1, maxNum));
      setAlert(true);
    }
  };

  useEffect(() => {
    // handleClick();
    Timer();
  }, []);

  return (
    <div className="main-container">
      <ResponsiveAppBar />
      <Container maxWidth={"lg"}>
        <Box
          sx={{
            mt: { lg: "100px", xs: "70px" },
            display: "block",
            // height: "45vh",
            position: "relative",
            maxWidth: "100%",
          }}
        >
          {/* <SkeletonPage /> */}
          <ResponsiveGrid
            handleClick={handleClick}
            open={open}
            setOpen={setOpen}
            num={num}
            alertInfo={alertInfo}
            setAlert={setAlert}
          />
        </Box>
        <Box
          sx={{
            height: "180px",
            position: "relative",
          }}
        >
          {
            <AnimatedBoxComponent
              num={num}
              alertInfo={alertInfo}
              setAlert={setAlert}
            />
          }
        </Box>
      </Container>
    </div>
  );
};
export default MainPage;
