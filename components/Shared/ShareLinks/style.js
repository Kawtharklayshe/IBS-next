import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Root class
  root: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    flexWrap: "wrap",
  },
  // Share Link Icon class
  icon: {
    color: theme.palette.primary.main,
    cursor: "pointer",
    fontSize: "32px !important",
  },
}));

export default useStyles;
