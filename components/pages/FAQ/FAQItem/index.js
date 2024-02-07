import { useState } from "react";
import { Collapse, Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import useStyles from "./style";

function FAQItem({ data }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box className={classes.faqContainer} onClick={handleClick}>
      <Box className={classes.boxContainer}>
        <Typography variant="h6" component="h6" className={classes.question}>
          {data?.question}
        </Typography>
        {open ? <RemoveIcon /> : <AddIcon />}
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box className={classes.ContaienrInCollapse}>
          <Typography variant="p" component="p" className={classes.answer}>
            {data?.answer}
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
}
export default FAQItem;
