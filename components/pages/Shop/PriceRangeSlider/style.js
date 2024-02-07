import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    backgroundColor: theme.palette.background.main,
    "& span.MuiSlider-thumb": {
      transform: "translate(0%, -50%)",
    },
  },
}));

export default useStyles;
