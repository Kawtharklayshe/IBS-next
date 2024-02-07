import React from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Params } from "./config";
import { Box, Typography } from "@mui/material";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/controller";
import "swiper/css";
import useStyles from "./style";

const BrandsSection = ({ data }) => {
  const { t, lang } = useTranslation("common");
  const Router = useRouter();
  const classes = useStyles();
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return (
    <Box className={classes.root}>
      <Typography variant="h4" component="h4" className={classes.title}>
        {t("devices_title_2")}
      </Typography>
      <Swiper
        {...Params}
        dir={Router.locale == "ar" ? "rtl" : "ltr"}
        className={classes.swiperRoot}
      >
        {data?.map((brand, index) => {
          return (
            <SwiperSlide
              dir={Router.locale == "ar" ? "RTL" : "LTR"}
              key={index}
              className={classes.slider}
            >
              <img
                src={brand.image}
                className={classes.image}
                alt="brandImage"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default BrandsSection;
