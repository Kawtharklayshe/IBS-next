import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 0,
    right: theme.direction == "rtl" ? "unset" : 0,
    left: theme.direction == "rtl" ? 0 : "unset",
    zIndex: 2000,
    borderRadius: "17px 17px 0px 0px",
    overflow: "hidden",
    width: "320px",
    height: "60vh",
    background: theme.palette.background.main,
    boxShadow: "-20px -12px 24px rgba(36, 36, 36, 0.16)",
    transform: "translate(0, 100%)",
    opacity: 0,

    "&.open": {
      animation: "$chatAnimi 0.15s ease-out 1",
      animationFillMode: "forwards",
    },

    "&.close": {
      animation: "$chatClose 0.15s ease-out 1",
      animationFillMode: "forwards",
    },

    "& div.chatHeader": {
      width: "100%",
      height: "55px",
      backgroundColor: theme.palette.primary.main,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 15px",

      "& span": {
        color: theme.palette.onPrimary.main,
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "21px",
      },

      "& span.close": {
        height: "24px",
        cursor: "pointer",
        transform: "scale(1)",
        transition: "transform 0.2s",
      },

      "& span.close:hover": {
        transform: "scale(1.23)",
      },
    },

    "& ul#messagesArea": {
      position: "relative",
      padding: "10px 10px",
      overflowY: "scroll",
      height: "calc(100% - 105px)",
      margin: 0,
      paddingBottom: "15px",
      listStyleType: "none",

      "& div#status": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.background.main,
        color: theme.palette.primary.main,
        padding: "4px 13px",
        borderRadius: "10px",
        width: "fit-content",
        marginRight: "auto",
        marginLeft: "auto",
        boxShadow: "0 0 11px 9px rgb(0 0 0 / 11%)",
        opacity: 0,
        transform: "translate(-50%, -100%)",
        position: "fixed",
        top: "70px",
        left: "50%",
        fontSize: "15px",
        whiteSpace: "break-spaces",
      },

      "& div#status.open": {
        animation: "$newStateOpen 0.15s ease-out 1",
        animationFillMode: "forwards",
      },

      "& div#status.open.close": {
        animation:
          "$newStateOpen 0.15s ease-out 1, $newStateClose 0.15s ease-out 3s 1",
        animationFillMode: "forwards",
      },

      "& li": {
        width: "fit-content",
        maxWidth: "70%",
        borderRadius: "20px",
        marginBottom: "20px",
        boxShadow: "0 0 11px 9px rgb(0 0 0 / 11%)",
        padding: "7px 17px",
        lineHeight: "20px",
        wordBreak: "break-all",
        display: "flex",
        flexDirection: "column",

        "& span.date": {
          fontSize: "83%",
        },
      },

      "& div#status span": {
        borderTopColor: `${theme.palette.onBackground.main}!important`,
      },
      "& li span.spinner": {
        marginTop: "5px",
        borderTopColor: `${theme.palette.onPrimary.main}!important`,
      },

      "& li span.spinner, & div#status span": {
        display: "inline-block",
        width: "15px",
        height: "15px",
        border: "2px solid transparent",
        borderRadius: " 50%",
        animation: "$spin 0.7s linear infinite",
      },

      "& li.rightMsg": {
        marginLeft: "auto",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.onPrimary.main,
      },

      "& li.enter": {
        transform: "translate(0, 40%)",
        animation: "$enter  0.3s ease-out 1",
        animationFillMode: "forwards",
      },

      "& li.leftMsg": {
        marginRight: "auto",
        backgroundColor: theme.palette.background.main,
        color: theme.palette.onBackground.main,
      },
    },

    "& div.msgInput": {
      display: "flex",
      height: "50px",
      width: "100%",
      position: "absolute",
      bottom: 0,
      boxShadow: "1px -2px 12px rgba(0, 0, 0, 0.12)",
      background: theme.palette.background.main,

      "& div.MuiTextField-root": {
        flex: "1 1 auto",

        "& div.MuiInput-underline": {
          height: "100%",
          paddingLeft: "15px",
        },
      },

      "& div.MuiInput-underline::after, & div.MuiInput-underline::before": {
        content: "unset",
      },

      "& input::placeholder": {
        color: theme.palette.primary.main,
        fontSize: "14px",
        lineHeight: "21px",
      },

      "& button": {
        textTransform: "capitalize",
        color: theme.palette.primary.main,
        fontSize: "14px",
        lineHeight: "21px",
        padding: "0 15px",
      },
    },
  },

  "@keyframes enter": {
    "0%": {
      transform: "translate(0, 40%)",
    },
    "100%": {
      transform: "translate(0, 0)",
    },
  },
  "@keyframes spin": {
    "0%": {
      transform: " rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },

  "@keyframes newStateOpen": {
    "0%": {
      opacity: 0,
      transform: "translate(-50%, -100%)",
    },

    "100%": {
      opacity: 1,
      transform: "translate(-50%, 0%)",
    },
  },

  "@keyframes newStateClose": {
    "0%": {
      opacity: 1,
      transform: "translate(-50%, 0%)",
    },

    "50%": {
      opacity: 0,
    },

    "100%": {
      opacity: 0,
      transform: "translate(-50%, -100%)",
    },
  },

  "@keyframes chatAnimi": {
    "0%": {
      opacity: 1,
      transform: "translate(0, 100%)",
    },

    "100%": {
      opacity: 1,
      transform: "translate(0, 0%)",
    },
  },

  "@keyframes chatClose": {
    "0%": {
      opacity: 1,
      transform: "translate(0, 0%)",
    },

    "100%": {
      opacity: 1,
      transform: "translate(0, 100%)",
    },
  },
}));

export default useStyles;
