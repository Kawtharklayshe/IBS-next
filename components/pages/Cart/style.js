import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    backgroundColor: theme.palette.background.main,
  },
  // inner conatiner class
  innerConatiner: {
    maxWidth: "95%",
    paddingBottom: "75px",
  },
}));

export default useStyles;
