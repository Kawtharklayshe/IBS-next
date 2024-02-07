import { makeStyles } from "@mui/styles";

const usePartialAnimiStyles = makeStyles((theme) => ({
  root: {
    transform: "translate(0, -40%)",
    opacity: 0,
    animation: "$animateItem 0.25s ease-out 1",
    animationFillMode: "forwards",
  },

  "@keyframes animateItem": {
    "0%": {
      opacity: 0,
      transform: "translate(0, -40%)",
    },

    "40%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
      transform: "translate(0, 0%)",
      borderColor: theme.palette.onPrimary.main,
    },
  },
}));

export default usePartialAnimiStyles;
