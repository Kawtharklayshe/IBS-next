import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    background: "#fcfcfc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: "1000",
  },
  container: {
    height: "50px",
    margin: "0 auto",
    position: "relative",
    width: "434px",
    filter: "url('#goo')",
    "-webkit-filter": "url('#goo')",
  },
  center: {
    backgroundColor: theme.palette?.primary?.main || "#c1c1c1",
    borderRadius: "50%",
    position: "absolute",
    height: "50px",
    marginLeft: "-25px",
    left: "50%",
    width: "50px",
    zIndex: 2,
    animation: "$scaling 6s ease-in-out 0.2s infinite",
  },
  dot: {
    backgroundColor: theme.palette?.primary?.main || "#c1c1c1",
    borderRadius: "50%",
    position: "absolute",
    height: "24px",
    width: "24px",
    top: "50%",
    marginTop: "-12px",
  },
  uno: {
    animation: "$uno 4s cubic-bezier(0.53, 0.38, 0.37, 1) infinite",
    left: 0,
  },
  dos: {
    animation: "$dos 4s cubic-bezier(0.53, 0.38, 0.37, 1) infinite",
    left: "59px",
  },
  tres: {
    animation: "$tres 4s cubic-bezier(0.53, 0.38, 0.37, 1) infinite",
    left: "118px",
  },

  "@keyframes uno": {
    "0%": {
      transform: "translate3d(0, 0, 0)",
    },
    "25%": {
      transform: "translate3d(205px, 0, 0)",
    },
    "50%": {
      transform: "translate3d(292px, 0, 0)",
    },
    "65%": {
      transform: "translate3d(205px, 0, 0)",
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
    },
  },

  "@keyframes dos": {
    "0%": {
      transform: "translate3d(0, 0, 0)",
    },
    "20%": {
      transform: "translate3d(146px, 0, 0)",
    },
    "50%": {
      transform: "translate3d(292px, 0, 0)",
    },
    "70%": {
      transform: "translate3d(146px, 0, 0)",
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
    },
  },

  "@keyframes tres": {
    "0%": {
      transform: "translate3d(0, 0, 0)",
    },
    "15%": {
      transform: "translate3d(88px, 0, 0)",
    },
    "50%": {
      transform: "translate3d(292px, 0, 0)",
    },
    "75%": {
      transform: "translate3d(88px, 0, 0)",
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
    },
  },

  "@keyframes scaling": {
    "0%": {
      transform: "scale(1)",
    },
    "12%": {
      transform: "scale(1.2)",
    },
    "20%": {
      transform: "scale(0.8)",
    },
    "21%": {
      transform: "scale(1.1)",
    },
    "22%": {
      transform: "scale(1)",
    },
    "33%": {
      transform: "scale(1)",
    },
    "45%": {
      transform: "scale(1.2)",
    },
    "53%": {
      transform: "scale(0.8)",
    },
    "54%": {
      transform: "scale(1.1)",
    },
    "55%": {
      transform: "scale(1)",
    },
    "65%": {
      transform: "scale(1)",
    },
    "77%": {
      transform: "scale(1.2)",
    },
    "87%": {
      transform: "scale(0.8)",
    },
    "88%": {
      transform: "scale(1.1)",
    },
    "89%": {
      transform: "scale(1)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
}));

export default useStyles;
