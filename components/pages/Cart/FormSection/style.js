import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {},
  // Inner Container class
  innerContainer: {
    margin: "16px !important",
  },
  // Main title class
  mainTitle: {
    padding: "8px 0px",
    color: theme.palette.onBackground.main,
  },
  // Semi Row container class
  semiRowContainer: {
    paddingRight: theme.direction == "rtl" ? "none" : "0px",
    paddingLeft: theme.direction != "rtl" ? "none" : "0px",
    [theme.breakpoints.up("md")]: {
      paddingRight: theme.direction == "rtl" ? "none" : "8px",
      paddingLeft: theme.direction != "rtl" ? "none" : "8px",
    },
  },
  // Text area container
  textAreaContainer: {
    marginTop: "16px !important",
  },
}));

export default useStyles;
