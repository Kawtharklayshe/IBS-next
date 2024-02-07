import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    backgroundColor: theme.palette.background.main,
  },
  // inner container class
  innerContainer: {
    maxWidth: "95%",
    paddingBottom: "75px",
  },
  // decription class
  description: {
    padding: "0px 12px",
  },
  // Share Title Class
  shareTitle: {
    color: theme.palette.onCard.light,
    fontWeight: "600",
  },
}));

export default useStyles;
