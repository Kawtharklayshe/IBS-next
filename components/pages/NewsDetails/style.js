import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Root class
  root: {
    backgroundColor: theme.palette.background.main,
  },
  // inner Container class
  innerContainer: {
    maxWidth: "95%",
    paddingBottom: "75px",
  },
  // Share Title Class
  shareTitle: {
    color: theme.palette.onCard.light,
    fontWeight: "600",
  },
}));

export default useStyles;
