import { useRef } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Params } from "./config";
import SwiperCore, { Pagination, Autoplay, FreeMode, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Typography, Box, Button } from "@mui/material";
import useStyles from "./style";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/controller";

const AdvanceCarousel = ({ items = [], parentTitle = "" }) => {
  let { t } = useTranslation("common");
  const advancedSwiperRef = useRef(null);
  const Router = useRouter();
  const classes = useStyles();

  //Function To Extract Value from HTML Element
  function convertToPlain(html) {
    if (typeof window === "object") {
      let tempDivElement = document.createElement("div");
      tempDivElement.innerHTML = html;
      return tempDivElement.textContent || tempDivElement.innerText || "";
    }
  }
  SwiperCore.use([EffectFade, Pagination, Autoplay]);

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

  const handleClick = (slugName) => {
    Router.push({
      pathname: `/projects/${slugName}`,
      query: { blog: parentTitle },
    });
  };
  return (
    <Box className={classes.root}>
      <Swiper
        {...Params}
        ref={advancedSwiperRef}
        dir={Router.locale == "ar" ? "rtl" : "ltr"}
        className={classes.mainSwiper}
      >
        <Box className={classes.arrowsContainer}>
          <ArrowForwardIosIcon
            onClick={() => goPrev(advancedSwiperRef)}
            className={classes.NextArrow}
          />
          <ArrowForwardIosIcon
            onClick={() => goNext(advancedSwiperRef)}
            className={classes.PrevArrow}
          />
        </Box>
        {items.map((item, index) => (
          <SwiperSlide dir={Router.locale == "ar" ? "RTL" : "LTR"} key={index}>
            {({ isActive }) => (
              <Box className={classes.ContainerForAllSections}>
                <Box
                  className={`${classes.containerForTextSection} ${
                    isActive && classes.textSectionAnimation // for applying animation when Text is going to be shown
                  }`}
                >
                  <Typography
                    variant="h4"
                    component="h4"
                    className={classes.titleTextSection}
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.descriptionTextSection}
                  >
                    {convertToPlain(item?.description)}
                  </Typography>
                  <Button
                    variant="outlined"
                    className={classes.btnTextSection}
                    onClick={() => handleClick(item.slug)}
                  >
                    {t("Read More")}
                  </Button>
                </Box>
                <Box
                  className={`${classes.imageContainerSection} ${
                    isActive && classes.imageSectionAnimation // for applying animation when image is going to be shown
                  }`}
                >
                  {item?.mediaItems?.map((img, index) => {
                    return (
                      <img
                        key={index}
                        src={img.thumbnailUrl}
                        className={classes.imageClass}
                      />
                    );
                  })}
                </Box>
              </Box>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default AdvanceCarousel;
