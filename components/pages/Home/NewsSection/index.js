import { useRouter } from "next/router";
import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Params } from "./config";
import { Box, Container, Grid, Typography } from "@mui/material";
import NewsCard from "../../News/Cards/Type2";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/controller";
import "swiper/css";
import useStyles from "./style";

const NewsSection = ({ data, theme }) => {
  const Router = useRouter();
  const classes = useStyles({ backgroundImage: data.detail.backgroundImage });

  function convertToPlain(html) {
    if (typeof window === "object") {
      let tempDivElement = document.createElement("div");
      tempDivElement.innerHTML = html;
      return tempDivElement.textContent || tempDivElement.innerText || "";
    }
  }

  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return (
    <Box data-aos="zoom-in" className={classes.root}>
      <Container maxWidth="false" className={classes.innerContainer}>
        <Grid container>
          <Grid item xs={12} lg={3} className={classes.titlesContainer}>
            <Typography variant="h6" component="h6" className={classes.title}>
              {data.detail.title}
            </Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              {data.detail.subTitle}
            </Typography>
          </Grid>
          <Grid item xs={12} lg={12}>
            {/* <Swiper
              {...Params}
              dir={Router.locale == "ar" ? "rtl" : "ltr"}
              className={classes.swiperRoot}
            >
              {data.items.map((newsItem, index) => {
                return (
                  <SwiperSlide
                    dir={Router.locale == "ar" ? "RTL" : "LTR"}
                    key={index}
                    className={classes.slider}
                  >
                    <NewsCard
                      data={newsItem}
                      theme={theme}
                      parentPageTitle="News"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper> */}
             <section class="relative md:py-24 py-16">
            <div class="container relative"></div>
            <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 mt-8 gap-[50px]">
        {data.items.map((service, index) => {
            return (
              <div class="group rounded-md shadow-md dark:shadow-gray-800 relative overflow-hidden w-50">
              <div class="absolute inset-0 bg-gradient-to-t to-transparent via-slate-900/60 group-hover:via-slate-900/40 from-slate-900 top-3/4 group-hover:top-0 transition-all duration-500"></div>
              <img src={
                  service?.mediaItems?.length > 0
                      ? service?.mediaItems[0]?.thumbnailUrl
                      : "/images/no-image.png"
              } class="h-full object-cover" alt=""/>
              <div class="absolute bottom-0 mx-auto start-0 end-0 group-hover:bottom-0 transition-all duration-500 px-6 pb-6 text-center">
                  <i data-feather="headphones" class="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 mx-auto"></i>
                  <div class="mt-6">
                      <a href="" class="text-xl font-semibold text-white transition-all duration-500">{service.title}</a>
                      <p class="text-white/50 hidden group-hover:block transition-all duration-500 ease-in-out mt-4">{convertToPlain(data?.description)}</p>
                  </div>
              </div>
          </div>
          
);
})}
                </div>
                </section>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsSection;
