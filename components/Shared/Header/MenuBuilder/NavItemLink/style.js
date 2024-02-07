import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Nav Item Title class
  navItemTitle: {
    cursor: "pointer",
    whiteSpace: "nowrap",
    margin: "10px !important",
    color: "#A1A8A8",
    borderBottom: "2px solid transparent !important",
    fontFamily: "Roboto !important",
    fontWeight: "500 !important",
    lineHeight: "25px !important",
    fontSize: "0.85rem",
    "&:hover": {
      borderColor: `${theme.palette.primary.main} !important`,
      color: theme.palette.onBackground.light,
      transition: ".9s",
    },
  },
}));

export default useStyles;
