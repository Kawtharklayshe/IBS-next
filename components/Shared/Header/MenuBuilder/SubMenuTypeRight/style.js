import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Button class
  menuBtn: {
    cursor: "pointer",
    whiteSpace: "nowrap",
    width: "100% !important",
    display: "flex !important",
    justifyContent: "space-between !important",
    borderRadius: "0px !important",
    margin: "0px !important",
    padding: "0px !important",
    paddingLeft:
      theme.direction == "rtl" ? "0px !important" : "10px !important",
    paddingRight:
      theme.direction == "rtl" ? "10px !important" : "0px !important",
    textTransform: "none !important",
    lineHeight: "25px !important",
    borderBottom: "2px solid transparent !important",
    color: "#A1A8A8 !important",
    fontFamily: "Roboto !important",
    fontWeight: "500 !important",
    fontSize: "0.85rem",
    "&:hover": {
      borderColor: `${theme.palette.primary.main} !important`,
      color: `${theme.palette.onBackground.light} !important`,
      transition: ".9s",
    },
    "& .muirtl-9tj150-MuiButton-endIcon": {
      margin:
        theme.direction == "rtl"
          ? "0px 10px 0px 0px !important"
          : "0px 0px 0px 10px !important",
    },
  },
  // Popover class
  popover: {
    pointerEvents: "none",
  },
  // Popover content class
  popoverContent: {
    pointerEvents: "auto",
    padding: "5px",
  },
  // Single Item Title class
  singleItemTitle: {
    cursor: "pointer",
    whiteSpace: "nowrap",
    margin: "10px !important",
    color: "#A1A8A8",
    fontFamily: "Roboto !important",
    fontWeight: "500 !important",
    fontSize: "0.85rem",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
