import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.main,
    color: theme.palette.onBackground.main,
    boxShadow: "none !important",
    animation: "$HeaderSide 0.5s linear",
    position: "fixed !important",
    top: "0px",
    width: "100%",
    zIndex: "100",
  },

  "@keyframes HeaderSide": {
    "0%": {
      transform: "translateY(-200px)",
    },
    "100%": {
      transform: "translateY(0px)",
    },
  },
}));

export default useStyles;
