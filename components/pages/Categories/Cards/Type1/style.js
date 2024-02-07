import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Root class
  root: {
    color: theme.palette.onCard.main,
    backgroundColor: theme.palette.card.main,
    width: "100%",
    height: "450px",
    borderRadius: "5px",
    overflow: "hidden",
    padding: "0px 0px 15px 0px",
    boxShadow: "0 3px 6px rgb(0 0 0 / 11%)",
  },
  // Image Container class
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 0 15px 0",
    width: "100%",
    height: "56%",
    position: "relative",
    overflow: "hidden",
  },
  // Image class
  imageClass: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    "&:hover": {
      transform: "scale(1.2)",
      transition: "transform 0.4s ease",
    },
  },
  // Title class
  title: {
    color: theme.palette.onCard.dark,
    paddingLeft: "15px",
    paddingRight: "15px",
    // overflow text
    display: "-webkit-box !important",
    "-webkit-line-clamp": "2 !important",
    "-webkit-box-orient": "vertical !important",
    textOverflow: "ellipsis !important",
    overflow: "hidden !important",
    height: "65px !important",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "28px",
  },
  // Description class
  description: {
    color: theme.palette.onCard.light,
    margin: "10px 15px !important",
    overflow: "hidden",
    paddingLeft: 2,
    paddingRight: 2,
    // overflow text
    display: "-webkit-box !important",
    "-webkit-line-clamp": "3 !important",
    "-webkit-box-orient": "vertical !important",
    textOverflow: "ellipsis !important",
    overflow: "hidden !important",
  },
  // Card Footer class
  cardFooter: {
    height: "40px",
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
    paddingLeft: theme.direction === "ltr" ? "15px" : "unset",
    paddingRight: theme.direction === "ltr" ? "unset" : "15px",
    background: "#F9F9F9",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:after": {
      content: "''",
      backgroundColor: theme.palette.primary.main,
      width: 0,
      height: "100%",
      position: "absolute",
      right: theme.direction === "ltr" ? "30px" : "100%",
      left: theme.direction === "ltr" ? "100%" : "30px",
      top: 0,
      bottom: 0,
      borderRadius: "20px",
      zIndex: 1,
    },
    "&:hover:after": {
      animation: "$footerAnimation 0.7s 1",
      animationFillMode: "forwards",
    },
    "&:hover $footerTitle": {
      color: theme.palette.primary.main,
    },
  },
  // Footer title
  footerTitle: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "28px",
    zIndex: 2,
    color: theme.palette.dividerColor,
    transition: "color 1.2s",
  },
  // Footer icon container class
  footerIconContainer: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: theme.direction === "ltr" ? 0 : "unset",
    left: theme.direction === "ltr" ? "unset" : 0,
    zIndex: 2,
    background: theme.palette.primary.main,
    transition: "width 0.7s",
  },
  // Footer icon class
  footerIcon: {
    color: theme.palette.onPrimary.main,
    transform: theme.direction === "ltr" ? "rotate(0deg)" : "rotate(180deg)",
  },

  // Footer animation function
  "@keyframes footerAnimation": {
    "0%": {
      width: "0px",
    },
    "100%": {
      width: "100%",
      left: theme.direction === "ltr" ? "0" : "unset",
      right: theme.direction === "ltr" ? "unset" : "0",
    },
  },
}));

export default useStyles;
