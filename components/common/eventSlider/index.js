import React from "react";
import { useState, useRef } from "react";
import EventCard from "../eventCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { eventsParams } from "../../../components/helpers/eventsCarousel";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/controller";

const EventSlider = ({ events }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [swiper, setSwiper] = useState(0);
  const swiperbackRef = useRef(null);
  const [displayNavigationArrows, setDislayNavigationArrows] = useState(true);
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

  const toggleDisolayArrows = () =>
    +setDislayNavigationArrows(!displayNavigationArrows);

  return (
    <div onMouseEnter={toggleDisolayArrows} onMouseLeave={toggleDisolayArrows}>
      <ArrowBackIosIcon
        onClick={() => goPrev(swiperbackRef)}
        style={{
          backgroundColor: "transparent",
          color: "inherit",
          position: "absolute",
          top: "50%",
          left: "0px",
          zIndex: "2",
          cursor: "pointer",
          transform: "translateY(-50%)",
          padding: "0px 17px",
          width: "60px",
          height: "60px",
          opacity: `${displayNavigationArrows ? "0" : "1"}`,
        }}
        className="hideArrowMobile"
      />
      <ArrowForwardIosIcon
        onClick={() => goNext(swiperbackRef)}
        style={{
          backgroundColor: "transparent",
          color: "inherit",
          position: "absolute",
          top: "50%",
          right: "0px",
          zIndex: "2",
          cursor: "pointer",
          transform: "translateY(-50%)",
          padding: "0px 17px",
          width: "60px",
          height: "60px",
          opacity: `${displayNavigationArrows ? "0" : "1"}`,
        }}
        className="hideArrowMobile"
      />
      <Swiper
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            // spaceBetween: 20,
            // width: '10%'
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            // spaceBetween: 30,
            // width: '50%'
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            // spaceBetween: 40,
          },
        }}
        {...eventsParams}
        ref={swiperbackRef}
        speed={1500}
        onSlideChange={(swiperCore) => {
          const { activeIndex, snapIndex, previousIndex, realIndex } =
            swiperCore;
          setActiveIndex(activeIndex);
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="swipperWrapper"
        dir="ltr"
      >
        {events.map((item) => (
          <SwiperSlide
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "fit-content",
              marginTop: "40px",
            }}
            // dir={Router.locale == "ar" ? "RTL" : "LTR"}
          >
            <EventCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventSlider;
