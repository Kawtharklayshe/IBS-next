import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SingleCatItem from "./SingleCatItem";
import CollapseCatItem from "./CollapseCatItem";
import useStyles from "./style";

const CategoriesMenuBuilder = ({ categories, toggleMenu }) => {
  let { t, lang } = useTranslation("common");
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderMenu = categories?.map((catItem, index) =>
    catItem.childrenCategories.length == 0 ? (
      <SingleCatItem key={index} item={catItem} toggle={toggleMenu} />
    ) : (
      <CollapseCatItem key={index} item={catItem} toggle={toggleMenu} />
    )
  );
  return (
    <Accordion
      expanded={expanded === "CategoriesMenu"}
      onChange={handleChange("CategoriesMenu")}
      className={classes.root}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="CategoriesMenu-content"
        id="CategoriesMenu-header"
      >
        <Typography className={classes.categoriesTitle}>
          {t("Categories")}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{renderMenu}</AccordionDetails>
    </Accordion>
  );
};

export default CategoriesMenuBuilder;
