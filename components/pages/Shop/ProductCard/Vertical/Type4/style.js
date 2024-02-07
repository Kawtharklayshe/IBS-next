import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  //The root class
  root: {
    background: theme.palette.card.main,
    border: `1px solid ${theme.palette.card.main}`,
    borderRadius: theme.shape.cardRadius,
    display: "flex",
    flexDirection: "column",
    padding: "16px !important",
    alignItems: "center",
    width: "100%",
    transition: ".5s",
    overflow: "hidden !important",
    "&:hover": {
      boxShadow: `0 0 24px ${theme.palette.onCard.main}`,
      // boxShadow: theme.shape.cardElevation,
    },
  },

  //Container of the image
  imgContainer: {
    cursor: "pointer",
  },

  //The Image
  image: {
    width: "100%",
    height: "224px",
  },

  //Box That have all text (Text Container)
  TextContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  // product Title class
  productTitle: {
    color: theme.palette.onCard.dark,
    display: "-webkit-box !important",
    "-webkit-line-clamp": "2 !important",
    "-webkit-box-orient": "vertical !important",
    textOverflow: "ellipsis !important",
    overflow: "hidden !important",
    minHeight: "64px",
  },
  //Description
  description: {
    color: theme.palette.onCard.dark,
    display: "-webkit-box !important",
    "-webkit-line-clamp": "3 !important",
    "-webkit-box-orient": "vertical !important",
    textOverflow: "ellipsis !important",
    overflow: "hidden !important",
    wordBreak: "break-word",
  },

  //Price Title
  priceTitle: {
    fontWeight: "bold !important",
  },

  //Box with Cart Icon and Rating
  ratingAndCartContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  //Cart Icon
  cartIcon: {
    fill: "gray !important",
    width: "30px !important",
    height: "30px !important",
    cursor: "pointer",
    "&:hover": {
      fill: `${theme.palette.primary.main} !important`,
      transition: ".5s",
    },
  },
}));

export default useStyles;
