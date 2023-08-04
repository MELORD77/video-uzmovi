import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import "./video.css";
import Container from "@mui/material/Container";
import Zoom from "react-reveal/Zoom";
import { Box, Button, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const VideoPlayer = () => {
  const hash = window.location.hash ? atob(window.location.hash.slice(1)) : "";
  const player = useRef(null);
  const [url, setUrl] = useState("");
  const [display, setDisplay] = useState("none");

  const handlePlay = (id) => {
    // Start playback manually
    if (!window.location.hash) {
      setUrl("https://filetransfer.io/data-package/BHb9JOLj/download");
    }
    if (player.current) {
      // count && player.current.seekTo(10);
      // Replace 10 with the time (in seconds) you want to start from
      // id && setCount(false);
    }
  };
  const handleDownload = () => {
    // Get the video URL from the player component
    if (player.current) {
      const videoUrl = window.location.hash
        ? JSON.parse(atob(window.location.hash.slice(1)))?.url
        : url;
      if (videoUrl) {
        const link = document.createElement("a");
        link.href = videoUrl;
        link.download = "video.mp4"; // Set the desired filename for download
        link.click();
      }
    }
  };

  useEffect(() => {
    handlePlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="main-container" maxWidth={"xl"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <Box sx={{ width: "100%", display: display }} className="main-box">
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            {/* <Typography
              sx={{}}
              variant="h5"
              color={"#fff"}
              fontWeight={"900"}
              fontFamily="Helvetica, Arial, sans-serif"
            >
              {window.location.hash
                ? JSON.parse(atob(window.location.hash.slice(1)))?.name
                : "name"}
            </Typography> */}
            <p>
              {window.location.hash
                ? JSON.parse(atob(window.location.hash.slice(1)))?.name
                : "name"}
            </p>
          </Box>
          <div>
            <Zoom when={display === "block" && true}>
              <ReactPlayer
                width={"100%"}
                height={"auto"}
                controls
                ref={player}
                // playIcon={customPlayIcon}
                playing
                // light={img}
                onPlay={() => handlePlay("3")}
                url={
                  window.location.hash
                    ? JSON.parse(atob(window.location.hash.slice(1)))?.url
                    : url
                }
              />
            </Zoom>
          </div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              mb: 1,
            }}
          >
            <Button
              variant="contained"
              className="download-Button"
              onClick={handleDownload}
            >
              <Typography variant="button">Download</Typography>
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: display === "none" ? "block" : "none" }}>
          <div className="play-icon-box">
            <svg className="custom-playIcon" viewBox="0 0 250 250">
              <PlayArrowIcon
                style={{ color: "#fff" }}
                onClick={() => setDisplay("block")}
              />
            </svg>
          </div>
        </Box>
      </Box>
    </Container>
  );
};
export default VideoPlayer;
