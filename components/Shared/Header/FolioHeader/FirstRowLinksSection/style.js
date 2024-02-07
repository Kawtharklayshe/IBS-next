import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Media container class
  mediaContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 1,
    borderLeft:
      theme.direction == "rtl"
        ? "1px solid rgba(223, 223, 223, 0.89) !important"
        : "unset",
    borderRight:
      theme.direction == "rtl"
        ? "unset"
        : "1px solid rgba(223, 223, 223, 0.89) !important",
    paddingLeft: theme.direction == "rtl" ? "20px" : "unset",
    paddingRight: theme.direction == "rtl" ? "unset" : "20px",
    [theme.breakpoints.between(320, 450)]: {
      display: "none",
    },
  },
  // Media text section class
  mediaTextSection: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  // Media text Title class
  mediaTitle: {
    color: theme.palette.onBackground.main,
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "18px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  // Media text value class
  mediaValue: {
    fontSize: "10px !important",
    letterSpacing: "0px",
    color: "#BABABA",
    [theme.breakpoints.up("md")]: {
      fontSize: "12px !important",
    },
  },
  // Main Icon class
  mainIcon: {
    cursor: "pointer",
    fontSize: "24px !important",
    marginRight: "10px",
    marginLeft: "10px",
  },
}));

export default useStyles;
