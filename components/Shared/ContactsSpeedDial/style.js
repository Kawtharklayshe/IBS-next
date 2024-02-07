import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    position: "fixed",
    zIndex: "10",
    right: theme.direction == "rtl" ? "unset" : "1%",
    left: theme.direction == "rtl" ? "1%" : "unset",
    bottom: "1%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  // innerContainer class
  innerContainer: {
    transform: "translate(0, 0%)",
    flexGrow: 1,
  },
  // Scroll Up icon class
  scrollUpIcon: {
    display: "none !important",
    marginTop: "4px",
    cursor: "pointer",
    borderRadius: "50%",
    backgroundColor: theme.palette.onPrimary.main,
    color: theme.palette.primary.main,
    width: "56px !important",
    height: "56px !important",
    "&:hover": {
      backgroundColor: theme.palette.onPrimary.main + "a5",
    },
  },

  animation: {
    animation: "$animateTranslate  linear 1s",
    animationFillMode: "forwards",
    "& $scrollUpIcon": {
      display: "inline-block !important",
    },
  },

  "@keyframes animateTranslate": {
    "0%": {
      transform: "translate(0, 10%)",
    },

    "50%": {
      transform: "translate(0, 5%)",
    },

    "100%": {
      transform: "translate(0, 0%)",
    },
  },

  // Chatting Button class
  chattingButton: (props) => ({
    position: "relative",
    "&:before": {
      content: `"${props.messageCount > 0 ? props.messageCount : ""}"`,
      position: "absolute",
      zIndex: 888,
      top: "-10px",
      left: "-10px",
      minWidth: "22px",
      minHeight: "22px",
      borderRadius: "50%",
      backgroundColor: props.messageCount > 0 ? "red" : "transparent", // it's important to make it transparent when there is no unread messages
      color: theme.palette.background.main,
      fontSize: "12px",
      display: "grid",
    },
  }),
}));

export default useStyles;
