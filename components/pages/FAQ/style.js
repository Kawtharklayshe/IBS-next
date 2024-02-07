import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // page container class
  root: {
    backgroundColor: theme.palette.background.main,
  },

  // inner container class
  innerContainer: {
    maxWidth: "95%",
    paddingBottom: "100px",
  },
}));

export default useStyles;
