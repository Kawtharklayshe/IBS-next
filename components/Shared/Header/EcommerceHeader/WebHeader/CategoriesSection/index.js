import React from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { uid } from "react-uid";
import { colors } from "./config";
import { Box, Typography } from "@mui/material";
import { List } from "@mui/icons-material";
import MainCategoryNavItem from "./MainCategoryNavItem";
import usePartialAnimiStyles from "../../../CustomAnimation/partialAnimation";
import useStyles from "./style";

const CategoriesSection = ({
  categories,
  isReadyToAnimate,
  animationDelay,
}) => {
  let { t } = useTranslation("common");
  const classes = useStyles();
  const partialAnimiClasses = usePartialAnimiStyles();
  const router = useRouter();

  // Function for calculating appropriate delay for each main category item
  const calculateDelay = (index) => {
    let temp = (index + 1) * 0.04; // we increase the index here by 1 to calculate the delay after the All categories title delay
    const originalDelay = +animationDelay.substr(0, animationDelay.length - 1);
    return `${originalDelay + temp}s`;
  };

  const handleClick = (item) => {
    if (item.childrenCategories.length > 0)
      router.push(`/categories/${item.slugName}`);
    else router.push(`/shop?catId=${item.id}`);
  };

  const handleNavigateToShop = () => {
    router.push("/shop");
  };

  return (
    <Box className={classes.root}>
      <Box
        className={`${classes.allCategoriesContainer} ${
          isReadyToAnimate() ? partialAnimiClasses.root : ""
        }`}
        sx={{ animationDelay: animationDelay }}
        onClick={handleNavigateToShop}
      >
        <List className={classes.listIcon} />
        <Typography className={classes.allCategoriesTitle}>
          {t("All Categories")}
        </Typography>
      </Box>
      {categories?.map((item, index) => (
        <MainCategoryNavItem
          key={uid(item)}
          category={item}
          backgroundColor={colors[index]}
          onClick={handleClick}
          isReadyToAnimate={isReadyToAnimate}
          animationDelay={calculateDelay(index)}
        />
      ))}
    </Box>
  );
};

export default CategoriesSection;
