import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    backgroundColor: theme.palette.background.main,
    paddingBottom: "75px",
  },
  // Inner container class
  innerContainer: {
    maxWidth: "95%",
  },
  // Loader container class
  loaderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  //Title class
  title: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  // Arrow Icon class
  arrowIcon: {
    color: theme.palette.primary.main,
    fontSize: "30px !important",
    margin: "0px 8px !important",
    transform: theme.direction == "rtl" ? "rotateY(180deg)" : "rotateY(360deg)",
  },
}));

export default useStyles;
