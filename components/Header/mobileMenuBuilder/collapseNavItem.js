import Link from "next/link";
import { Fragment, useState } from "react";
import {
  Typography,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SingleNavItem from "./singleNavItem";
const CollapseNavItem = ({ navItem, toggle }) => {
  // navItem properties : {name, title, subTitle, link, children}
  const { title, link, children } = navItem;
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Accordion
      expanded={expanded === `SpecificMenu${link}`}
      onChange={handleChange(`SpecificMenu${link}`)}
      sx={{
        boxShadow: "none",
        "& .MuiAccordionSummary-root": {
          padding: 0,
        },
        /// Important to remove auto divider when there are two or more accordions in one list
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="SpecificMenu-content"
        id="SpecificMenu-header"
      >
        <Link href={link || "/"}>
          <Typography sx={{ flexShrink: 0 }} onClick={toggle}>
            {title}
          </Typography>
        </Link>
      </AccordionSummary>
      <AccordionDetails>
        {children.map((subItem, ind) => (
          <Fragment key={ind}>
            {subItem.children.length == 0 ? (
              <SingleNavItem navItem={subItem} toggle={toggle} />
            ) : (
              <CollapseNavItem
                identifier={ind}
                navItem={subItem}
                toggle={toggle}
              />
            )}
            {ind != children.length - 1 && <Divider sx={{ my: 1 }} />}
          </Fragment>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default CollapseNavItem;
