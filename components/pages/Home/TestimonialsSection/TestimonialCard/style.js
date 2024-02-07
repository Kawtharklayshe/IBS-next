import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "10px !important",
    position: "relative",
    margin: "4px",
    columnGap: "20px",
    border: "2px solid transparent",
    minWidth: "359.95px",
    height: "256px",
    background: theme.palette.card.main,
    borderRadius: `${theme.shape.cardRadius} !important`,
    boxShadow: `0px 0px ${theme.shape.cardElevation}px`,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      "& $commentContent": {
        color: theme.palette.onPrimary.main,
      },
      "& $personTitle": {
        color: theme.palette.onPrimary.main,
      },
    },
  },
  // Comment content class
  commentContent: {
    margin: "0px 5px 0px !important",
    padding: "0px 20px",
    color: theme.palette.onCard.main,
    borderLeftWidth: "1px",
    borderLeftStyle: "solid",
    borderLeftColor: theme.palette.primary.main,
    // overflow
    display: "-webkit-box !important",
    "-webkit-line-clamp": "4 !important",
    "-webkit-box-orient": "vertical !important",
    textOverflow: "ellipsis !important",
    overflow: "hidden !important",
  },
  // Person info container class
  personInfoContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "40px",
  },
  // Person image class
  personImage: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: theme.palette.background.main,
  },
  // Person title class
  personTitle: {
    color: theme.palette.primary.main,
    margin: "0px !important",
    padding: "0px 20px !important",
  },
  // Person position class
  personPosition: {
    color: theme.palette.onCard.light,
    margin: "3px 0px !importannt",
    padding: "0px 20px !important",
  },
}));

export default useStyles;
