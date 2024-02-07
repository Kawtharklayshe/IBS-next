import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Root class
  root: {
    margin: "0px 4px !important",
    fontWeight: "400 !important",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  // List Item Icon class
  listItemIcon: {
    margin: "0px 4px !important",
    fontSize: "10px !important",
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
