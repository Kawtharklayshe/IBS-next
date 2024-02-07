import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    height: "410px",
    margin: 0,
    textAlign: "center",
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.card.main,
    boxShadow: `0px 0px ${theme.shape.cardElevation}px`,
    borderRadius: `${theme.shape.cardRadius}px`,
    //transform: "translateY(0px)",
    //transition: "0.3s",
    position: "relative",
    verticalAlign: "baseline",
    // "&:hover": {
    //   transform: "translateY(-20px)",
    //   transition: "0.5s",
    // },
  },
  // image container class
  imageContainer: {
    width: "100%",
    height: "180px",
  },
  card:{

    position: "relative"
  },
  CardContent: {
    position: "relative",
    backgroundColor: "transparent"
  },
  CardMedia:{
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    opacity:10,
    width: "40%"
  },
  // image class
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: `${theme.shape.cardRadius}px ${theme.shape.cardRadius}px 0px 0px`,
  },
  // title class
  title: {
    color: theme.palette.onCard.main,
    fontWeight: "bold",
    textTransform: "capitalize",
    margin: "10px auto !important",
    textAlign: "center",
    // overflow
    display: "-webkit-box !important",
    "-webkit-line-clamp": "1 !important",
    "-webkit-box-orient": "vertical !important",
    textOverflow: "ellipsis !important",
    overflow: "hidden !important",
  },
  // description class
  description: {
    color: theme.palette.onCard.light,
    lineHeight: "12px",
    margin: "10px 8px !important",
    textAlign: "center",
    // overflow
    display: "-webkit-box !important",
    "-webkit-line-clamp": "4 !important",
    "-webkit-box-orient": "vertical !important",
    textOverflow: "ellipsis !important",
    overflow: "hidden !important",
  },
  // extra button class
  extraButtonClass: {
    margin: "8px auto !important",
  },
}));

export default useStyles;
