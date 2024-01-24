import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    opacity: 0,
    animation: "$animateHeader 0.4s ease-in 0.2s 1",
    animationFillMode: "forwards",
  },

  "@keyframes animateHeader": {
    "0%": {
      opacity: 1,
      transform: "translate(0, -100%)",
    },

    "100%": {
      opacity: 1,
      transform: "translate(0, 0%)",
    },
  },
}));

export default useStyles;
