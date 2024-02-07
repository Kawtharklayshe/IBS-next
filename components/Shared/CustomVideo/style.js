import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    overflow: "hidden",
    position: "relative",
    height: "400px",
    width: "100%",
  },
  // play image class
  playImage: {
    width: "50px",
    height: "50px",
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 1,
    transform: "translate(-50%, -50%)",
  },
  // video poster class
  posterVideo: {
    filter: "brightness(0.4)",
    width: "100%",
    position: "relative",
  },
}));

export default useStyles;
