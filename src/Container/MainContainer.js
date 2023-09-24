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
  const [maxNum, setMaxNum] = useState(8);
  const [itemCount, setItemCount] = useState(24);
  const [dialog, setDialog] = useState(false);
  const [open, setOpen] = React.useState(false);
  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const Timer = () => {
    const timer = setTimeout(() => {
      setAlert(false);
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
    handleClick();
    Timer();
  }, []);

  return (
    <div className="main-container">
      <ResponsiveAppBar />
      <Container maxWidth={"lg"}>
        <Box
          sx={{
            mt: { lg: "20px" },
            display: "flex",
            height: "85vh",
            position: "relative",
            maxWidth: "100%",
            border: "1px solid red",
          }}
        >
          {/* <SkeletonPage /> */}
          <ResponsiveGrid
            handleClick={handleClick}
            open={open}
            setOpen={setOpen}
          />
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
