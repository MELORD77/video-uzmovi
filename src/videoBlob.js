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
      setUrl(
        "http://212.41.14.16/atsspxds/Ukd1ZHA1Ri95bVBpVmI5SmRsaEdKSTVncmg1dldLcVNZQStYUnp1bk1oU2d0ZTJUY3kzSTVjUVR5Q1QwbUR0aQ_umn_umn/WWdFS2pSUUkvMGordldXdkdWdzMzV0VXWGg5S1Q2QWhaS05FM1N1bWhWcGJRamozUXhzR05GTy93d3hUSklyUw_5uv_5uv/K09QdCtIQSsyYmg1cjJtM1l3My9Rdz09/"
      );
      // player.current.isPlaying();
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
