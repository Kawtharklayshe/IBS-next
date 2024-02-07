import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    margin: "0px auto",

    "& div.swiper-wrapper": {
      height: "100%",
      "& div.swiper-slide": {
        width: "100%",
        height: "100%",
      },
    },
  },

  slideContainer: {
    height: "100%",
    paddingLeft: "5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontWeight: "400",
    fontSize: "16px",
  },
  notificationBody: {
    display: "block",
  },
}));

export default useStyles;
