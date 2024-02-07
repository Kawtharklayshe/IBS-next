import React from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import StarRatings from "react-star-ratings";
import {
  Grid,
  Box,
  FormControl,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Divider,
  TextField,
  Button,
  Chip,
  Avatar,
} from "@mui/material";
import PriceRangeSlider from "../PriceRangeSlider";
import useStyles from "./style";

const FiltersSection = ({
  theme,
  onFilter,
  onReset,
  priceRangeFilter,
  setPriceRangeFilter,
  categoriesOptions = [],
  categoryIDFilter,
  setCategoryIdFilter,
  manufacturesOptions = [],
  manufactureIDFilter,
  setManufactureIdFilter,
  originsOptions = [],
  originIDFilter,
  setOriginIdFilter,
  brandsOptions = [],
  brandIDFilter,
  setBrandIdFilter,
  ratingsOptions = [],
  ratingsFilter,
  setRatingsFilter,
}) => {
  let { t, lang } = useTranslation("common");
  const router = useRouter();
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h6" component="h6" className={classes.title}>
        {t("Filters")} :
      </Typography>
      <Grid container className={classes.priceSectionContainer}>
        <Typography variant="subtitle1" className={classes.priceTitle}>
          {t("Price Range")}
        </Typography>
        <Grid item xs={12} className={classes.priceSliderContainer}>
          <PriceRangeSlider
            priceRange={priceRangeFilter}
            setPriceRange={setPriceRangeFilter}
            min={0}
            max={20000}
            dir={router.locale == "ar" ? "rtl" : "ltr"}
          />
        </Grid>
        <Grid item xs={12} className={classes.priceFormContainer}>
          <TextField
            id="priceMin"
            variant="outlined"
            size="small"
            value={priceRangeFilter[0]}
            className={classes.priceInput}
            onChange={(e) => {
              if (e.target.value >= 1 && e.target.value < priceRangeFilter[1])
                setPriceRangeFilter([e.target.value, priceRangeFilter[1]]);
            }}
          />
          <TextField
            id="priceMax"
            variant="outlined"
            size="small"
            value={priceRangeFilter[1]}
            className={classes.priceInput}
            onChange={(e) => {
              if (
                e.target.value >= priceRangeFilter[0] &&
                e.target.value <= 20000
              )
                setPriceRangeFilter([priceRangeFilter[0], e.target.value]);
            }}
          />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <FormControl>
        <FormLabel
          id="categories-radio-buttons-group-label-target"
          className={classes.filterTitle}
        >
          {t("Category Filter")}
        </FormLabel>
        <RadioGroup
          aria-labelledby="categories-radio-buttons-group-label-target"
          defaultValue={categoryIDFilter}
          value={categoryIDFilter}
          onChange={(e) => setCategoryIdFilter(e.target.value)}
          name="categoryId"
        >
          {categoriesOptions.map((option) => {
            if (option.label)
              return option.options.map((child) => (
                <FormControlLabel
                  key={child.label}
                  value={child.value}
                  control={<Radio />}
                  label={`${option.label} - ${child.label}`}
                  className={classes.filterOptionTitle}
                />
              ));
            else
              return option.options.map((child) => (
                <FormControlLabel
                  key={child.label}
                  value={child.value}
                  control={<Radio />}
                  label={child.label}
                  className={classes.filterOptionTitle}
                />
              ));
          })}
        </RadioGroup>
      </FormControl>
      <Divider className={classes.divider} />
      <FormControl>
        <FormLabel
          id="manufactures-radio-buttons-group-label"
          className={classes.filterTitle}
        >
          {t("Manufacture Filter")}
        </FormLabel>
        <RadioGroup
          aria-labelledby="manufactures-radio-buttons-group-label"
          defaultValue={manufactureIDFilter}
          value={manufactureIDFilter}
          onChange={(e) => setManufactureIdFilter(e.target.value)}
          name="manufactureId"
        >
          {manufacturesOptions.map((option) => (
            <FormControlLabel
              key={option.label}
              value={option.value}
              control={<Radio />}
              label={option.label}
              className={classes.filterOptionTitle}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Divider className={classes.divider} />
      <FormControl>
        <FormLabel
          id="origins-radio-buttons-group-label"
          className={classes.filterTitle}
        >
          {t("Origin Filter")}
        </FormLabel>
        <RadioGroup
          aria-labelledby="origins-radio-buttons-group-label"
          defaultValue={originIDFilter}
          value={originIDFilter}
          onChange={(e) => setOriginIdFilter(e.target.value)}
          name="originId"
        >
          {originsOptions.map((option) => (
            <FormControlLabel
              key={option.label}
              value={option.value}
              control={<Radio />}
              label={option.label}
              className={classes.filterOptionTitle}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Divider className={classes.divider} />
      <FormControl>
        <FormLabel
          id="brands-radio-buttons-group-label"
          className={classes.filterTitle}
        >
          {t("Brand Filter")}
        </FormLabel>
        <Box className={classes.chipsContainer}>
          {brandsOptions.map((option) => (
            <Chip
              key={option.label}
              avatar={
                <Avatar
                  alt="Avatar"
                  src={option.avatar}
                  className={classes.chipAvatar}
                />
              }
              label={option.label}
              variant={brandIDFilter === option.value ? "filled" : "outlined"}
              className={classes.filterOptionChip}
              sx={{
                color:
                  brandIDFilter === option.value
                    ? "onPrimary.main"
                    : "primary.main",
                backgroundColor:
                  brandIDFilter === option.value
                    ? "primary.main"
                    : "onPrimary.main",
              }}
              onClick={(e) => setBrandIdFilter(option.value)}
            />
          ))}
        </Box>
      </FormControl>
      <Divider className={classes.divider} />
      <FormControl>
        <FormLabel
          id="ratings-radio-buttons-group-label"
          className={classes.filterTitle}
        >
          {t("Ratings")}
        </FormLabel>
        <RadioGroup
          aria-labelledby="ratings-radio-buttons-group-label"
          value={ratingsFilter}
          onChange={(e) => setRatingsFilter(e.target.value)}
          name="rating"
        >
          {ratingsOptions.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Radio />}
              label={
                <StarRatings
                  rating={option}
                  starRatedColor={theme?.primaryColor}
                  starSelectingHoverColor={theme?.primaryColor}
                  numberOfStars={5}
                  starDimension="16px"
                  starSpacing="1px"
                  name="rating"
                />
              }
              className={classes.filterOptionTitle}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Grid item xs={12} className={classes.buttonsContainer}>
        <Button
          variant="contained"
          className={classes.filterButton}
          onClick={onFilter}
        >
          {t("Filter")}
        </Button>
        <Button
          variant="outlined"
          className={classes.clearButton}
          onClick={onReset}
        >
          {t("Clear filter")}
        </Button>
      </Grid>
    </Box>
  );
};

export default FiltersSection;
