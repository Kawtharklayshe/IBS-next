import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: (props) => ({
    position: "relative",
    padding: "50px 0px",
    backgroundSize: "cover",
    background: `url(${props.backgroundImage})`,
    backgroundAttachment: "fixed",
  }),
  // overlay class
  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    backgroundColor: "#00000082",
    opacity: "0.70",
  },
  // Inner Container class
  innerContainer: {
    maxWidth: "95%",
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "30px",
    border: `1px solid ${theme.palette.onPrimary.main}`,
  },
  // Title class
  title: {
    color: theme.palette.onPrimary.main,
    fontWeight: "500 !important",
    margin: "0px",
    zIndex: "1",
  },
  // Button class
  button: {
    backgroundColor: `${theme.palette.onPrimary.main} !important`,
    color: theme.palette.primary.main,
    margin: "0px !important",
    "&:hover": {
      backgroundColor: `${theme.palette.primary.main} !important`,
      color: theme.palette.onPrimary.main,
    },
  },
}));

export default useStyles;
