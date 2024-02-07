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
import SingleNavItem from "../SingleNavItem";
import useStyles from "./style";

const CollapseNavItem = ({ navItem, toggle }) => {
  // navItem properties : {name, title, subTitle, link, children}
  const { title, link, children } = navItem;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Accordion
      expanded={expanded === `SpecificMenu${link}`}
      onChange={handleChange(`SpecificMenu${link}`)}
      className={classes.accordionRoot}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="SpecificMenu-content"
        id="SpecificMenu-header"
      >
        <Link href={link || "/"}>
          <Typography className={classes.accordionTitle} onClick={toggle}>
            {title}
          </Typography>
        </Link>
      </AccordionSummary>
      <AccordionDetails>
        {children.map((subItem, ind) =>
          subItem.children.length == 0 ? (
            <Fragment key={ind}>
              <SingleNavItem navItem={subItem} toggle={toggle} />
              {ind != children.length - 1 && (
                <Divider className={classes.divider1} />
              )}
            </Fragment>
          ) : (
            <Fragment key={ind}>
              <CollapseNavItem
                identifier={ind}
                navItem={subItem}
                toggle={toggle}
              />
              {ind != children.length - 1 && (
                <Divider className={classes.divider2} />
              )}
            </Fragment>
          )
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default CollapseNavItem;
