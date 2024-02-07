import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    margin: "0px !important",
    border: "2px solid",
    borderColor: "#e2e2e2",
    [theme.breakpoints.up("md")]: {
      margin: "16px important",
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
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
  },
  // Row title class
  rowTitle: {
    color: theme.palette.onBackground.dark,
  },
  // Row value class
  rowValue: {
    color: theme.palette.primary.dark,
  },
  // Total cost container class
  totalCostContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
    backgroundColor: theme.palette.card.main,
  },
  // Total cost title class
  totalCostTitle: {
    color: theme.palette.onBackground.dark,
    fontWeight: "bolder !important",
  },
  // Complete order container class
  completeOrderContainer: {
    padding: "8px 16px",
    marginTop: "8px",
  },
  // Complete order button class
  completeOrderButton: {
    color: theme.palette.onPrimary.main,
    "&:hover": { backgroundColor: theme.palette.primary.main },
  },
}));

export default useStyles;
