import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { params } from "./config";
import { Box } from "@mui/material";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/controller";
import useStyles from "./style";

const CategoriesFeature = ({ categoryItems = [] }) => {
  const Router = useRouter();
  const classes = useStyles();

  SwiperCore.use([Navigation, Pagination, Autoplay]);

  const handleNavigateToCategoryPage = (slug) =>
    Router.push(`/categories/${slug}`);
  return (
    <Box className={classes.root}>
      {/** Large screen view */}
      <Box className={classes.largeScreensContainer}>
        {categoryItems.map((item, index) => (
          <Box
            className={classes.categoryItem}
            onClick={() => handleNavigateToCategoryPage(item.slugName)}
            key={index}
          >
            <img
              className={classes.categoryImage}
              src={item.image}
              alt="categoryImage"
            />
          </Box>
        ))}
      </Box>
      {/** end of Large screen view */}
      {/** Small screen view */}
      <Box className={classes.smallScreensContainer}>
        <Swiper {...params} dir={Router.locale == "ar" ? "rtl" : "ltr"}>
          {categoryItems.map((item, index) => (
            <SwiperSlide
              dir={Router.locale == "ar" ? "RTL" : "LTR"}
              key={index}
            >
              <Box
                className={classes.categoryItem}
                onClick={() => handleNavigateToCategoryPage(item.slugName)}
              >
                <img
                  className={classes.categoryImage}
                  src={item.image}
                  alt="categoryImage"
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      {/** end of Small screen view */}
    </Box>
  );
};
export default CategoriesFeature;
