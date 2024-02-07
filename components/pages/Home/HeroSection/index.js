import React from "react";
import { MAIN_HEADER_TYPES } from "../../../../constants/enums";
import { Box } from "@mui/material";
import FixedBackground from "./FixedBackground";
import Slider from "./Slider";
import VideoBackground from "./VideoBackground";
import ParallexFixedBackground from "./ParallexFixedBackground";
import ParticlesFixedBackground from "./ParticlesFixedBackground";
import CategoriesFeature from "./CategoriesFeature";
import FeatureSection from "./FeatureSection";
import useStyles from "./style";

const HeroSection = ({
  mainHeaderType,
  headerType,
  heroHeight,
  heroData,
  devicesCategory,
  featureSectionData,
}) => {
  const { type, content } = heroData;
  const classes = useStyles();

  return (
    <Box id="heroSection" className={classes.root}>
      <Box className="animatedHero">
        <Box className="first" />
        <Box className="second" />
        <Box className="third">
          {type == 1 && (
            <FixedBackground
              data={content}
              headerType={headerType}
              heroHeight={heroHeight}
            />
          )}
          {type == 2 && (
            <Slider
              data={content}
              headerType={headerType}
              heroHeight={heroHeight}
            />
          )}
          {type == 3 && (
            <VideoBackground
              data={content}
              headerType={headerType}
              heroHeight={heroHeight}
            />
          )}
          {(type == 4 || type == 6) && (
            <ParticlesFixedBackground
              data={content}
              headerType={headerType}
              heroHeight={heroHeight}
            />
          )}
          {type == 5 && (
            <ParallexFixedBackground
              data={content}
              headerType={headerType}
              heroHeight={heroHeight}
            />
          )}
        </Box>
        {/** Specific Categories feature for E-commerce header */}
        {mainHeaderType == MAIN_HEADER_TYPES.Ecommerce && (
          <CategoriesFeature categoryItems={devicesCategory} />
        )}
        {/** Specific Feature for Folio header */}
        {mainHeaderType == MAIN_HEADER_TYPES.Folio &&
          featureSectionData?.items?.length > 0 && (
            <FeatureSection data={featureSectionData} />
          )}
      </Box>
    </Box>
  );
};

export default HeroSection;
