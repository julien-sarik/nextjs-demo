'use client'

import { useState } from "react";
import Video from "./video";


export default function VideoPanel({src}: {src: string}) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <Video
        isPlaying={isPlaying}
        src={src}
      />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </>
  );
}
