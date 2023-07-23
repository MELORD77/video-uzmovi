import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import img from "./images/photo_2023-07-23_03-08-19.jpg";
import { useParams } from "react-router-dom";
const VideoPlayer = () => {
  const player = useRef(null);
  const { id } = useParams();
  const [url, setUrl] = useState("");

  const handlePlay = (id) => {
    // Start playback manually
    console.log("play");
    if (player.current && !id) {
      player.current.seekTo(10);
      console.log(player.current);
      setUrl("https://filetransfer.io/data-package/BHb9JOLj/download"); // player.current.isPlaying();
      // Replace 10 with the time (in seconds) you want to start from
    }
  };
  useEffect(() => {
    handlePlay();
  }, []);

  return (
    <div>
      <ReactPlayer
        width={"100%"}
        height={"99.5vh"}
        ref={player}
        url={id ? atob(id) : url}
        playing
        volume={1}
        onPlay={() => handlePlay(1)}
        light={img}
        controls
      />
    </div>
  );
};
export default VideoPlayer;
