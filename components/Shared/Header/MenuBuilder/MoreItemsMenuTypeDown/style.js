import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Button class
  menuBtn: {
    cursor: "pointer",
    whiteSpace: "nowrap",
    borderRadius: "0px !important",
    margin: "10px !important",
    padding: "0px !important",
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
    "& span.MuiButton-endIcon": {
      display: "contents",
    },
  },
  // Popver class
  popover: {
    pointerEvents: "none",
  },
  // popver content class
  popoverContent: {
    pointerEvents: "auto",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
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
