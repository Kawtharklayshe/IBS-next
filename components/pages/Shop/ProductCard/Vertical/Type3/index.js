import { useState } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../../Redux/slices/cartSlice/aysncActions";
import { Typography, Box, Button } from "@mui/material";
import useStyles from "./style";

export default function ProductCard({ theme, product }) {
  const classes = useStyles();
  let { t } = useTranslation("common");
  const Router = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  //Function When Click on (button : Add To Cart)
  const handleAddToCart = (itemId, qty) => {
    setLoading(true);
    dispatch(
      addToCart({
        body: {
          amount: qty,
          itemId,
        },
        locale: Router.locale,
        setLoading,
      })
    );
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.ImageContainer}>
        <img className={classes.productImage} src={product.image} />
      </Box>
      <Box className={classes.TextContainer}>
        <Typography
          variant="h6"
          component="h6"
          className={classes.productTitle}
        >
          {" "}
          {product?.name}
        </Typography>
        <Typography variant="p" component="p" className={classes.priceTitle}>
          {" "}
          {product?.price}
        </Typography>
        <Button
          onClick={() => handleAddToCart(product.id, 1)}
          className={classes.productBtn}
        >
          {t("Add To Cart")}
        </Button>
      </Box>
    </Box>
  );
}
