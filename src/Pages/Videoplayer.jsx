import React, { useRef, useState } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  //ssssssss

  return (
    <div>
      <video
        src="https://res.cloudinary.com/dmqnwisyq/video/upload/v1675336682/Austrialia_ofebfe.mov"
        ref={videoRef}
        width="640"
        height="360"
        controls
      />

      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
}

export default VideoPlayer;
