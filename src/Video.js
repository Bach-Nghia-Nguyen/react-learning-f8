import { forwardRef, useImperativeHandle, useRef } from "react";
import video1 from "./videos/2.3MB.mp4";

function Video(props, ref) {
  const videoRef = useRef();
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));
  return <video src={video1} ref={videoRef}></video>;
}

export default forwardRef(Video);
