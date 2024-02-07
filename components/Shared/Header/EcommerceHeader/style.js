import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Fixed header when scrollTop is false
  fixedHeaderScrollOff: {
    position: "sticky !important",
    backgroundColor: theme.palette.background.main,
    width: "100%",
    top: "0px",
    color: "black",
    zIndex: "2",
  },
  // Header container
  headerContainer: {
    position: "absolute !important",
    top: "0px",
    width: "100%",
    color: "white",
    zIndex: "2",
  },

  // Web header container class
  webHeaderContainer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  // Mobile header container class
  mobileHeaderContainer: {
    display: "block",
    zIndex: "3",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default useStyles;
