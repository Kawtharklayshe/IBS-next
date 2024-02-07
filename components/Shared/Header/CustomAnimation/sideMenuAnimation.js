import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    transform: "translate(-100%, 0%)",
    animation: "$animateSideMenu 0.5s 1",
    animationFillMode: "forwards",
  },

  "@keyframes animateSideMenu": {
    "0%": {
      transform: "translate(-100%, 0%)",
    },
    "100%": {
      transform: "translate(0, 0%)",
    },
  },
}));

export default useStyles;
