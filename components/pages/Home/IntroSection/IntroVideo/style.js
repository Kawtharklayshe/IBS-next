import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    overflow: "hidden",
    position: "relative",
    height: "100%",
  },
  // Play icon container class
  playIconContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: "1",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.onPrimary.main,
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    padding: "13px",
    animation: "$ripple 1.5s linear infinite",
    transition: "all 0.7s ease",
  },

  // Play icon class
  playIcon: {
    color: "grey",
    fontSize: "40px !important",
  },

  // Video player class
  videoPlayer: (props) => ({
    position: "relative",
    width: "100%",
    minHeight: "164px",
    maxHeight: "485px",
    filter: !props.isPlay ? "brightness(0.4)" : "unset",
  }),

  // Animation for paly icon
  "@keyframes ripple": {
    "0%": {
      boxShadow:
        "0 0 0 0 rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.3), 0 0 0 3px rgba(255, 255, 255, 0.3), 0 0 0 5px rgba(255, 255, 255, 0.3)",
    },
    "100%": {
      boxShadow:
        "0 0 0 0 rgba(255, 255, 255, 0.3), 0 0 0 4px rgba(255, 255, 255, 0.3), 0 0 0 20px rgba(255, 255, 255, 0), 0 0 0 30px rgba(255, 255, 255, 0)",
    },
  },
}));

export default useStyles;
