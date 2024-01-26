import Link from "next/link";
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
const MobileMenuBuilder = ({ theme, navList, toggle }) => {
  let { t, lang } = useTranslation("common");
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Fragment>
      {navList.map((item, index) => {
        if (item.type == 2 && item.children.length > 0)
          return (
            <Fragment key={index}>
              <Accordion
                expanded={expanded === `SpecificMenu${index}`}
                onChange={handleChange(`SpecificMenu${index}`)}
                sx={{
                  boxShadow: "none",
                  "& .MuiAccordionSummary-root": {
                    padding: 0,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="SpecificMenu-content"
                  id="SpecificMenu-header"
                >
                  <Typography sx={{ flexShrink: 0 }}>
                    {t(item.label) ?? item.label}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {item.children.map((subItem, ind) => (
                    <Fragment key={ind}>
                      <Link href={subItem.link || "/"}>
                        <Typography
                          variant="subtitle1"
                          component="h2"
                          color="onBackground.dark"
                          sx={{ cursor: "pointer", mb: 1 }}
                          onClick={toggle}
                        >
                          {t(subItem.label) || subItem.label}
                        </Typography>
                      </Link>
                      {ind != item.children.length - 1 && <Divider />}
                    </Fragment>
                  ))}
                </AccordionDetails>
              </Accordion>
              <Divider />
            </Fragment>
          );
        else if (item.type == 1)
          return (
            <Fragment key={index}>
              <Link href={item.link || "/"}>
                <Typography
                  variant="subtitle1"
                  component="h2"
                  color="onBackground.dark"
                  sx={{ cursor: "pointer", my: 1 }}
                  onClick={toggle}
                >
                  {t(item.label) || item.label}
                </Typography>
              </Link>
              {index == 0 && <Divider />}
              {index != navList.length - 1 && index != 0 && <Divider />}
            </Fragment>
          );
      })}
    </Fragment>
  );
};

export default MobileMenuBuilder;
