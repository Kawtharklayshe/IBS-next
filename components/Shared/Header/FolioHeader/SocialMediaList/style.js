import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Media icon class
  mediaIcon: (props) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "36px !important",
    border: "0.5px solid",
    borderRadius: "50%",
    padding: "7px",
    marginRight: "4px !important",
    border: "1px solid !important",
    borderColor: theme.palette.primary.main,
    color:
      props.headerType == props.headerTypes.colored // checking of header type first[colored_background,transparent_background]
        ? theme.palette.primary.main
        : props.scrollTop
        ? theme.palette.primary.main
        : "black",
    [theme.breakpoints.up("md")]: {
      marginRight: "8px !important",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
      cursor: "pointer",
    },
  }),
}));

export default useStyles;
