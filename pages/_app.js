import Head from "next/head";
import { useRouter } from "next/router";
import AOS from "aos";
import React, { Fragment, useEffect, useState } from "react";
import useTheme from "../components/useTheme/useTheme";
import Header from "../components/Header";
import Footer from "../components/footer";
<<<<<<< HEAD
import CustomLoader from "../components/customLoader";
=======
// import CustomLoader from "../components/customLoader";
>>>>>>> 4fd65d1efc0a36aa954c423f42d3af1b9df8347a
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import { checkLoadImages } from "../utilies/utiliesFuctions";
import {
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
} from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import { themeGenerator } from "../utilies/theme/themeGenerator";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import "../styles/globals.css";
import HomePageSkelton from "../components/common/skeltonUI/homePageSkelton";
///
const scale = 0.8;
const [getTheme] = useTheme();

async function fetchTheme(setAllData, language) {
  let theme = await getTheme(language);

  setAllData({
    pages: theme?.data?.navbarItems,
    themeData: theme?.data?.theme,
<<<<<<< HEAD
    devicesCategory: theme?.data?.devicesCategory,
    childrenCategories: theme?.data?.devicesCategory?.childrenCategories,
    socialMediaLinks: theme?.data?.contacts,
    navbarType: theme?.data?.theme?.navbarType,
    currencyOptions: theme?.data?.currencies,
    defaultCurrency: {
      id: theme?.data?.defaultCurrency?.id,
      name: theme?.data?.defaultCurrency?.name,
      value: theme?.data?.defaultCurrency?.code,
    },
=======
   
    socialMediaLinks: theme?.data?.contacts,
    navbarType: theme?.data?.theme?.navbarType,
  
>>>>>>> 4fd65d1efc0a36aa954c423f42d3af1b9df8347a
    notifications: {
      alerts: theme?.data?.alerts,
      popup: theme?.data?.popup,
    },
<<<<<<< HEAD
    eventTypes: theme?.data?.eventTypes,
=======
  
>>>>>>> 4fd65d1efc0a36aa954c423f42d3af1b9df8347a
  });
}

function MyApp({ Component, pageProps }) {
<<<<<<< HEAD
=======
  // console.log(data)
  const Homedata=pageProps.data.data

>>>>>>> 4fd65d1efc0a36aa954c423f42d3af1b9df8347a
  const Router = useRouter();
  const [loadingData, setLoadingData] = useState(true);
  const [allData, setAllData] = useState({
    pages: [],
    themeData: null,
    devicesCategory: [],
    socialMediaLinks: [],
    navbarType: 0,
    currencyOptions: [],
    defaultCurrency: {
      id: null,
      name: "",
      value: "",
    },
    notifications: null,
    eventTypes: [],
  });

  useEffect(() => {
    AOS.init({
      disable: "mobile",
      once: false,
      duration: 1500,
    });
  }, []);

  useEffect(() => {
    if (Router.locale == "ar") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  }, [Router.locale]);

  useEffect(async () => {
    setLoadingData(true);
<<<<<<< HEAD
     // await fetchTheme(setAllData, Router.locale);
     setAllData(pageProps.theme)
    checkLoadImages(setLoadingData);
  }, [Router.locale]);

  if (loadingData || !allData.themeData) return <HomePageSkelton />;
=======
    // await fetchTheme(setAllData, Router.locale);
    setAllData(pageProps.theme)
    checkLoadImages(setLoadingData);
  }, [Router.locale]);

  if (loadingData || !allData?.themeData) return <HomePageSkelton />;
>>>>>>> 4fd65d1efc0a36aa954c423f42d3af1b9df8347a
  // return (
  //   <div
  //     style={{
  //       width: "100%",
  //       height: "100vh",
  //       background: "#fcfcfc",
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       position: "fixed",
  //       top: 0,
  //       left: 0,
  //       zIndex: "1000",
  //     }}
  //   >
  //     <CustomLoader />
  //   </div>
  // );

  let theme = themeGenerator(Router, allData.themeData);

  theme = responsiveFontSizes(theme);

  // @refresh reset

  if (Component.getLayout) {
    return (
      <StyledEngineProvider injectFirst>
        Component.getLayout(
        <Component {...pageProps} theme={allData.themeData} />
        );
      </StyledEngineProvider>
    );
  }
  return (
    <Fragment>
      <StyledEngineProvider injectFirst>
        <Head>
          <link
            rel="icon"
            type="image/x-icon"
            href={`${allData.themeData?.favicon}`}
          />
        </Head>
        <ThemeProvider theme={theme}>
          <Header
<<<<<<< HEAD
           headerApi={pageProps.data}
            pages={allData.pages}
            theme={allData.themeData}
            devicesCategory={allData.devicesCategory}
            headerType={allData.navbarType}
            socialMediaLinks={allData.socialMediaLinks}
            currencyOptions={allData.currencyOptions}
            notifications={allData.notifications}
            eventTypes={allData.eventTypes}
=======
          headerApi={pageProps.data}
            pages={allData.pages}
            theme={allData.themeData}
            devicesCategory={Homedata.devicesCategory}
            headerType={allData.navbarType}
            socialMediaLinks={allData.socialMediaLinks}
            currencyOptions={Homedata.currencyOptions}
            notifications={allData.notifications}
            eventTypes={Homedata.eventTypes}
>>>>>>> 4fd65d1efc0a36aa954c423f42d3af1b9df8347a
          />
          <Component
            {...pageProps}
            theme={allData.themeData}
            headerType={allData.navbarType}
          />
          <Footer theme={allData.themeData} />
          <ToastContainer />
        </ThemeProvider>
      </StyledEngineProvider>
    </Fragment>
  );
}

export default MyApp;
