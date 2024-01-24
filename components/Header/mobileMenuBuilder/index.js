import useTranslation from "next-translate/useTranslation";
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
import CollapseNavItem from "./collapseNavItem";

const MobileMenuBuilder = ({ theme, navList, toggle, categories }) => {
  let { t, lang } = useTranslation("common");
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderNavMenu = navList.map((navItem, index) => (
    <Fragment key={index}>
      {navItem.children.length == 0 ? (
        <SingleNavItem navItem={navItem} toggle={toggle} />
      ) : (
        <CollapseNavItem navItem={navItem} toggle={toggle} />
      )}
      {index != navList.length - 1 && <Divider sx={{ my: 1 }} />}
    </Fragment>
  ));

  return <Fragment>{renderNavMenu}</Fragment>;
};

export default MobileMenuBuilder;
