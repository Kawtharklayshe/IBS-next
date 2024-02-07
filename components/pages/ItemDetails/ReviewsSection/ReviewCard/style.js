import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    margin: "8px auto !important",
    padding: "16px",
    border: "1px solid",
    borderColor: "#bcbcbc",
    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
  },
  // Info container class
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down(600)]: {
      flexDirection: "column",
    },
  },
  // Person container class
  personContainer: {
    display: "flex",
    alignItems: "center",
  },
  // Avatar class
  avatar: {
    width: "63px",
    height: "63px",
    borderRadius: "50%",
  },
  // full name class
  fullNameContainer: {
    margin: "8px !important",
  },
  // Full name class
  fullName: {
    fontWeight: "bold !important",
    color: theme.palette.onCard.dark,
  },
  // Info Date class
  infoDate: {
    color: theme.palette.onCard.light,
  },
  // content class
  content: {
    color: theme.palette.onCard.dark,
    marginTop: "16px !important",
    lineHeight: "1.7",
  },
}));

export default useStyles;
