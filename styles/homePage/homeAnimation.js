import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& div.animatedHero": {
      position: "relative",
      height: "100%",

      "& div.first": {
        position: "absolute",
        // top: "100%",
        transform: "translate(0px, 100vh)",
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.primary.light,
        animation: "$leftUpfirst 0.5s ease-out 1",
        animationFillMode: "forwards",
      },

      "& div.second": {
        position: "absolute",
        // top: "110%",
        transform: "translate(0px, 120vh)",
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.primary.main,
        animation: "$leftUpSecond 0.6s  ease-out 1",
        animationFillMode: "forwards",
      },

      "& div.third": {
        //position: "absolute",
        // top: "120%",
        transform: "translate(0px, 130vh)",
        width: "100%",
        height: "100%",
        backgroundColor: "#D9D9D9",
        animation: "$leftUpThird 0.7s  ease-out 1",
        animationFillMode: "forwards",
      },

      "& div.heroSection": {
        // position: "absolute",
        // top: "120%",
        transform: "translate(0px, 130vh)",
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
