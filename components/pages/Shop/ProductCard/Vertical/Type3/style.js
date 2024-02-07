import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  //root class (box that have all content)
  root: {
    background: theme.palette.onPrimary.main,
    boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.06)",
    width: "293px",
    height: "100%",
  },

  //Box That Has an Image
  ImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "30px",
    paddingBottom: "30px",
    position: "relative",
    background: "#F8F8F8", // gray color
  },

  //The Image
  productImage: {
    width: "200px",
    height: "300px",
  },

  //The Box That Have (Title and price and button)
  TextContainer: {
    textAlign: "center",
    paddingTop: "10px",
  },

  //The Title
  productTitle: {
    color: theme.palette.onCard.dark,
  },

  //The Price
  priceTitle: {
    color: theme.palette.primary.main,
  },
  //The Button
  productBtn: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: `${theme.palette.onPrimary.main} !important`,
    width: "100px",
    height: "30px",
    borderRadius: "22px !important",
    padding: "0px !important",
    minWidth: "125px !important",
    marginBottom: "20px !important",
  },
}));

export default useStyles;
