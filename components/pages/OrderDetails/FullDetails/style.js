import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    backgroundColor: theme.palette.card.main,
    padding: "24px !important",
  },
  // Header container class
  headerContainer: {
    display: "none !important",
    [theme.breakpoints.up(900)]: {
      display: "flex !important",
    },
  },
  //  Column Tittle class
  columnTitle: {
    color: theme.palette.onCard.main,
  },
  // Divider class
  mainDivider: {
    margin: "8px 0px 16px 0px !important",
    width: "100%",
  },
  // Items container for MD screens
  itemsMdContainer: {
    display: "none",
    [theme.breakpoints.up(900)]: {
      display: "block",
    },
  },
  // Items container for small screens
  itemsSmallContainer: {
    display: "block",
    [theme.breakpoints.up(900)]: {
      display: "none",
    },
  },
  // basic Divider class
  basicDivider: {
    margin: "16px 0px",
  },
  // Last Divider class
  LastDivider: {
    width: "100%",
    [theme.breakpoints.up(900)]: {
      display: "none",
    },
  },
}));

export default useStyles;
