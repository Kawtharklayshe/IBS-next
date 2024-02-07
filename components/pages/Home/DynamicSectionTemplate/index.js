import { useRouter } from "next/router";
import React from "react";
import SwiperCore, {
  Navigation,
  EffectCoverflow,
  Pagination,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Params } from "./config";
import { Box, Container, Typography } from "@mui/material";
import ProductCard from "../../Shop/ProductCard/Vertical/Type1";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/controller";
import "swiper/css";
import useStyles from "./style";

const DynamicSection = ({ data, theme }) => {
  const Router = useRouter();
  const classes = useStyles({ backgroundImage: data.detail.backgroundImage });
  SwiperCore.use([Navigation, EffectCoverflow, Pagination, Autoplay]);
  return (
    <Box
      data-aos="fade-right"
      data-aos-duration="600"
      data-aos-easing="ease-out"
      className={classes.root}
    >
      <Container maxWidth="false" className={classes.innerContainer}>
        <Typography variant="h6" component="h6" className={classes.title}>
          {data.detail.title}
        </Typography>
        <Typography variant="subtitle1" className={classes.subTitle}>
          {data.detail.subTitle}
        </Typography>
        <Swiper
          {...Params}
          dir={Router.locale == "ar" ? "rtl" : "ltr"}
          className={classes.swiperRoot}
        >
          {data.items.map((product, index) => {
            return (
              <SwiperSlide
                dir={Router.locale == "ar" ? "RTL" : "LTR"}
                key={index}
                className={classes.slider}
              >
                <ProductCard product={product} theme={theme} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Box>
  );
};

export default DynamicSection;
