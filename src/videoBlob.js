import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import img from "./images/16-9.png";
import "./video.css";
import Container from "@mui/material/Container";
import { Box, Button, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const VideoPlayer = () => {
  const player = useRef(null);
  const [url, setUrl] = useState("");
  const [count, setCount] = useState(true);
  const customPlayIcon = (
    <div className="play-icon-box">
      <svg className="custom-playIcon" viewBox="0 0 250 250">
        <PlayArrowIcon style={{ color: "grey" }} />
      </svg>
    </div>
  );
  const handlePlay = (id) => {
    // Start playback manually
    if (!window.location.hash) {
      setUrl("https://filetransfer.io/data-package/BHb9JOLj/download");
    }
    if (player.current) {
      count && player.current.seekTo(10);
      // Replace 10 with the time (in seconds) you want to start from
      id && setCount(false);
    }
  };
  const handleDownload = () => {
    // Get the video URL from the player component
    if (player.current) {
      const videoUrl = window.location.hash
        ? atob(window.location.hash.slice(1))
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
    <Container
      // maxWidth={"xl"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        width: "100%",
      }}
    >
      <div className="video-wrapper">
        <ReactPlayer
          controls
          width={"100%"}
          height={"100%"}
          ref={player}
          playIcon={customPlayIcon}
          playing
          light={img}
          onPlay={() => handlePlay("3")}
          url={window.location.hash ? atob(window.location.hash.slice(1)) : url}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            mt: 1,
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
      </div>
    </Container>
  );
};
export default VideoPlayer;
