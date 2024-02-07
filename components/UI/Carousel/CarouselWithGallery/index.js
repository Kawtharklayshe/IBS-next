import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { uid } from "react-uid";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  FreeMode,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CustomVideo from "../../../Shared/CustomVideo";
import { params } from "./config";
import useStyles from "./style";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/controller";
import "swiper/css";

const CarouselWithGallery = ({ items = [] }) => {
  const router = useRouter();
  const classes = useStyles();
  const swiperDetailRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  SwiperCore.use([FreeMode, Pagination, Thumbs, Autoplay]);
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
  if (items.length == 0) return null;
  return (
    <Box className={classes.root}>
      <Box
        onClick={() => goPrev(swiperDetailRef)}
        className={classes.prevArrowContainer}
      >
        <ArrowForwardIosIcon className={classes.prevArrow} />
      </Box>
      <Box
        onClick={() => goNext(swiperDetailRef)}
        className={classes.nextArrowContainer}
      >
        <ArrowForwardIosIcon />
      </Box>
      <Swiper
        id="main"
        {...params}
        ref={swiperDetailRef}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {items.map((item) => (
          <SwiperSlide
            key={uid(item)}
            dir={router.locale == "ar" ? "rtl" : "ltr"}
            className={classes.slide}
          >
            {item?.type == 1 && (
              <img src={item?.thumbnailUrl} className={classes.slideImage} />
            )}
            {item?.type == 2 && (
              <CustomVideo
                video={item?.thumbnailUrl}
                image={item?.coverImage}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {/** thumbs section */}
      <div className={classes.thumbsSwiperContainer}>
        <Swiper
          id="thumbs"
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={classes.thumbsSwiper}
        >
          {items.map((item) => (
            <SwiperSlide
              key={uid(item)}
              dir={router.locale == "ar" ? "rtl" : "ltr"}
            >
              <img src={item.thumbnailUrl} className={classes.thumbImage} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Box>
  );
};

export default CarouselWithGallery;
