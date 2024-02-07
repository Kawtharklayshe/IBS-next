import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { uid } from "react-uid";
import { Box, Collapse, Typography } from "@mui/material";
import {
  ExpandMore,
  ExpandLess,
  FiberManualRecordRounded,
} from "@mui/icons-material";
import SingleCategoryPopoverItem from "../SingleCategoryPopoverItem";
import useStyles from "./style";

const CollapseCategoryPopoverItem = ({ category, onClick }) => {
  let { t, lang } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const classes = useStyles({ isOpen: open }); // passing state to makeStyles hook to use it with conditional styles
  const handleClick = () => setOpen(!open);
  return (
    <Box className={classes.root}>
      <Box className={classes.collapseHeaderContainer}>
        <Typography
          variant="subtitle2"
          className={classes.headerTitle}
          onClick={() => onClick(category)}
        >
          <FiberManualRecordRounded className={classes.listItemIcon} />
          {category.name}
        </Typography>
        {open ? (
          <ExpandLess onClick={handleClick} />
        ) : (
          <ExpandMore onClick={handleClick} />
        )}
      </Box>
      <Collapse in={open} timeout="auto">
        <Box className={classes.collapseContentContainer}>
          <Box className={classes.collapseImageContainer}>
            <img
              src={category.image}
              alt={category.name}
              className={classes.collapseImage}
            />
          </Box>
          {category.childrencategories?.map((child) =>
            child.childrenCategories.length ? (
              <CollapseCategoryPopoverItem
                key={uid(child)}
                category={child}
                onClick={onClick}
              />
            ) : (
              <SingleCategoryPopoverItem
                key={uid(child)}
                category={child}
                onClick={onClick}
              />
            )
          )}
        </Box>
      </Collapse>
    </Box>
  );
};

export default CollapseCategoryPopoverItem;
