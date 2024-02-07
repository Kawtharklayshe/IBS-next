import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: (props) => ({
    width: "100%",
    height:
      props.headerType == props.headerTypes.colored
        ? `${props.heroHeight}px`
        : "100vh",
    position:
      props.headerType == props.headerTypes.colored ? "relative" : "unset",
  }),
  // Video class
  video: {
    height: "100%",
    filter: "brightness(0.6)",
  },
  // Details container class
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: "25%",
    right: "6.5%",
  },
  // Button class
  button: {
    backgroundColor: `${theme.palette.background.main} !important`,
    padding: "8px !important",
    "&:hover": {
      color: `${theme.palette.onPrimary.main} !important`,
      backgroundColor: `${theme.palette.primary.main} !important`,
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
}));

export default useStyles;
