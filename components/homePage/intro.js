import {
  Typography,
  Container,
  Box,
  Divider,
  Grid,
  Button,
} from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import IntroVideo from "./introVideo";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/controller";
import Image from "next/image";
// import "../styles/globals.css";
// import { serviceParamCarsoul } from "../components/helpers/serviceParamCarsoul";
import { useRef, useEffect, useState, Fragment } from "react";
// import classes from "../styles/override/overrideCarsoul.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Autoplay } from "swiper";
import style from "../../styles/homePage/style.module.css";


SwiperCore.use([Autoplay]);
import { useRouter } from "next/router";
function convertToPlain(html) {
  if (typeof window === "object") {
    let tempDivElement = document.createElement("div");
    tempDivElement.innerHTML = html;
    return tempDivElement.textContent || tempDivElement.innerText || "";
  }
}
function Intro({ data, theme, serv, item }) {
  const Router = useRouter();
  // const Cs = document.querySelector('serviceTitle');

  return (
    <div>
      <Grid container style={{ flexDirection: "row-reverse" }}>
        <Grid item xs={12} lg={6} sx={{ backgroundColor: "#F5F5F5" }}>
          <div
            className={style.introCont}
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-out"
          >
            <Typography
              varaint="subtitle1"
              component="h6"
              className={style.introTitle}
              style={{ color: `${theme?.onBackground}` }}
            >
              {data?.items?.title}
            </Typography>
            {/* <Typography
              variant="p"
              component="p"
              className={style.introText}
              style={{ color: `${theme?.onPrimaryColor}` }}
            >
              {data?.items?.subTitle}
            </Typography> */}
            {/* <Button
              className={style.introButton}
              sx={{
                boxShadow: `0px 0px ${theme?.elevation}px`,
                borderRadius: theme?.radius,
              }}
              onClick={() => window.open(data?.items?.buttonUrl, "_blank")}
            >
              <DoubleArrowIcon className={style.arrow} /> {data?.items?.button}
            </Button> */}

            <Container>
              <div>
                <Grid container>
                  <Swiper
                    //className={style.swiperServices}
                    //{...serviceParamCarsoul}
                    // ref={swiperServicetRef}
                    spaceBetween={40}
                    loop={true}
                    speed={1100}
                    loopAdditionalSlides={3}
                    autoplay={{
                      delay: 1900,
                    }}
                    width={240}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    // modules={[Autoplay, Pagination, Navigation]}
                    dir={Router.locale == "ar" ? "rtl" : "ltr"}
                    style={{
                      width: "100%",
                      margin: "0px auto",
                      color: "inherit",
                      height: "550px",
                      padding: "0px 20px",
                      paddingTop: "20px",
                      marginTop: "40px",
                    }}
                  >
                    {serv?.map((service, index) => {
                      return (
                        <div key={index}>
                          <SwiperSlide
                            style={{ width: "200px", marginTop: "40px" }}
                            dir={Router.locale == "ar" ? "RTL" : "LTR"}
                          >
                            <Box zIndex={100000}>
                              <div>
                                <div
                                  onClick={() =>
                                    Router.push(
                                      `/services/subservices?id=${service.id}`
                                    )
                                  }
                                  className={style.imgCont}
                                  style={{ marginBottom: "30px" }}
                                >
                                  <img
                                    className={style.imgServ}
                                    src={service.image}
                                    alt="service"
                                    width="80px"
                                    height="80px"
                                    style={{
                                      borderWidth: "1px",
                                      borderStyle: "solid",
                                      // borderColor: `${theme?.primaryColor}`,
                                      filter: "grayscale(50%)",
                                      borderColor: `${theme?.onCardColor.concat(
                                        "a6"
                                      )}`,
                                      borderRadius: "50%",
                                      width: "50%",
                                      height: "50%",
                                      padding: "15px",
                                      backgroundColor: `${theme?.backgroundColor}`,
                                      cursor: "pointer",
                                    }}
                                  />
                                </div>
                              </div>

                              <div style={{ marginTop: "10px" }}>
                                <Typography
                                  variant="h6"
                                  component="h6"
                                  className={style.serviceTitle}
                                  color="onCard.main"
                                  sx={{
                                    "&:hover": {
                                      color: "primary.main",
                                      cursor: "pointer",
                                    },
                                  }}
                                >
                                  {service.title}
                                </Typography>
                                <Typography
                                  variant="subtitle1"
                                  component="p"
                                  className={`${style.serviceText}`}
                                  sx={{ color: "onCard.light" }}
                                >
                                  {convertToPlain(service.description)}
                                </Typography>
                              </div>
                              <img
                                className={style.imgStat}
                                src={service.serviceImageBackground}
                                alt=""
                                style={{
                                  display: "block",
                                  margin: "auto",
                                  width: "215px",
                                  height: "212px",
                                  objectFit: 'cover'
                                }}
                              />
                            </Box>
                          </SwiperSlide>
                        </div>
                      );
                    })}
                  </Swiper>
                  <div 
                  style={{
                    width: "100%",
                    textAlign: "right"
                  }}>
                  <Button
                  onClick={() => window.open("/services", "_self")}
                  style={{margin:'auto',marginBottom: '5px'}}
                  sx={{
                    padding: "0px",
                    minWidth: "120px",
                    minHeight: "40px",
                    fontSize: '0.8rem',
                    marginRight: Router.locale == "ar" ? "15px" : "unset",
                    color: "onPrimary.main",
                    backgroundColor: "primary.main",
                    border: "1px solid",
                    boxShadow: `0px 0px ${theme?.elevation}px`,
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
                      borderColor: "primary.main",
                    },
                  }}
                >
                  See All
                </Button>
                </div>
                </Grid>
              </div>
            </Container>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
            data-aos-easing="ease-out"
            style={{ height: "100%" }}
          >
            <IntroVideo video={data?.items?.video} image={data?.items?.image} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default Intro;
