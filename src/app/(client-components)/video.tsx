
import { useRef, useEffect } from 'react';

export default function Video({ src, isPlaying }: {src: string, isPlaying: boolean}) {
  // this ref variable holds the video DOM node
  // 'videoRef.current' is initialized by React when the component rendering is committed
  const videoRef = useRef<HTMLVideoElement>(null);


  useEffect(
    // this function is allowed to produce side effects
    // it is called by React when the component rendering is committed
    () => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, 
  // the effect function above won't be triggered if the dependencies variables listed here don't change
  [isPlaying]);

  return <video ref={videoRef} src={src} playsInline />;
}