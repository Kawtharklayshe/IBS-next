import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& div.MuiFilledInput-root.MuiFilledInput-underline.MuiInputBase-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-sizeSmall.MuiInputBase-adornedEnd.MuiAutocomplete-inputRoot":
      {
        paddingLeft: theme.direction === "ltr" ? "8px" : "65px",
        paddingRight: theme.direction === "ltr" ? "65px" : "8px",
        backgroundColor: "transparent",
        border: "1px solid rgba(0, 0, 0, 0.23)",
        borderRadius: "4px",
        padding: "5px",

        "&::after, &::before": {
          content: "unset",
        },

        "&:hover": {
          border: "1px solid rgba(0, 0, 0, 1)",
        },

        "& div.MuiAutocomplete-endAdornment": {
          right: theme.direction === "ltr" ? "9px" : "unset",
          left: theme.direction === "ltr" ? "unset" : "9px",
        },
      },
  },
}));

export default useStyles;
