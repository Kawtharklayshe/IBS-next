import Slider from "@mui/material/Slider";
import useStyles from "./style";

const RangeSlider = ({ priceRange, setPriceRange, dir, min, max }) => {
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <Slider
      getAriaLabel={() => "Price range"}
      value={priceRange}
      min={min}
      max={max}
      onChange={handleChange}
      valueLabelDisplay="auto"
      dir={dir}
      className={classes.root}
    />
  );
};

export default RangeSlider;
