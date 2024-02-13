import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import React, { Fragment, useEffect, useState } from "react";
import { wrapper } from "../Redux/store";
import { useDispatch } from "react-redux";
import useTheme from "../components/useTheme/useTheme";
import { getWishlistInfo } from "../Redux/slices/wishlistSlice/aysncActions";
import { getCartInfo } from "../Redux/slices/cartSlice/aysncActions";
import { updateUserInfo } from "../Redux/slices/authSlice";
import { updateCurrency } from "../Redux/slices/currencySlice";
import { MAIN_HEADER_TYPES, FILTER_OPTIONS } from "../constants/enums";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";
import ContactsSpeedDial from "../components/Shared/ContactsSpeedDial";
import CustomLoader from "../components/Shared/customLoader";

import HomePageSkelton from "../components/Shared/skeltonUI/homePageSkelton";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import {
  checkLoadImages,
  isArabicCountry,
  setCurrentLanguagePref,
  setCurrentCurrencyPref,
} from "../utilies/utiliesFuctions";
import detectUserInfo from "../utilies/detectCurrentUserInfo";
import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { themeGenerator } from "../utilies/theme/themeGenerator";
///
const [getTheme] = useTheme();
async function fetchTheme(language, detectedCurrency) {
  let theme = await getTheme(language, detectedCurrency);
 
  return {
    pages: theme?.data?.navbarItems,
    themeData: theme?.data?.theme,
    defaultFontScale: theme?.data?.theme?.fontScale,
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
    notifications: {
      alerts: theme?.data?.alerts,
      popup: theme?.data?.popup,
    },
    eventTypes: theme?.data?.eventTypes,
    seoSetting: theme?.data?.seoSetting,
  };
}

function MyApp({ Component, pageProps }) {
  console.log(pageProps)
  const Router = useRouter();
  const dispatch = useDispatch();
  const [loadingData, setLoadingData] = useState(false);
  const [allData, setAllData] = useState({
    pages: [],
    themeData: null,
    defaultFontScale: 0,
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
    seoSetting: null,
  });

  /** update redux info [cart, wishlist, user] */
  const getInitialData = (currency) => {
    // update store with user info if there is a user
    const userInfo = JSON.parse(localStorage.getItem("UDA"));
    if (userInfo)
      dispatch(
        updateUserInfo({
          loading: false,
          data: userInfo,
          isSuccess: true,
          isLogged: true,
          error: "",
        })
      );
    dispatch(
      getWishlistInfo({
        merchantID: process.env.NEXT_PUBLIC_MERCHANT,
        locale: Router.locale,
      })
    );
    dispatch(
      getCartInfo({
        merchantID: process.env.NEXT_PUBLIC_MERCHANT,
        locale: Router.locale,
      })
    );
    dispatch(updateCurrency(currency));
  };

  useEffect(() => {
    AOS.init({
      disable: "mobile",
      once: false,
      duration: 1500,
    });
    localStorage.setItem("isFirstRender", JSON.stringify(true));
  }, []);

  useEffect(async () => {
    setLoadingData(true);
    if (Router.locale == "ar") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
    const langUserCookie = Cookies.get("NEXT_LOCALE") || Router.locale;
    const currencyUserCookie = JSON.parse(Cookies.get("CURRENCY") || null);
    const userThemeCookie = JSON.parse(Cookies.get("THEMEPREF") || null);
    const configThemingData = await fetchTheme(
      langUserCookie,
      currencyUserCookie?.value
    );
    getInitialData(currencyUserCookie ?? configThemingData.defaultCurrency);
    !langUserCookie && setCurrentLanguagePref(Router.locale);
    !currencyUserCookie &&
      setCurrentCurrencyPref(configThemingData.defaultCurrency);
    if (userThemeCookie) {
      setAllData({
        ...configThemingData,
        themeData: { ...configThemingData.themeData, ...userThemeCookie },
      });
      // it's crusial here to check out, if there is filter effect or not
      if (userThemeCookie.effectId != -1) {
        document.documentElement.style.filter =
          FILTER_OPTIONS[userThemeCookie.effectId].filterValue;
      }
    } else setAllData(configThemingData);
    checkLoadImages(setLoadingData);
  }, [Router.locale]);

  // Create rtl cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  let theme = themeGenerator(Router, allData.themeData);

  theme = responsiveFontSizes(theme);

  if (loadingData || !allData.themeData) {
    return <HomePageSkelton />;
  }

  if (Component.getLayout) {
    return Component.getLayout(
      <ThemeProvider theme={theme}>
        {Boolean(allData.seoSetting?.google_Analytics_Status) && (
          <>
            <Script
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${allData.seoSetting?.google_Analytics_ID}`}
            />
            <Script strategy="lazyOnload">
              {`
              window.dataLayer = window.dataLayer || []; 
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date()); 
              gtag('config', '${allData.seoSetting?.google_Analytics_ID}');
            `}
            </Script>
          </>
        )}
        <Component {...pageProps} theme={allData.themeData} />
        <ToastContainer />
      </ThemeProvider>
    );
  }

  return (
    <Fragment>
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          href={`${allData.themeData?.favicon}`}
        />
      </Head>
      {Boolean(allData.seoSetting?.google_Analytics_Status) && (
        <>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${allData.seoSetting?.google_Analytics_ID}`}
          />
          <Script strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || []; 
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date()); 
              gtag('config', '${allData.seoSetting?.google_Analytics_ID}');
            `}
          </Script>
        </>
      )}
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Header
            mainHeaderType={MAIN_HEADER_TYPES.Ecommerce}
            pages={allData.pages}
            theme={allData.themeData}
            defaultFontScale={allData.defaultFontScale}
            devicesCategory={allData.devicesCategory}
            headerType={allData.navbarType}
            socialMediaLinks={allData.socialMediaLinks}
            currencyOptions={allData.currencyOptions}
            notifications={allData.notifications}
            eventTypes={allData.eventTypes}
          />
          <Component
            {...pageProps}
            theme={allData.themeData}
            mainHeaderType={MAIN_HEADER_TYPES.Ecommerce}
            headerType={allData.navbarType}
            notifications={allData.notifications}
            devicesCategory={allData.devicesCategory}
          />
          <ContactsSpeedDial contactList={allData.socialMediaLinks} />
          <Footer theme={allData.themeData} />
          <ToastContainer />
        </ThemeProvider>
      </CacheProvider>
    </Fragment>
  );
}

export default wrapper.withRedux(MyApp);
