import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    color: theme.palette.onBackground.dark,
    cursor: "pointer",
  },
}));

export default useStyles;
