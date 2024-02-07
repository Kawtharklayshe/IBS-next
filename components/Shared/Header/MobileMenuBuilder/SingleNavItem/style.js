import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {},
  // Title class
  title: {
    color: theme.palette.onBackground.dark,
    cursor: "pointer",
  },
}));

export default useStyles;
