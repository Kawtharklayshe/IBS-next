import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  //Video Card Box For All Content
  videoCard: {
    color: theme.palette.onCard.main,
    backgroundColor: theme.palette.card.main,
    boxShadow: `0px 0px ${theme.shape.cardElevation}px`,
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: "15px",
    paddingRight: "15px",
    color: theme.palette.onCard.dark,
    height: "420px",
    padding: "15px",

    "&:hover": {
      boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.3)",
    },
  },
  //Styling For Title
  overFlowText: {
    marginTop: "10px",
    paddingLeft: "15px",
    paddingRight: "15px",
    color: theme.palette.onCard.light,
    display: "-webkit-box !important",
    webkitLineClamp: "2 !important",
    webkitBoxOrient: "vertical !important",
    textOverflow: "ellipsis !important",
    overflow: "hidden !important",
    height: "65px !important",
  },
  //Styling For SubTitle
  overFlowTextBasic: {
    display: "-webkit-box !important",
    webkitLineClamp: "4 !important",
    webkitBoxOrient: "vertical !important",
    textOverflow: "ellipsis !important",
    overflow: "hidden !important",
  },
  //iframe Styling
  iframeWrapper: {
    marginTop: "20px",
    width: "100%",
    height: "250px",
  },
}));

export default useStyles;
