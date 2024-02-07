import { useState, useRef } from "react";
import { Box } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import useStyles from "./style";

const IntroVideo = ({ video, image }) => {
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef();
  const classes = useStyles({ isPlay });
  return (
    <Box className={classes.root}>
      {video && video != "" && !isPlay && (
        <Box className={classes.playIconContainer}>
          <PlayArrowIcon
            onClick={() => {
              videoRef.current.play();
              setIsPlay(true);
            }}
            className={classes.playIcon}
          />
        </Box>
      )}
      <video
        controls={isPlay}
        poster={image}
        className={classes.videoPlayer}
        ref={videoRef}
        onClick={() => setIsPlay(true)}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};
export default IntroVideo;
