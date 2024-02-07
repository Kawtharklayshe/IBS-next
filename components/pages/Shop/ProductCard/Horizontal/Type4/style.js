import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  //The root class
  root: {
    background: theme.palette.card.main,
    border: `1px solid ${theme.palette.card.main}`,
    borderRadius: "4px",
    display: "flex",
    padding: "24px",
    gap: "24px",
    alignItems: "center",
    width: "100%",
    height: "250px",
    transition: ".5s",
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
    width: "150px",
    height: "100px",
  },

  //Box That have all text (Text Container)
  TextContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flexGrow: "1",
  },

  //Description
  description: {
    color: theme.palette.onCard.dark,
    display: "-webkit-box",
    lineClamp: "3",
    boxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  //Price Title
  priceTitle: {
    fontWeight: "bold !important",
  },

  //Icons Contaienr
  icons: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0px 4px",
  },

  //Cart Icon
  cartIcon: {
    fill: "gray !important",
    width: "30px !important",
    height: "30px !important",
    margin: "4px !important",
    cursor: "pointer",
    "&:hover": {
      fill: `${theme.palette.primary.main} !important`,
      transition: ".5s",
    },
  },

  //Heart Icon
  heartIcon: {
    fill: "gray !important",
    width: "30px !important",
    height: "30px !important",
    margin: "4px !important",
    cursor: "pointer",
    "&:hover": {
      fill: `${theme.palette.primary.main} !important`,
      transition: ".5s",
    },
  },
  // Loading icon class
  loadingIcon: {
    margin: "4px !important",
  },
}));

export default useStyles;
