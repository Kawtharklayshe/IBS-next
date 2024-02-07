import React from "react";
import { Typography } from "@mui/material";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import useStyles from "./style";

const SingleCategoryPopoverItem = ({ category, onClick }) => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.root}
      variant="subtitle2"
      onClick={() => onClick(category)}
    >
      <FiberManualRecordRoundedIcon className={classes.listItemIcon} />
      {category.name}
    </Typography>
  );
};

export default SingleCategoryPopoverItem;
