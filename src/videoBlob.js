import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import img from "./images/photo_2023-07-23_03-08-19.jpg";
import "./video.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
const VideoPlayer = () => {
  const player = useRef(null);
  const [url, setUrl] = useState("");

  const handlePlay = (id) => {
    // Start playback manually
    if (!window.location.hash) {
      setUrl("https://filetransfer.io/data-package/BHb9JOLj/download");
    }
    if (player.current) {
      player.current.seekTo(10);
      // player.current.isPlaying();
      // Replace 10 with the time (in seconds) you want to start from
    }
    console.log(player.current);
  };
  // const handlePlayButton = (id) => {
  //   // Start playback manually
  //   if (!window.location.hash) {
  //     setUrl("https://filetransfer.io/data-package/BHb9JOLj/download");
  //   }

  //   console.log(id);
  // };
  useEffect(() => {
    handlePlay();
  }, []);

  return (
    <Container
      // maxWidth={"xl"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "99vh",
        width: "100%",
      }}
    >
      <div className="video-wrapper">
        <ReactPlayer
          width="100%"
          height="auto"
          ref={player}
          playing
          url={window.location.hash ? atob(window.location.hash.slice(1)) : url}
          onReady={console.log("start")}
          onClickPreview={console.log("pre")}
          light={img}
          controls
        />
      </div>
    </Container>
  );
};
export default VideoPlayer;
