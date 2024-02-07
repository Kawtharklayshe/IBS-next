import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  //FAQ Container
  faqContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  //Box Container
  boxContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px !important",
    padding: "0px 20px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme.palette.onCard.main,
    backgroundColor: theme.palette.card.main,
    boxShadow: "0px 3px 13px rgba(0, 0, 0, 0.24)",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.onPrimary.main,
      cursor: "pointer",
    },
  },

  //Question
  question: {
    fontWeight: "bold",
    borderRadius: "3px",
    padding: "12px 0px 16px",
    webkitTransition: "0.5s",
    transition: "0.5s",
    color: theme.palette.onCard.main,
  },

  //Container In Collapse
  ContaienrInCollapse: {
    backgroundColor: theme.palette.card.main,
    boxShadow: "0px 3px 13px rgba(0, 0, 0, 0.24)",
  },

  //Answer
  answer: {
    padding: "15px 20px",
    fontSize: "18px",
    lineHeight: "28px",
    color: theme.palette.onCard.main,
  },
}));

export default useStyles;
