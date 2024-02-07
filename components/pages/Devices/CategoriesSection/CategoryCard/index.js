import { useRouter } from "next/router";
import { Typography, Box } from "@mui/material";
import useStyles from "./style";

const CategeoryCard = ({ category }) => {
  const router = useRouter();
  const classes = useStyles();

  const handleNavigate = () => {
    if (category.childrenCategories.length > 0)
      router.push(`/categories/${category.slugName}`);
    else router.push(`/shop?catId=${category.id}`);
  };
  return (
    <Box className={classes.root} onClick={handleNavigate}>
      <img
        src={category?.image}
        alt="categoryImage"
        className={classes.categoryImage}
      />
      <Box className={classes.overlayContainer}>
        <Typography
          variant="h6"
          component="h6"
          className={classes.categoryTitle}
        >
          {category?.name}
        </Typography>
      </Box>
    </Box>
  );
};
export default CategeoryCard;
