import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    backgroundColor: theme.palette.card.main,
    color: theme.palette.onCard.main,
    boxShadow: "none",
    padding: "8px !importantt",
    [theme.breakpoints.up(900)]: {
      padding: "30px !important",
      boxShadow: `0px 0px ${theme.shape.cardElevation}px`,
    },
  },

  // Header container class
  headerContainer: {
    display: "none !important",
    [theme.breakpoints.up(900)]: {
      display: "block !important",
    },
  },
  // Column Title class
  columnTitle: {
    fontWeight: "bold !important",
  },
  // Divider class
  divider: {
    margin: "16px 0px !important",
    display: "none !important",
    [theme.breakpoints.up(900)]: {
      display: "block !important",
    },
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

  // Order rows container class for MD screens
  orderRowsContainer: {
    display: "none !important",
    [theme.breakpoints.up(900)]: {
      display: "block !important",
    },
  },
  // Rows Divider class
  rowsDivider: {
    margin: "16px 0px !important",
  },

  // Order cards container class for small screens
  orderCardsContainer: {
    [theme.breakpoints.up(900)]: {
      display: "none !important",
    },
  },
}));

export default useStyles;
