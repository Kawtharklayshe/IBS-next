import { useRouter } from "next/router";
import { useState } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SingleCatItem from "../SingleCatItem";
import useStyles from "./style";

const CollapseCatItem = ({ item, toggle }) => {
  const router = useRouter();
  // item properties : {name, id, slugName, childrenCategories,...}
  const { name, id, childrenCategories } = item;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClick = (item) => {
    router.push(`/categories/${item.slugName}`);
    toggle();
  };
  return (
    <Accordion
      expanded={expanded === `SpecificMenu${id}`}
      onChange={handleChange(`SpecificMenu${id}`)}
      className={classes.root}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="SpecificMenu-content"
        id="SpecificMenu-categories"
      >
        <Typography className={classes.accordionTitle} onClick={handleClick}>
          {name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {childrencategories?.map((subItem, ind) =>
          subItem.childrenCategories.length == 0 ? (
            <SingleCatItem key={ind} item={subItem} toggle={toggle} />
          ) : (
            <CollapseCatItem key={ind} item={subItem} toggle={toggle} />
          )
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default CollapseCatItem;
