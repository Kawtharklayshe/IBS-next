import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    margin: "8px 0px",
    paddingTop: "40px",
  },
  // Items container class for MD screens
  ItemsMdContainer: {
    display: "none",
    padding: "0px 16px",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  // Column title class
  columnTitle: {
    color: theme.palette.onBackground.main,
  },
  // Main divider class
  mainDivider: {
    margin: "8px 0px !important",
  },

  // Items container class for small screens
  ItemsSmallContainer: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // Coupon sectio container class
  couponSectionContainer: {
    display: "flex",
    alignItems: "center",
    margin: "16px 0px",
    [theme.breakpoints.up("md")]: {
      margin: "16px",
    },
  },
  // Coupon input class
  couponInput: {
    "& input": {
      maxWidth: "110px",
      fontSize: "12px",
      [theme.breakpoints.up("sm")]: {
        maxWidth: "180px",
        fontSize: "14px",
      },
    },
  },
  // Coupon button class
  couponButton: {
    color: theme.palette.onPrimary.main,
    fontSize: "12px !important",
    margin: "0px 8px !important",
    "&:hover": { backgroundColor: theme.palette.primary.main },
    [theme.breakpoints.up("sm")]: {
      fontSize: "14px !important",
    },
  },

  // Cart summary container class
  cartSummaryContainer: {
    padding: "8px 0px",
  },
}));

export default useStyles;
