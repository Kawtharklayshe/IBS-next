import React, { useState } from "react";
import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleIcon from "@mui/icons-material/Circle";
import FullImage from "../../..//Shared/FullImage";
import CustomVideo from "../../../Shared/CustomVideo";
import useSyles, { carouselClasses } from "./style";

const BasicCarousel = ({ items = [] }) => {
  const classes = useSyles();
  const [open, setOpen] = useState(false);
  const [urlImage, setImageUrl] = useState();
  return (
    <Box className={classes.root}>
      <Carousel
        IndicatorIcon={<CircleIcon style={carouselClasses.indicatorIcon} />}
        indicatorIconButtonProps={{
          style: carouselClasses.indicatorIconButton,
        }}
        activeIndicatorIconButtonProps={{
          style: carouselClasses.activeIndicatorIconButton,
        }}
        indicatorContainerProps={{
          style: carouselClasses.indicatorContainer,
        }}
        navButtonsProps={{
          style: carouselClasses.navButtons,
        }}
        navButtonsWrapperProps={{
          style: carouselClasses.navButtonsWrapper,
        }}
        NextIcon={<ArrowBackIosIcon style={carouselClasses.arrowIcon} />}
        PrevIcon={<ArrowForwardIosIcon style={carouselClasses.arrowIcon} />}
      >
        {items.map((item, i) => (
          <div key={i}>
            {item?.type == 1 && (
              <img
                key={i}
                src={item?.thumbnailUrl}
                className={classes.carouselImage}
                onClick={() => {
                  setImageUrl(item.url);
                  setOpen(true);
                }}
              />
            )}
            {item?.type == 2 && (
              <CustomVideo
                video={item?.thumbnailUrl}
                image={item?.coverImage}
              />
            )}
          </div>
        ))}
      </Carousel>
      {open && (
        <FullImage
          open={open}
          setOpen={setOpen}
          image={urlImage}
          images={items}
        />
      )}
    </Box>
  );
};

export default BasicCarousel;
