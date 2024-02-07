import { makeStyles } from "@mui/styles";

// Custom Aniamtion for Hero section
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",

    "& div.animatedHero": {
      position: "relative",
      height: "100%",

      "& div.first": {
        position: "absolute",
        transform: "translate(0px, 100vh)",
        width: "100%",
        height: "100%",
        animation: "$leftUpfirst 0.5s ease-out 1",
        animationFillMode: "forwards",
      },

      "& div.second": {
        position: "absolute",
        transform: "translate(0px, 120vh)",
        width: "100%",
        height: "100%",
        animation: "$leftUpSecond 0.6s  ease-out 1",
        animationFillMode: "forwards",
      },

      "& div.third": {
        transform: "translate(0px, 130vh)",
        width: "100%",
        height: "100%",
        animation: "$leftUpThird 0.7s  ease-out 1",
        animationFillMode: "forwards",
      },

      "& div.heroSection": {
        width: "100%",
        opacity: 0,
        animation: "$animateBackground 0.7s ease-out 1",
        animationFillMode: "forwards",
      },
    },
  },

  "@keyframes leftUpfirst": {
    "0%": {
      transform: "translate(0px, 100vh)",
    },

    "100%": {
      transform: "translate(0px, 0vh)",
    },
  },

  "@keyframes leftUpSecond": {
    "0%": {
      transform: "translate(0px, 110vh)",
    },

    "100%": {
      transform: "translate(0px, 0vh)",
    },
  },

  "@keyframes leftUpThird": {
    "0%": {
      transform: "translate(0px, 120vh)",
    },

    "100%": {
      transform: "translate(0px, 0vh)",
    },
  },

  "@keyframes animateBackground": {
    "0%": {
      transform: "translate(0px, 130vh)",
      opacity: 0,
    },
    "70%": {
      opacity: 0,
    },
    "100%": {
      transform: "translate(0px, 0vh)",
      opacity: 1,
    },
  },
}));

export default useStyles;
