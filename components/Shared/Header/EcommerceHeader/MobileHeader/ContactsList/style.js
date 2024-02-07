import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Root class
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // Contact container class
  contactContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    margin: "0px 4px",
  },
  // Contact icon class
  contactIcon: {
    color: theme.palette.primary.main,
    fontSize: "20px !important",
    margin: "0px 4px !important",
  },
  // Contact title class
  contactTitle: {
    color: theme.palette.onBackground.main,
    [theme.breakpoints.between(320, 377)]: {
      fontSize: "8px !important",
    },
  },
}));

export default useStyles;
