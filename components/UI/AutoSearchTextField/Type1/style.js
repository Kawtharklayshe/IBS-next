import { makeStyles, styled } from "@mui/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";

export const Label = styled("label")({
  display: "block",
});

export const Input = styled("input")(({ theme }) => ({
  width: 200,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.getContrastText(theme.palette.background.paper),
}));

export const Listbox = styled("ul")(({ theme }) => ({
  minWidth: "100%",
  margin: 0,
  padding: "4px",
  zIndex: 999,
  position: "absolute",
  listStyle: "none",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "8px",
  overflow: "auto",
  maxHeight: 250,
  [`& li.${autocompleteClasses.focused}`]: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
}));

export const SearchListItem = styled("li")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  fontSize: "18px",
}));

const useStyles = makeStyles((theme) => ({
  // Root class
  root: {
    position: "relative !important",
    flexGrow: 1,
    margin: "4px 8px",
  },
  // Text field class
  textInput: {
    border: "1px solid !important",
    width: "100%",
    borderColor: `${theme.palette.primary.main} !important`,
    borderRadius: "8px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      height: "35px",
      color: theme.palette.onBackground.dark,
      "& fieldset": {
        border: "none",
      },
    },
  },
  // List item  container class
  listItemContainer: {
    display: "flex",
    alignItems: "center",
  },
  // List item image class
  listItemImage: {
    width: "40px",
    height: "40px",
    objectFit: "scale-down",
  },
  // list item details container class
  listItemDetailsContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "0px 8px",
  },
  // List item title class
  listItemTitle: {
    margin: "8px 0px !important",
  },
  // List itemm subtitle class
  listItemSubTitle: {
    color: theme.palette.onCard.light,
    margin: "0px 8px !important",
  },
  // Search icon class
  searchIcon: {
    color: theme.palette.primary.main,
    fontSize: "18px !important",
    margin: "0px 8px",
  },
}));

export default useStyles;
