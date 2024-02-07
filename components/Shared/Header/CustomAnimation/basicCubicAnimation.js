import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    userSelect: "none",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    cursor: "pointer",
    paddingTop: "9px",
    paddingBottom: "9px",
    borderRadius: "2px",

    "&:after": {
      content: "''",
      position: "absolute",
      bottom: "0px",
      height: "2px",
      backgroundColor: theme.palette.primary.main,
      visibility: "hidden",
      transform: "scaleX(0)",
      transition: "all 0.3s cubic-bezier(0.57, -0.41, 0.69, 1.9)",
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
    },

    "&:hover:after": {
      visibility: "visible",
      transform: "scaleX(1)",
    },

    "& span.iconText": {
      color: `${theme.palette.onBackground.main}`,
      fontWeight: "bold",
    },

    "&:hover": {
      "& svg": {
        transform: "scale(1.16)",
        transition: "transform 0.5s",
      },

      "& span.iconText": {
        color: `${theme.palette.primary.main}`,
      },
    },

    "& span.icon": {
      height: "25px",
    },
  },
}));

export default useStyles;
