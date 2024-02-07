import { headerTypes } from "../../../../../constants/enums";
import { Button, Box } from "@mui/material";
import useStyles from "./style";

const VideoBackground = ({ data, headerType, heroHeight }) => {
  const classes = useStyles({ headerType, headerTypes, heroHeight });
  return (
    <Box className={classes.root}>
      <video loop={true} autoPlay={true} muted className={classes.video}>
        <source src={data?.content} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box className={classes.detailsContainer}>
        <Button
          className={classes.button}
          onClick={() => window.open(data?.buttonUrl, "_blank")}
        >
          {data?.buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default VideoBackground;
