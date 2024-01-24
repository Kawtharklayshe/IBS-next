import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { checkLoadImages } from "../../utilies/utiliesFuctions";
import { headerTypes } from "../../constants/enums";
import MenuIcon from "@mui/icons-material/Menu";
import useTranslation from "next-translate/useTranslation";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Twitter } from "@mui/icons-material";
import { GET_HOME_INFO } from "../../services/endpoints";
import {
  reshapeNavList,
  appendChildrenToEventMewuItem,
} from "../../utilies/utiliesFuctions";
import MenuBuilder from "./menuBuilder";
import MobileSideMenu from "./mobileSideMenu";
import useFetch from "../useFetch/useFetch";
import {
  Menu,
  Box,
  IconButton,
  Typography,
  MenuItem,
  Container,
  Tooltip,
  Grid,
} from "@mui/material";
import style from "../../styles/header/header.module.css";
import useUpperPartStyles from "../../styles/header/upperPartHeader";
import usePartialAnimiStyles from "../../styles/header/partialAnimation";
import isHomePg from "../../utilies/detectHomePage/isHomePg";

const languages = [
  { name: "English", value: "en" },
  { name: "Deutsch", value: "de" },
  //{ name: "العربية", value: "ar" },
];

const langsEnum = {
  en: "English",
  de: "Deutsch",
  //ar: "العربية",
};

const flagsEnum = {
  en: "us",
  de: "de",
  //ar: "ae",
};

const Header = (props) => {
  const Router = useRouter();
  
const {headerApi}=props
console.log("header",props)
  const [getFetch, postFetch] = useFetch();
  let { t } = useTranslation("common");
  const {
    pages,
    theme,
    devicesCategory,
    headerType,
    socialMediaLinks,
    currencyOptions,
    notifications,
    eventTypes,
  } = props;  

  const upperPartStylesClasses = useUpperPartStyles();
  const partialAnimiClasses = usePartialAnimiStyles();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [scrollTop, setScrollTop] = useState(false); //to apply effect on navbar
  const [isFirstRender, setIsFirstRender] = useState(true); //to apply effect on navbar
  // const [headerApi, setHeaderApi] = useState();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const newNavBarItems = appendChildrenToEventMewuItem(
    eventTypes,
    reshapeNavList(pages)
  );
  const previousDelay = 0.9;

  const toggleMobileMenu = () => setIsSideMenuOpen(!isSideMenuOpen);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(async () => {
  //   let res = await getFetch(
  //     GET_HOME_INFO,
  //     process.env.NEXT_PUBLIC_MERCHANT,
  //     Router.locale
  //   );
  //   let data = await res?.json();
    
  // console.log("header data",data)
  //   setHeaderApi(data);
  }, []);

  // to calculate the animation delay for the elements after the nav items
  const calcDelay = (x, arr) => {
    const delay = x + arr.length * 0.04;
    return `${delay.toFixed(2)}s`;
  };

  // to detect the first enterance to the home component, so we could apply the animation just once
  // *************************************************** */
  const handleFirstRender = () => {
    if (!isHomePg(Router) && !isFirstRender) return;

    let fromTop = document.documentElement.scrollTop;
    if (fromTop > 0) {
      setIsFirstRender(false);
    }
  };

  // to make the header lower part fixed when window.scrollY > 100
  //************************************ */
  const handleScrollTop = () => {
    if (window.scrollY <= 48) {
      setScrollTop(false);
    } else {
      if (scrollTop) return;

      setScrollTop(true);
    }
  };

  const handleScroll = () => {
    handleFirstRender();
    handleScrollTop();
  };

  // for handling  global nav behavior on scrolling
  useEffect(() => {
    if (typeof window !== "object") return;

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // for handle clicking event outside the mobile menu
  useEffect(() => {
    if (typeof window === "object") {
      document.addEventListener("click", (e) => {
        if (e.target.id == "mobileSideMenuDropShadowWrapper")
          setIsSideMenuOpen(false);
      });

      return document.removeEventListener("click", (e) => {
        if (e.target.id == "mobileSideMenuDropShadowWrapper")
          setIsSideMenuOpen(false);
      });
    }
  }, []);

  // descover when we're on mid & small screens
  useEffect(() => {
    if (typeof window !== "object") return;

    const setResponsiveness = () => {
      return window.innerWidth < 1200
        ? setIsMobileView(true)
        : setIsMobileView(false);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  // checking of header type first [colored_background,transparent_background]
  // for determining custom style (background color, color, position)

  const getAppropriateHeaderClasses = () => {
    if (scrollTop) {
      return `${style.globalNav}`;
    } else {
      if (headerType == headerTypes.colored)
        return `${style.fixedHeaderScrollOff}`;
      else return `${style.headerCon}`;
    }
  };

  const locationOnMapCordinates = {
    lat:
      headerApi?.data?.contacts?.find((item) => item.channel == "Lat")?.value ??
      "24.2333076",
    lng:
      headerApi?.data?.contacts?.find((item) => item.channel == "Lng")?.value ??
      "55.7325268",
  };

  // to apply the animation
  const isReadyToAnimate = () => {
    if (typeof window !== "object") return;

    return isHomePg(Router) && isFirstRender && typeof window == "object";
  };

  // for animations purposes, because the social index in "socialMediaLinks"
  // is the only thing that matters when we need to assign a proper delay to it
  // in the next "renderSocialMediaList" function
  const scoialDelays = {};
  let delay = previousDelay;
  socialMediaLinks.forEach((social, index) => {
    scoialDelays[index] = delay;
    delay += 0.04;
  });

  // rendering social media links
  const renderSocialMediaList = () => {
    const navItemsArr = isMobileView ? [] : pages;

    const linksArr = socialMediaLinks
      .map(({ channel, value }, index) => {
        switch (channel) {
          case "Facebook":
            if (value != "")
              return (
                <FacebookIcon
                  className={`flex-center ${
                    isReadyToAnimate() ? partialAnimiClasses.root : undefined
                  }`}
                  style={{
                    animationDelay: calcDelay(scoialDelays[index], navItemsArr),
                    fontSize: "37px",
                    border: "0.5px solid",
                    borderRadius: "50%",
                    padding: "7px",
                  }}
                  sx={{
                    // display: scrollTop == true ? "none !important" : "flex !important",
                    // ["@media (max-width:900px)"]: {
                    //   display:
                    //     scrollTop == true
                    //       ? "none !important"
                    //       : "flex !important",
                    // },
                    color:
                      headerType == headerTypes.colored // checking of header type first[colored_background,transparent_background]
                        ? "primary.main"
                        : scrollTop == true
                        ? "primary.main"
                        : "black",
                    fontSize: { xs: "16px", md: "20px" },
                    mr: { xs: "4px", md: "8px" },
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "white",
                      cursor: "pointer",
                      borderColor: "primary.main",
                    },
                  }}
                  onClick={() => window.open(value, "_blank")}
                />
              );
            break;
          case "Instagram":
            if (value != "")
              return (
                <InstagramIcon
                  className={`style.iconResponsive ${
                    isReadyToAnimate() ? partialAnimiClasses.root : undefined
                  }`}
                  style={{
                    animationDelay: calcDelay(scoialDelays[index], navItemsArr),
                    fontSize: "37px",
                    border: "0.5px solid",
                    borderRadius: "50%",
                    padding: "7px",
                  }}
                  sx={{
                    // display: scrollTop == true ? "none !important" : "flex !important",
                    // ["@media (max-width:900px)"]: {
                    //   display:
                    //     scrollTop == true
                    //       ? "none !important"
                    //       : "flex !important",
                    // },
                    color:
                      headerType == headerTypes.colored // checking of header type first[colored_background,transparent_background]
                        ? "primary.main"
                        : scrollTop == true
                        ? "primary.main"
                        : "black",
                    fontSize: { xs: "16px", md: "20px" },
                    mr: { xs: "4px", md: "8px" },
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "white",
                      cursor: "pointer",
                      borderColor: "primary.main !important",
                    },
                  }}
                  onClick={() => window.open(value, "_blank")}
                />
              );
            break;
          case "Twitter":
            if (value != "")
              return (
                <Twitter
                  className={`flex-center ${
                    isReadyToAnimate() ? partialAnimiClasses.root : undefined
                  }`}
                  style={{
                    animationDelay: calcDelay(scoialDelays[index], navItemsArr),
                    fontSize: "37px",
                    border: "0.5px solid",
                    borderRadius: "50%",
                    padding: "7px",
                  }}
                  sx={{
                    // display: scrollTop == true ? "none !important" : "flex !important",
                    // ["@media (max-width:900px)"]: {
                    //   display:
                    //     scrollTop == true
                    //       ? "none !important"
                    //       : "flex !important",
                    // },
                    color:
                      headerType == headerTypes.colored // checking of header type first[colored_background,transparent_background]
                        ? "primary.main"
                        : scrollTop == true
                        ? "primary.main"
                        : "black",
                    fontSize: { xs: "16px", md: "20px" },
                    mr: { xs: "4px", md: "8px" },
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "white",
                      cursor: "pointer",
                      borderColor: "primary.main",
                    },
                  }}
                  // sx={{
                  //   color:
                  //     headerType == headerTypes.colored // checking of header type first[colored_background,transparent_background]
                  //       ? "primary.main"
                  //       : scrollTop == true
                  //       ? "primary.main"
                  //       : "white",
                  //   fontSize: { xs: "16px", md: "20px" },
                  //   mr: { xs: "4px", md: "8px" },
                  //   "&:hover": {
                  //     color: "primary.main",
                  //     cursor: "pointer",
                  //   },
                  // }}
                  onClick={() => window.open(value, "_blank")}
                />
              );
            break;
          default:
            break;
        }
      })
      .filter((item) => item);
    return linksArr;
  };

  return (
    <div className={getAppropriateHeaderClasses()} id="navbar">
      <Container
        id="header"
        maxWidth="lg"
        sx={{ alignItems: "center" }}
        className={isReadyToAnimate() ? upperPartStylesClasses.root : undefined}
      >
        <Box
          className={style.supportBarArea}
          sx={{ pb: scrollTop == true && "20px !important" }}
        >
          <Grid
            container
            sx={{
              display:
                scrollTop == true ? "none !important" : "flex !important",
              alignItems: "center",
            }}
            style={{
              borderBottom: "1px solid #E6E6E6",
              display: "flex",
              minWidth: "100%",
              justifyContent: "space-between",
            }}
            className={style.containerResponsive}
            id={style.containerResponsive}
          >
            <div className={style.responsiveLogo}>
              <Grid
                item
                style={{ animationDelay: `1.15s` }}
                className={
                  isReadyToAnimate() ? partialAnimiClasses.root : undefined
                }
              >
                {theme?.logo && (
                  <Link href="/">
                    <a>
                      <Image
                        src={theme.logo}
                        alt="logo"
                        width={80}
                        height={38}
                        className={
                          Router.locale == "ar"
                            ? "responsiveArLOGO"
                            : "responsiveLogo"
                        }
                        priority
                      />
                    </a>
                  </Link>
                )}
              </Grid>
            </div>
            <Grid item xs={5} sm={9} lg={10}>
              <div className="flex-center" style={{ justifyContent: "end" }}>
                {socialMediaLinks?.find(({ channel }) => channel == "Address")
                  ?.value && (
                  <div
                    id={style.addressRem}
                    className={`flex-center ${
                      isReadyToAnimate() ? partialAnimiClasses.root : undefined
                    }`}
                    style={{
                      animationDelay: `1.2s`,
                      flexDirection: "row-reverse",
                      borderLeft:
                        Router.locale == "ar"
                          ? "1px solid rgba(223, 223, 223, 0.89)"
                          : "unset",
                      borderRight:
                        Router.locale == "ar"
                          ? "unset"
                          : "1px solid rgba(223, 223, 223, 0.89)",
                      paddingLeft: Router.locale == "ar" ? "20px" : "unset",
                      paddingRight: Router.locale == "ar" ? "unset" : "20px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      <Typography
                        className={style.widthResponsive}
                        componet="span"
                        sx={{
                          fontSize: { xs: "10px", md: "12px" },
                          letterSpacing: "0px",
                        }}
                        style={{ color: "#BABABA" }}
                      >
                        {
                          socialMediaLinks.find(
                            ({ channel }) => channel == "Address"
                          ).value
                        }
                      </Typography>

                      <Typography
                        className={style.hResponsive}
                        // style={{ fontSize: "16px" }}
                      >
                        {t("Our Location")}
                      </Typography>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() =>
                        window.open(
                          `https://www.google.com/maps/@${locationOnMapCordinates.lat},${locationOnMapCordinates.lng},19z`,
                          "_blank"
                        )
                      }
                      color={theme?.primaryColor}
                      style={{
                        cursor: "pointer",
                        fontSize: "24px",
                        marginRight: Router.locale == "ar" ? "unset" : "20px",
                        marginLeft: Router.locale == "ar" ? "20px" : "unset",
                      }}
                      width="15"
                      height="24"
                      viewBox="0 0 15 24"
                      fill="none"
                    >
                      <path
                        d="M9.08649 17.1341L12.971 10.888C12.9837 10.8678 12.9943 10.8466 13.0026 10.8246C13.6733 9.7307 14.0275 8.48112 14.0275 7.20537C14.0275 3.37812 10.9138 0.264404 7.08661 0.264404C3.2594 0.264404 0.145453 3.37812 0.145453 7.20537C0.145453 8.48138 0.500141 9.73148 1.17143 10.8261C1.1792 10.8453 1.18827 10.864 1.19915 10.8821L4.94423 17.1497C2.03704 17.5606 0.125244 18.756 0.125244 20.2061C0.125244 22.0029 3.17857 23.41 7.07625 23.41C10.9739 23.41 14.0273 22.0027 14.0273 20.2061C14.0275 18.7493 12.0266 17.5272 9.08649 17.1341ZM1.86915 10.4761C1.24993 9.49053 0.922709 8.35961 0.922709 7.20537C0.922709 3.80666 3.68767 1.04167 7.08661 1.04167C10.4853 1.04167 13.2503 3.80666 13.2503 7.20537C13.2503 8.36013 12.923 9.49105 12.3041 10.4761C12.2911 10.4968 12.2805 10.5183 12.2719 10.5406L8.16803 17.1388C8.10637 17.2334 8.09419 17.2549 8.0188 17.3787L6.98246 19.0452L1.90387 10.5461C1.8948 10.522 1.88314 10.4984 1.86915 10.4761ZM7.07651 22.6328C3.43817 22.6328 0.902759 21.3537 0.902759 20.2061C0.902759 19.1646 2.81222 18.1832 5.38053 17.8793L6.64228 19.9911C6.71197 20.1074 6.83685 20.1792 6.97235 20.1802C6.97339 20.1802 6.97469 20.1802 6.97572 20.1802C7.10993 20.1802 7.23481 20.1108 7.3058 19.9968L8.63231 17.864C11.2416 18.1467 13.25 19.153 13.25 20.2061C13.2503 21.3539 10.7148 22.6328 7.07651 22.6328Z"
                        fill="#5B8A64"
                      />
                      <path
                        d="M9.60024 7.20542C9.60024 5.81386 8.46803 4.68164 7.07649 4.68164C5.68494 4.68164 4.55273 5.81386 4.55273 7.20542C4.55273 8.59698 5.68494 9.72919 7.07649 9.72919C8.46803 9.72919 9.60024 8.59698 9.60024 7.20542ZM5.32999 7.20542C5.32999 6.24239 6.11347 5.4589 7.07649 5.4589C8.03951 5.4589 8.82298 6.24239 8.82298 7.20542C8.82298 8.16845 8.03977 8.95193 7.07649 8.95193C6.11321 8.95193 5.32999 8.16845 5.32999 7.20542Z"
                        fill="#5B8A64"
                      />
                    </svg>
                  </div>
                )}
                {socialMediaLinks?.find(({ channel }) => channel == "Phone")
                  ?.value && (
                  <div
                    id={style.heightResponsive}
                    className={`flex-center ${
                      isReadyToAnimate() ? partialAnimiClasses.root : undefined
                    }`}
                    style={{
                      animationDelay: `1.24s`,
                      flexDirection: "row-reverse",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      borderLeft:
                        Router.locale == "ar"
                          ? "1px solid rgba(223, 223, 223, 0.89)"
                          : "unset",
                      borderRight:
                        Router.locale == "ar"
                          ? "unset"
                          : "1px solid rgba(223, 223, 223, 0.89)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      <Typography
                        className={style.widthHresponsive}
                        id={style.sizeSpan}
                        componet="span"
                        sx={{
                          fontSize: { xs: "10px", md: "12px" },
                          letterSpacing: "0px",
                        }}
                        style={{ color: "#BABABA" }}
                      >
                        {
                          socialMediaLinks.find(
                            ({ channel }) => channel == "Phone"
                          ).value
                        }
                      </Typography>

                      <Typography
                        className={style.hResponsive}
                        // style={{ fontSize: "16px" }}
                      >
                        {t("call us")}
                      </Typography>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() =>
                        window.open(
                          `tel:${
                            socialMediaLinks.find(
                              ({ channel }) => channel == "Phone"
                            ).value
                          }`,
                          "_self"
                        )
                      }
                      color={theme?.primaryColor}
                      style={{
                        cursor: "pointer",
                        fontSize: "24px",
                        marginRight: Router.locale == "ar" ? "unset" : "20px",
                        marginLeft: Router.locale == "ar" ? "20px" : "unset",
                      }}
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M15.4598 14.987L14.7897 15.9923C14.6559 16.1929 14.479 16.3641 14.2459 16.4257C13.4822 16.6275 11.4548 16.7186 8.36807 13.6319C5.28136 10.5452 5.37246 8.51774 5.57425 7.75407C5.63585 7.52093 5.80706 7.34402 6.0077 7.21026L7.01292 6.54011C7.76134 6.04117 7.96357 5.02999 7.46463 4.28158L5.5661 1.43378C5.1306 0.780538 4.29105 0.530962 3.56942 0.84023L2.71299 1.20727C2.06239 1.4861 1.53168 1.98651 1.21513 2.61961C0.950663 3.14855 0.745681 3.70555 0.717908 4.29626C0.630385 6.15784 1.03858 10.7442 6.14718 15.8528C11.2558 20.9614 15.8421 21.3696 17.7037 21.2821C18.2944 21.2543 18.8514 21.0493 19.3803 20.7848C20.0135 20.4683 20.5139 19.9376 20.7927 19.287L21.1597 18.4305C21.469 17.7089 21.2194 16.8694 20.5662 16.4339L17.7184 14.5353C16.97 14.0364 15.9588 14.2386 15.4598 14.987Z"
                        stroke="#5B8A64"

                        // style={{fontSize:'24px'}}
                      />
                    </svg>
                  </div>
                )}
                {socialMediaLinks?.find(({ channel }) => channel == "Email")
                  ?.value && (
                  <div
                    id={style.colReverse}
                    className={`flex-center ${
                      isReadyToAnimate() ? partialAnimiClasses.root : undefined
                    }`}
                    style={{
                      animationDelay: `1.28s`,
                      flexDirection: "row-reverse",
                      paddingLeft: Router.locale == "ar" ? "unset" : "20px",
                      paddingRight: Router.locale == "ar" ? "20px" : "unset",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                      }}
                    >
                      <Typography
                        className={style.widthResponsive}
                        componet="span"
                        sx={{
                          fontSize: { xs: "10px", md: "12px" },
                          letterSpacing: "0px",
                        }}
                        style={{ color: "#BABABA" }}
                      >
                        {
                          socialMediaLinks.find(
                            ({ channel }) => channel == "Email"
                          ).value
                        }
                      </Typography>

                      <Typography
                        className={style.hResponsive}
                        // style={{ fontSize: "16px" }}
                      >
                        {t("email")}
                      </Typography>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() =>
                        window.open(
                          `mailto:${
                            socialMediaLinks.find(
                              ({ channel }) => channel == "Email"
                            ).value
                          }`,
                          "_self"
                        )
                      }
                      color={theme?.primaryColor}
                      style={{
                        cursor: "pointer",
                        fontSize: "24px",
                        marginRight: Router.locale == "ar" ? "unset" : "20px",
                        marginLeft: Router.locale == "ar" ? "20px" : "unset",
                      }}
                      width="26"
                      height="19"
                      viewBox="0 0 26 19"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.64103 0.227539C2.12363 0.227539 0.801025 1.36536 0.801025 2.85552V15.6234C0.801025 17.1135 2.12363 18.2514 3.64103 18.2514H22.361C23.8784 18.2514 25.201 17.1135 25.201 15.6234V2.85552C25.201 1.36536 23.8784 0.227539 22.361 0.227539H3.64103ZM1.80103 2.85552C1.80103 2.0049 2.58442 1.22754 3.64103 1.22754H22.361C23.4176 1.22754 24.201 2.0049 24.201 2.85552V15.6234C24.201 16.474 23.4176 17.2514 22.361 17.2514H3.64103C2.58442 17.2514 1.80103 16.474 1.80103 15.6234V2.85552ZM13.0017 10.3053L22.3617 4.9854V2.85742L13.0017 8.17736L3.64172 2.85742V4.9854L13.0017 10.3053Z"
                        fill="#5B8A64"
                      />
                    </svg>
                  </div>
                )}
                <div
                  id={style.languageResponsive}
                  className={`flex-center ${
                    isReadyToAnimate() ? partialAnimiClasses.root : undefined
                  }`}
                  style={{
                    animationDelay: `1.32s`,
                    position: "relative",
                    justifyContent: "flex-end",
                    paddingLeft: Router.locale == "ar" ? "unset" : "40px",
                    marginRight: Router.locale == "ar" ? "40px" : "unset",
                  }}
                >
                  <Tooltip title="Languages">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Image
                        src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/${
                          flagsEnum[Router.locale]
                        }.svg`}
                        width={20}
                        height={20}
                        priority
                      />
                    </IconButton>
                  </Tooltip>
                  <Typography
                    variant="subtitle2"
                    component="span"
                    color={
                      headerType == headerTypes.colored ? "primary" : "black"
                    }
                    sx={{ mx: "5px" }}
                  >
                    {langsEnum[Router.locale]}
                  </Typography>
                </div>
              </div>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                disableScrollLock={true}
              >
                {languages.map((language) => (
                  <MenuItem key={language.value} onClick={handleCloseNavMenu}>
                    <Link
                      textAlign="center"
                      href={Router.asPath}
                      locale={language.value}
                    >
                      <Typography textAlign="center">
                        {language.name}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              mt: { xs: 2, md: 3 },
              position: "relative",
              justifyContent: "space-between",
            }}
            id="navParentContainer"
          >
            <Grid
              item
              xs={0}
              md={10}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <MenuBuilder
                navList={newNavBarItems}
                theme={theme}
                isReadyToAnimate={isReadyToAnimate}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              sx={{
                display: "flex",
                justifyContent: { xs: "space-between", lg: "flex-end" },
                alignItems: "center",
              }}
              id="socialMediaSectionContainer"
            >
              {/* for mobile */}
              <Box
                sx={{
                  display: {
                    xs: "flex",
                    md: "none",
                  },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  className={
                    isReadyToAnimate() ? partialAnimiClasses.root : undefined
                  }
                  style={{ animationDelay: `1.36s` }}
                  sx={{
                    color:
                      scrollTop == false
                        ? headerType == headerTypes.colored
                          ? "black"
                          : "black"
                        : "",
                    padding: "0px",
                  }}
                  onClick={toggleMobileMenu}
                >
                  <MenuIcon />
                </IconButton>
                <MobileSideMenu
                  navItems={newNavBarItems}
                  theme={theme}
                  toggle={toggleMobileMenu}
                  isSideMenuOpen={isSideMenuOpen}
                />
              </Box>
              <Box
                className={style.responsiveSocial}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                {socialMediaLinks && renderSocialMediaList()}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
export default Header;
