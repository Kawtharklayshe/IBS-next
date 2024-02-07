import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Params } from "./config";
import { Box } from "@mui/material";
import "swiper/css/autoplay";
import "swiper/css";
import useStyles from "./style";

const NotificationSlider = ({ data }) => {
  const Router = useRouter();
  SwiperCore.use([Autoplay]);
  const classes = useStyles();
  return (
    <Swiper
      {...Params}
      dir={Router.locale == "ar" ? "rtl" : "ltr"}
      className={classes.root}
    >
      {data?.map((item, index) => {
        return (
          <SwiperSlide key={index} dir={Router.locale == "ar" ? "RTL" : "LTR"}>
            <Box className={classes.slideContainer}>
              <Box
                dangerouslySetInnerHTML={{ __html: item.body }}
                className={classes.notificationBody}
              />
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default NotificationSlider;
