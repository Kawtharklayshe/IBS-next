import Head from "next/head";
import { useState, useEffect, useLayoutEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import { getFetch } from "../services/httpService";
import { GET_HOME_INFO } from "../services/endpoints";
import { getSEOKeywordsContent } from "../utilies/utiliesFuctions";
import { Box } from "@mui/material";
import HeroSection from "../components/pages/Home/HeroSection";
import ServicesSection from "../components/pages/Home/ServicesSection";
import ProjectsSection from "../components/pages/Home/ProjectsSection";
import TestimonialsSection from "../components/pages/Home/TestimonialsSection";
import OurClientsSection from "../components/pages/Home/OurClientsSection";
import ProductsSection from "../components/pages/Home/ProductsSection";
import CommunicateUsSection from "../components/pages/Home/CommunicateUsSection";
import NewsSection from "../components/pages/Home/NewsSection";
import GallerySection from "../components/pages/Home/GallerySection";
import StatisticsSection from "../components/pages/Home/StatisticsSection";
import IntroSection from "../components/pages/Home/IntroSection";
import ApporachSection from "../components/pages/Home/ApproachSection";
import CategoriesSection from "../components/pages/Home/CategoriesSection";
import PopUpNotificationModal from "../components/pages/Home/PopUpNorificationModal";
import useStyles from "../components/pages/Home/style";

export default function Home(props) {
  const {
    data,
    theme,
    mainHeaderType,
    headerType,
    notifications,
    devicesCategory,
  } = props;
  
  const classes = useStyles();
  const [heroHeight, setHeroHeight] = useState(0);
  const [open, setOpen] = useState(false);
  let { t, lang } = useTranslation("common");
  const isFirstRender = JSON.parse(localStorage.getItem("isFirstRender"));

  const handleClose = () => setOpen(false);

  useEffect(() => {
    // to make sure that the modal will show up just once
    if (typeof window !== "object" || !isFirstRender) return;

    setTimeout(() => {
      setOpen(true);
    }, 6000);

    localStorage.setItem("isFirstRender", JSON.stringify(false));
  }, []);

  useLayoutEffect(() => {
    if (typeof window !== "object") return;

    const navHeight = document.getElementById("navbar").offsetHeight;
    const viewportHeight = document.documentElement.clientHeight;

    let heroHeight = viewportHeight - navHeight;

    setHeroHeight(heroHeight);
  }, []);

  return (
  
    <Box className={classes.root}>
      <Head>
        <title>{t("home")}</title>
        <meta
          name="keywords"
          content={getSEOKeywordsContent(data.data.seo.seoTags)}
        />
        <meta name="description" content={data?.data?.seo?.seoDescription} />
      </Head>
     
      <HeroSection
        mainHeaderType={mainHeaderType}
        headerType={headerType}
        heroHeight={heroHeight}
        heroData={data?.data?.headerSection}
        devicesCategory={devicesCategory}
        featureSectionData={data?.data?.sectionsContent?.feature}
      />
        <div class="container relative">
      {data?.data?.webLayout?.sections.map((section, index) => {
        return (
          <Box key={index}>
            {section.name == "services" && (
              <ServicesSection data={data?.data?.sectionsContent?.services} />
            )}
            {/* {section.name == "introSection" && (
              <IntroSection data={data?.data?.sectionsContent?.introSection} />
            )} */}
            {section.name == "testimonial" && (
              <TestimonialsSection
                data={data?.data?.sectionsContent?.testimonial}
              />
            )}
            {section.name == "projects" && (
              <ProjectsSection data={data?.data?.sectionsContent?.projects} />
            )}
            {section.name == "news" && (
              <NewsSection
                data={data?.data?.sectionsContent?.news}
                theme={theme}
              />
            )}
            {section.name == "approach" && (
              <ApporachSection data={data?.data?.sectionsContent?.approach} />
            )}
            {section.name == "ourClient" && (
              <OurClientsSection
                data={data?.data?.sectionsContent?.ourClient}
              />
            )}
            {section.name == "category" && (
              <CategoriesSection data={data?.data?.sectionsContent?.category} />
            )}
            {section.name == "product" && (
              <ProductsSection
                data={data?.data?.sectionsContent?.product}
                theme={theme}
              />
            )}
            {section.name == "communicateus" && (
              <CommunicateUsSection
                data={data?.data?.sectionsContent?.communicateus}
              />
            )}
            {section.name == "statistic" && (
              <StatisticsSection
                data={data?.data?.sectionsContent?.statistic}
              />
            )}
            {section.name == "gallery" && (
              <GallerySection data={data?.data?.sectionsContent?.gallery} />
            )}
          </Box>
        );
      })}
        </div>
      <PopUpNotificationModal
        open={open}
        handleClose={handleClose}
        data={notifications?.popup}
      />
     
    </Box>
  
  );
}
export async function getStaticProps({ locale }) {
  let data = null;
  const res = await getFetch(
    GET_HOME_INFO,
    process.env.NEXT_PUBLIC_MERCHANT,
    locale
  );
  data = await res?.json();
  return {
    props: {
      data: data || "",
    },
    revalidate: 10,
  };
}
