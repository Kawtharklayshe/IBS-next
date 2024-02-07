import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    display: "flex",
    margin: "0px 16px !important",
    fontSize: "16px",
    padding: "10px",
    textAlign: "center",
    fontWeight: "bold !important",
    whiteSpace: "nowrap",
    zIndex: 1,
    color: theme.palette.primary.main,
    backgroundColor: "transparent",
    border: "1px solid",
    borderColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: `${theme.palette.primary.main} !important`,
      color: theme.palette.onPrimary.main,
      "& $arrowIcon": {
        display: "inline-flex !important",
        transition: "0.4s",
        animation: "$moveArrow",
        animationDuration: "0.8s",
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        margin: "0px 8px",
      },
    },
  },
  // arrow icon
  arrowIcon: {
    display: "none !important",
  },

  // animation for the arrow
  "@keyframes moveArrow": {
    "0%": {
      transform: "translateX(0px)",
    },
    "50%": {
      transform: "translateX(10px)",
    },
    "100%": {
      transform: "translateX(0px)",
    },
  },
}));
export default useStyles;
