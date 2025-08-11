import React, { useEffect, useRef } from "react";
import musicFile from "../assets/birthday-music.mp3";

export default function BackgroundMusic({ play }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [play]);

  return <audio ref={audioRef} src={musicFile} loop />;
}
