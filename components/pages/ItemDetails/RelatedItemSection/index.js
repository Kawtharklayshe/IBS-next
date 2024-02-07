import { useRouter } from "next/router";
import { useRef } from "react";
import useTranslation from "next-translate/useTranslation";
import { Box, Typography, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { realtedItemsParams } from "./config";
import ProductCard from "../../Shop/ProductCard/Vertical/Type1";
import MobileProductCard from "../../Shop/ProductCard/Vertical/Type2";
import useStyles from "./style";
import "swiper/css";

const RelatedItemsSection = ({ items, theme }) => {
  let { t } = useTranslation("common");
  const Router = useRouter();
  const classes = useStyles();
  const swiperRef = useRef(null);
  const goNext = (swiperRef) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const goPrev = (swiperRef) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <Box>
      <Typography variant="h5" component="h5" className={classes.title}>
        {t("Related Items")}
      </Typography>
      <Box className={classes.swiperSectionContainer}>
        <Swiper
          {...realtedItemsParams}
          modules={[Pagination]}
          ref={swiperRef}
          dir={Router.locale == "ar" ? "rtl" : "ltr"}
          className={classes.swiperClass}
        >
          {items?.map((product, index) => {
            return (
              <SwiperSlide
                dir={Router.locale == "ar" ? "RTL" : "LTR"}
                key={index}
              >
                <ProductCard product={product} theme={theme} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
      <Box className={classes.mobileSectionContainer}>
        <Grid container>
          {items?.map((product, index) => (
            <Grid
              item
              xs={6}
              key={index}
              className={classes.mobileItemContainer}
            >
              <MobileProductCard product={product} theme={theme} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default RelatedItemsSection;
