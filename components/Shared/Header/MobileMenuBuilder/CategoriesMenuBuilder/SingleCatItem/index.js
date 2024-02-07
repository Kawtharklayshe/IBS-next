import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import useStyles from "./style";

const SingleCatItem = ({ item, toggle }) => {
  const router = useRouter();
  // item properties : {name, id, slugName, childrenCategories,...}
  const { name, id } = item;
  const classes = useStyles();

  const handleClick = () => {
    router.push(`/shop?catId=${id}`);
    toggle();
  };
  return (
    <Typography
      variant="subtitle1"
      component="h2"
      className={classes.root}
      onClick={handleClick}
    >
      {name}
    </Typography>
  );
};

export default SingleCatItem;
