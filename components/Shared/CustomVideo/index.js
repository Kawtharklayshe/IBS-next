import { useState, useRef } from "react";
import FullVideo from "../FullVideo";
import useStyles from "./style";
const CustomVideo = ({ video, image }) => {
  const classes = useStyles();
  const videoRef = useRef();
  const [isPlay, setIsPlay] = useState(false);
  return (
    <div className={classes.root}>
      {!isPlay && (
        <img
          src="/images/play.png"
          className={classes.playImage}
          onClick={() => {
            setIsPlay(true);
          }}
        />
      )}
      <video
        poster={image || "/images/playGif.gif"}
        className={!isPlay ? classes.posterVideo : undefined}
        ref={videoRef}
        onClick={() => setIsPlay(true)}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <FullVideo open={isPlay} setOpen={setIsPlay} video={video} />
    </div>
  );
};

export default CustomVideo;
