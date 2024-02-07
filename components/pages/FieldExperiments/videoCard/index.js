import { Typography, Box } from "@mui/material";
import useStyles from "./style";
const VideoCard = ({ data, theme }) => {
  const classes = useStyles();
  return (
    <Box className={classes.videoCard}>
      <Typography variant="h6" component="h6" className={classes.overFlowText}>
        {data?.title}
      </Typography>

      <Typography variant="subtitle1" className={classes.overFlowTextBasic}>
        {data?.subTitle}
      </Typography>

      <iframe
        allowFullScreen
        src={data.url}
        className={classes.iframeWrapper}
      />
    </Box>
  );
};

export default VideoCard;
