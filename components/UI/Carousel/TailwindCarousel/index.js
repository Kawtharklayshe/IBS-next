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
      <div class="container relative">
          <div class="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
            <div class="lg:col-span-8 md:col-span-6 md:text-start text-center">
              <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Explore Latest Works</h3>
              <p class="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>

            <div class="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
              <a href="" class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <i class="uil uil-arrow-right align-middle"></i></a>
            </div>
          </div>

          <div class="sm:flex mt-4">
            {items.map((item, index) => (
              <div class="sm:w-1/2 picture-item p-4 rounded-md">
                <div class="">
                  <div class="relative">
                    <div class="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                      {item?.mediaItems?.map((img, index) => {
                        return (
                          <img
                            key={index}
                            src={img.thumbnailUrl}

                            class="rounded-t-md shadow"
                          />
                        );
                      })}

                    </div>
                  </div>

                  <div class="pt-4 px-3">
                    <h5 class="mb-1 font-semibold text-xl"><a href="https://1.envato.market/techwind" target="_blank" class="hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.title}</a></h5>
                    <span class="text-slate-400"> {convertToPlain(item?.description)}</span>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      <Swiper
        {...Params}
        ref={advancedSwiperRef}
        dir={Router.locale == "ar" ? "rtl" : "ltr"}
        className={classes.mainSwiper}
      >
        {/* <Box className={classes.arrowsContainer}>
          <ArrowForwardIosIcon
            onClick={() => goPrev(advancedSwiperRef)}
            className={classes.NextArrow}
          />
          <ArrowForwardIosIcon
            onClick={() => goNext(advancedSwiperRef)}
            className={classes.PrevArrow}
          />
          
        </Box> */}

        


        {items.map((item, index) => (
          <SwiperSlide dir={Router.locale == "ar" ? "RTL" : "LTR"} key={index}>
            {({ isActive }) => (
              <Box className={classes.ContainerForAllSections}>
                <div class="w-100 picture-item p-4 rounded-md">
                  <div class="w-100">
                    <div class="container">
                      <div class="shadow dark:shadow-gray-800 text-center p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                        {item?.mediaItems?.map((img, index) => {
                          return (
                            <img
                              key={index}
                              src={img.thumbnailUrl}

                              class="rounded-t-md shadow "
                            />
                          );
                        })}

                      </div>
                    </div>

                    <div class="mt-10 px-3" className={`${classes.containerForTextSection} ${isActive && classes.textSectionAnimation // for applying animation when Text is going to be shown
                      }`}>
                      <h5  class="mb-1  font-semibold text-xl"><a href="https://1.envato.market/techwind" target="_blank" class="hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.title}</a></h5>
                      <span class="text-slate-400"> {convertToPlain(item?.description)}</span>
                    </div>
                  </div>
                </div>


              </Box>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default AdvanceCarousel;
