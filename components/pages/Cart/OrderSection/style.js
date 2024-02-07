import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    margin: "0px",
    [theme.breakpoints.up("md")]: {
      margin: "16px",
    },
  },
  // Main title class
  mainTitle: {
    padding: "8px 0px",
    color: theme.palette.onBackground.main,
    textAlign: "center",
  },
  // Row container class
  rowContainer: {
    backgroundColor: theme.palette.background.main,
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
  },
  // Row title class
  rowTitle: {
    color: theme.palette.onBackground.dark,
  },
  // Items container class
  itemContainer: {
    margin: "8px 0px",
  },
  // Item row container
  itemRowContainer: {
    padding: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  // Quantity title class
  quantityTitle: {
    margin: "0px 8px !important",
    color: theme.palette.primary.main,
  },
  // Total cost title class
  totalCostTitle: {
    color: theme.palette.onBackground.dark,
    fontWeight: "bolder !important",
  },
  // Total cost value class
  totalCostValue: {
    color: theme.palette.primary.main,
    fontWeight: "bolder !important",
  },
  // Usage policy title container class
  usageContainer: { padding: "8px", margin: "8px 0px" },
  // Usage title class
  usageTitle: {
    color: theme.palette.onBackground.dark,
  },
  // Policy checkbox container class
  policyCheckboxContainer: { padding: "8px", margin: "8px 0px" },
  // Policy checkbox class
  policyCheckbox: {
    "& .MuiTypography-root": {
      fontSize: "14px",
      color: theme.palette.onBackground.main,
    },
  },
  // Check out button container class
  checkOutContainer: {
    padding: "8px 16px",
    marginTop: "8px",
  },
  // Check out button class
  checkOutButton: {
    color: theme.palette.onPrimary.main,
    "&:hover": { backgroundColor: `${theme.palette.primary.main} !important` },
  },
  // Loader class
  loader: {
    margin: "0px 8px",
  },
}));

export default useStyles;
