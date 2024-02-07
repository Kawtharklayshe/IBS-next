import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    margin: "8px 0px !important",
    padding: "40px 0px 0px 0px !important",
    [theme.breakpoints.up("sm")]: {
      padding: "40px 24px 0px 24px !important",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "40px 40px 0px 40px !important",
    },
  },
  // Main title container class
  mainTitleContainer: {
    border: "2px dotted",
    borderColor: theme.palette.primary.main,
    margin: "16px 0px",
  },
  // Main title class
  mainTitle: {
    padding: "8px 0px",
    color: theme.palette.primary.main,
    textAlign: "center",
  },
  // First section container class
  firstSectionContainer: {
    margin: "8px 0px",
  },
  // First section column class
  firstSectionColumn: {
    display: "flex",
    flexDirection: "row !important",
    alignItems: "center",
    justifyContent: "space-between",
    border: "none",
    borderRightColor: theme.direction == "rtl" ? "none" : "transparent",
    borderLeftColor: theme.direction != "rtl" ? "none" : "transparent",
    [theme.breakpoints.up("md")]: {
      flexDirection: "column !important",
      justifyContent: "center",
      border: "1px solid transparent",
      borderRightColor: theme.direction == "rtl" ? "none" : "#bcbcbc",
      borderLeftColor: theme.direction != "rtl" ? "none" : "#bcbcbc",
    },
  },
  // First section last column class
  firstSectionLastColumn: {
    display: "flex",
    flexDirection: "row !important",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      flexDirection: "column !important",
      justifyContent: "center",
    },
  },
  // First section column title class
  firstSectionTitle: {
    padding: "8px 0px",
    color: theme.palette.onBackground.light,
  },
  // First section column value class
  firstSectionValue: {
    padding: "8px 0px",
    color: theme.palette.onBackground.dark,
  },
  // Second section title class
  secondSectionTitle: {
    padding: "8px 0px",
    color: theme.palette.onBackground.main,
    textAlign: "center",
  },
  // Second section row container class
  secondSectionRowContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
  },
  // Second section row title class
  secondSectionRowTitle: {
    color: theme.palette.onBackground.dark,
  },
  // items container class
  itemsContainer: {
    margin: "8px 0px",
  },
  // Item row container class
  itemRowContainer: {
    padding: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  // Item row title class
  itemRowTitle: {
    color: theme.palette.onBackground.dark,
  },
  // Item row value class
  itemRowValue: {
    color: theme.palette.onBackground.dark,
  },
  // Item row quantity title class
  itemRowQuantityTitle: {
    margin: "0px 8px !important",
    color: theme.palette.primary.main,
  },
  // Second section last row title class
  secondSectionLastRowTitle: {
    color: theme.palette.onBackground.dark,
    fontWeight: "bold !important",
  },
  // Second section last row value class
  secondSectionLastRowValue: {
    color: theme.palette.primary.main,
    fontWeight: "bold !important",
  },
}));

export default useStyles;
