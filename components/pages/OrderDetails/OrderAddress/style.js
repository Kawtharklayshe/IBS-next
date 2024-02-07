import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    backgroundColor: theme.palette.card.main,
    padding: "0px 24px !important",
    [theme.breakpoints.up(900)]: {
      padding: "24px !important",
    },
  },
  // Main title class
  mainTitle: {
    color: theme.palette.onCard.main,
  },
  // Divider class
  divider: {
    margin: "8px 0px 24px 0px !important",
    width: "100%",
    display: "none",
    [theme.breakpoints.up(900)]: {
      display: "block",
    },
  },
  //  Tittle class
  title: {
    color: theme.palette.onCard.main,
    margin: "24px !important",
  },
}));

export default useStyles;
