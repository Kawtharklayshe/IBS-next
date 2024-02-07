import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    marginBottom: "30px",
  },
  // Row container
  rowContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  // Title class
  title: {
    paddingTop: "16px !important",
    fontWeigh: "bold !important",
  },
  // Title value class
  titleValue: {
    paddingTop: "16px !important",
  },
  // Title value class
  totalValue: {
    paddingTop: "16px !important",
    fontWeigh: "bolder",
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
