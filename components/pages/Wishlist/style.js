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
  // Pagination container
  paginationContainer: {
    display: "flex",
    justifyContent: "end",
  },
  // Cards container class for MD screens
  cardsMdContainer: {
    display: "none",
    [theme.breakpoints.up(900)]: {
      display: "block",
    },
  },
  // Cards container class for small screens
  cardsSmallContainer: {
    padding: "0px 8px !important",
    display: "block",
    [theme.breakpoints.up(900)]: {
      display: "none",
    },
  },
  // Card container class
  cardContainer: {
    position: "relative",
    padding: "8px 16px !important",
    marginBottom: "16px !important",
  },
  // Close icon
  closeIcon: {
    color: theme.palette.onBackground.main,
    position: "absolute",
    top: "-4%",
    right: "0%",
    fontWeight: "bold !important",
    fontSize: "22px",
    cursor: "pointer",
    "&:hover": {
      color: "#bcbcbc",
    },
  },
}));

export default useStyles;
