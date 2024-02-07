import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Accordion root class
  accordionRoot: {
    boxShadow: "none !important",
    "& .MuiAccordionSummary-root": {
      padding: "0px !important",
    },
    "&:before": {
      opacity: "0 !important",
      height: "0px !important",
    },
  },
  // Divider 1 class
  divider1: {
    margin: "8px 0px !important",
  },
  // Divider 2 class
  divider2: {
    margin: "0px 0px 8px 0px !important",
  },
  // Accordion title class
  accordionTitle: {
    flexShrink: 0,
  },
}));

export default useStyles;
