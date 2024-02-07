import { useState, useRef } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { headerTypes } from "../../../../../constants/enums";
import { Params } from "./config";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Typography, Button, Box, Container } from "@mui/material";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/controller";
import "swiper/css";
import useStyles from "./style";
import ThumbnailPlugin from './type2'

const Slider = ({ data = [], headerType, heroHeight }) => {
  const Router = useRouter();
  const classes = useStyles({ headerType, headerTypes, heroHeight });
  let { t, lang } = useTranslation("common");
  const [activeIndex, setActiveIndex] = useState(1); // for applying animation on slider's text and button
  const swiperbackRef = useRef(null);

  SwiperCore.use([Navigation, Pagination, Autoplay]);

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
    <Box className={classes.root}>
      {/* <Swiper
        {...Params}
        ref={swiperbackRef}
        onSlideChange={
          ({ activeIndex, snapIndex, previousIndex, realIndex }) =>
            setActiveIndex(activeIndex) // it's very important for applying animation on text and button
        }
        dir={Router.locale == "ar" ? "rtl" : "ltr"}
        className={classes.swiper}
      >

       
        {data.map((item, i) => (
          <SwiperSlide
            key={item.id}
            dir={Router.locale == "ar" ? "rtl" : "ltr"}
            className={classes.slide}
          >
            <img src={item.images} className={classes.slideImage} />
            <Box className={classes.slideOverlay} />
            <Container maxWidth="false" className={classes.detailsContainer}>
              <Box
                className={`${classes.DetailsInnerContainer} ${
                  activeIndex == 0
                    ? classes.detailsAnimation
                    : activeIndex > data.length
                    ? (activeIndex % data.length) - 1 == i
                      ? classes.detailsAnimation
                      : ""
                    : activeIndex - 1 == i
                    ? classes.detailsAnimation
                    : ""
                }`}
              >
                <Typography
                  variant="h4"
                  componet="h4"
                  className={classes.title}
                >
                  {item?.title}
                </Typography>
                <Typography variant="body1" className={classes.subTitle}>
                  {item?.description}
                </Typography>
                {item?.buttonText && (
                  <Button
                    className={classes.button}
                    onClick={() => window.open(item?.buttonUrl, "_blank")}
                  >
                    {item?.buttonText}
                  </Button>
                )}
              </Box>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper> */}
      <ThumbnailPlugin />
    </Box>
  );
};

export default Slider;
