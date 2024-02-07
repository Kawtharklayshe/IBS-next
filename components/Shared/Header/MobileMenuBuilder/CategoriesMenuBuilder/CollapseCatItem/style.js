import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Root class
  root: {
    boxShadow: "none !important",
    "& .MuiAccordionSummary-root": {
      padding: "0px !important",
    },
    "&:before": {
      opacity: "0 !important",
      height: "0px !important",
    },
  },
  // Accordion title class
  accordionTitle: {
    flexShrink: 0,
  },
}));

export default useStyles;
