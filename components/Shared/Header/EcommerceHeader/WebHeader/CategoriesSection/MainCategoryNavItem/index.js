import React, { useState, useRef, Fragment } from "react";
import { uid } from "react-uid";
import { Box, Typography, Grid, Popover } from "@mui/material";
import SingleCategoryPopoverItem from "../SingleCategoryPopoverItem";
import CollapseCategoryPopoverItem from "../CollapseCategoryPopoverItem";
import usePartialAnimiStyles from "../../../../CustomAnimation/partialAnimation";
import useStyles from "./style";
const MainCategoryNavItem = ({
  category,
  backgroundColor,
  onClick,
  isReadyToAnimate,
  animationDelay,
}) => {
  const classes = useStyles({
    hoverColor: backgroundColor,
  });
  const partialAnimiClasses = usePartialAnimiStyles();
  const popoverAnchor = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  /// functions for handling popover status wheather it's open or not
  const popoverEnter = ({ currentTarget }) => {
    setIsOpen(true);
  };
  const popoverLeave = ({ currentTarget }) => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      <Box
        ref={popoverAnchor}
        aria-owns={isOpen ? `mouse-over-popover` : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        className={`${classes.root}  ${
          isReadyToAnimate() ? partialAnimiClasses.root : ""
        }`}
        sx={{ animationDelay: animationDelay }}
        onClick={() => onClick(category)}
        onMouseEnter={popoverEnter}
        onMouseLeave={popoverLeave}
      >
        <Box className={classes.categoryImageContainer}>
          <img
            className={classes.categoryImage}
            src={category.image}
            alt="mainCategoryImage"
          />
        </Box>
        <Typography variant="subtitle2" className={classes.categoryTitle}>
          {category.name}
        </Typography>
      </Box>
      {category.childrenCategories.length > 0 && (
        <Popover
          id="mouse-over-popover"
          open={isOpen}
          className={classes.popover}
          classes={{
            paper: classes.popoverContent,
          }}
          anchorEl={popoverAnchor.current}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          PaperProps={{
            onMouseEnter: popoverEnter,
            onMouseLeave: popoverLeave,
          }}
          disableScrollLock
          keepMounted
        >
          <Grid container>
            {category.childrencategories?.map((child) => (
              <Grid
                item
                md={4}
                lg={3}
                className={classes.childColumnContainer}
                key={uid(child)}
              >
                <Typography
                  className={classes.childTitle}
                  variant="subtitle2"
                  onClick={() => onClick(child)}
                >
                  {child.name}
                </Typography>
                <Box className={classes.childImageContainer}>
                  <img
                    src={child.image}
                    alt={child.name}
                    className={classes.childImage}
                  />
                </Box>
                {child.childrencategories?.map((item) =>
                  item.childrenCategories.length ? (
                    <CollapseCategoryPopoverItem
                      key={uid(item)}
                      category={item}
                      onClick={onClick}
                    />
                  ) : (
                    <SingleCategoryPopoverItem
                      key={uid(item)}
                      category={item}
                      onClick={onClick}
                    />
                  )
                )}
              </Grid>
            ))}
          </Grid>
        </Popover>
      )}
    </Fragment>
  );
};

export default MainCategoryNavItem;
