import { Grid } from "@mui/material";
import { Typography, Container, Box, Button, TextField } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { checkLoadImages } from "../utilies/utiliesFuctions";
import { FOOTER, PostFooterSubscribe } from "../services/endpoints";
import { useEffect, useState } from "react";
import useFetch from "./useFetch/useFetch";
import ContactIcons from "./homePage/contactIcons";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { toast } from "react-toastify";
import style from "../styles/footer/style.module.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import Router from "next/router";
import { useRouter } from "next/router";
import * as yup from "yup";
import { useFormik } from "formik";

function Footer(props) {
  const router = useRouter();
  const { theme } = props;
  let { t, lang } = useTranslation("common");
  const [footerApi, setFooterApi] = useState();
  const [showIcons, setShowIcons] = useState(false);
  // const [loading, setLoading] = useState(true);
  const [getFetch, postFetch] = useFetch();
  const handleScroll = () => {
    if (window.scrollY <= 100 || window.scrollY > 2400) setShowIcons(false);
    if (window.scrollY > 100) setShowIcons(true);
  };
  useEffect(() => {
    if (typeof window === "object")
      document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(async () => {
    let res = await getFetch(FOOTER, process.env.NEXT_PUBLIC_MERCHANT);
    let data = await res?.json();
    setFooterApi(data);
  }, []);

  const SendEmail = async (email, handleReset) => {
    let res = await postFetch(
      PostFooterSubscribe,
      process.env.NEXT_PUBLIC_MERCHANT,
      { email: email }
    );
    let data = await res?.json();
    if (data?.code == 200 && data.isSuccess) {
      toast.success("Subscribe successfully");
      handleReset();
    }
  };

  const alllists = [
    {
      logo: theme?.logo,
      itemOne: footerApi?.data?.footer?.content?.personalInfo?.description,
    },
    ,
    // footerApi?.data?.footer?.content?.subscribe?.active == true && {
    //   title: "Stayupdated",
    //   subscripe: "enabled",
    // }
    footerApi?.data?.footer?.content?.socialMedia?.active == true && {
      title: t("ContactInfo"),
      // SocialFace: "Facebook",
      // SocilaInst: "Instagram",
      // SocialTwit: "Twitter",
      location: footerApi?.data?.footer?.content?.personalInfo?.location,
      phone: footerApi?.data?.footer?.content?.personalInfo?.phone,
      Email: footerApi?.data?.contacts?.find(
        (contact) => contact.channel == "Email"
      )?.value,
      social: "social",
    },
  ];
  const lists = alllists.filter((item) => item != false);

  const locationOnMapCordinates = {
    lat: footerApi?.data?.contacts?.find((item) => item.channel == "Lat")
      ?.value,
    lng: footerApi?.data?.contacts?.find((item) => item.channel == "Lng")
      ?.value,
  };
  // useEffect(() => {
  //   checkLoadImages(setLoading);
  // }, []);
  const newDescription =
    footerApi?.data?.footer?.content?.personalInfo?.description?.split("\n");

  // conditional styles for SVG used in the Contact Info section
  const getAppropriateSvgPosition = () => {
    let firstPart = {
      top: "17px",
    };
    let secondPart = {
      bottom: "-5px",
    };
    switch (Router.locale) {
      case "en":
        return {
          firstPart: { ...firstPart, left: "97px" },
          secondPart: { ...secondPart, left: "35px" },
        };
        break;
      case "de":
        return {
          firstPart: {
            ...firstPart,
            left: "unset",
          },
          secondPart: {
            ...secondPart,
            left: "110px",
          },
        };
        break;
      case "ar":
        return {
          firstPart: {
            ...firstPart,
            transform: "rotateY(-180deg)",
            left: "unset",
          },
          secondPart: { ...secondPart, right: "50px" },
        };
        break;

      default:
        return {
          firstPart: {
            ...firstPart,
            left: "97px",
          },
          secondPart: { ...secondPart, left: "35px" },
        };
        break;
    }
  };

  const initialValues = {
    email: "",
  };

  const formSchema = yup.object({
    email: yup.string().email().required("Required"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: (values, actions) => SendEmail(values.email, actions.resetForm),
  });

  return (
    <div>
      {showIcons == true && <ContactIcons links={footerApi?.data?.contacts} />}
      <Box
        sx={{
          backgroundColor: "background.main",
          pt: "40px",
          position: "relative",
          backgroundImage: "url('/images/Rectangle 1909123441.png')",
        }}
      >
        <Container maxWidth="lg" sx={{ marginBottom: "50px" }}>
          <div>
            <Box
              style={{
                position: "relative",
                // borderBottom: '1px solid rgba(0, 0, 0, 0.52)'

                marginBottom: "80px",
              }}
            >
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  className="styleplaceholder"
                  InputLabelProps={{
                    style: {
                      fontSize: "25px",
                      bottom: "20px",
                      top: "unset",
                      left: router.locale == "ar" ? "unset" : "0",
                      right: router.locale == "ar" ? "0" : "unset",
                    },
                  }}
                  fullWidth
                  type="email"
                  label={t("YourEmail")}
                  variant="standard"
                  style={{
                    fontWeight: "400",
                    fontSize: "40px",
                    lineHeight: "48px",
                  }}
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={
                    formik.touched["email"] && Boolean(formik.errors["email"])
                  }
                  helperText={formik.touched["email"] && formik.errors["email"]}
                />
                <Button
                  className={style.footerSubmit}
                  type="submit"
                  style={{
                    position: "absolute",
                    top: "-3px",
                    left: router.locale == "ar" ? "0" : "unset",
                    right: router.locale == "ar" ? "unset" : "0",
                    width: "130px",
                    height: "48px",
                    // backgroundColor: "primary.main",
                    // color: 'onPrimary.main'
                  }}
                  sx={{
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
                  {t("Subscribe")}
                </Button>
              </form>

              <Typography
                className={style.desFooter}
                style={{
                  position: "absolute",
                  bottom: "-35px",
                  fontWeight: "400",
                  fontSize: "17px",
                  lineHeight: "24px",
                  color: "rgba(0, 0, 0, 0.52)",
                }}
              >
                {t("ToReceiveOurUpdatesViaEmail")}
              </Typography>
            </Box>

            <Grid container sx={{ background: "primary.main", width: "75%" }}>
              {lists.map((item, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    md={lists.length == 3 ? 4 : lists.length == 2 ? 6 : 12}
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {Object.entries(item).map(([key, value]) => (
                      <div key={key}>
                        {key == "logo" && value ? (
                          <Image
                            src={value}
                            width={100}
                            height={48}
                            style={{ marginBottom: "38px" }}
                          />
                        ) : key == "title" ? (
                          <Typography
                            variant="h6"
                            color="onBackground.main"
                            component="h6"
                            style={{ position: "relative" }}
                            sx={{
                              mb: { xs: "15px", md: "38px" },
                              mt: { xs: "25px", md: "10px" },
                              fontWeight: "400",
                              fontSize: "20px",
                              lineHeight: "36px",
                            }}
                          >
                            {t(value)}
                            <svg
                              className={style.svgOne}
                              xmlns="http://www.w3.org/2000/svg"
                              width="26"
                              height="24"
                              viewBox="0 0 26 24"
                              fill="none"
                              color={theme?.primaryColor}
                              // style={{
                              //   top: "17px",
                              //   transform:
                              //     router.locale == "ar"
                              //       ? "rotateY(-180deg)"
                              //       : "unset",
                              //   left: router.locale == "ar" ? "unset" : "97px",
                              // }}
                              style={getAppropriateSvgPosition().firstPart}
                            >
                              <path
                                d="M25.0008 0.512998C24.0183 -0.224203 22.6934 -0.164135 21.7881 0.665899L21.7605 0.687742L11.7966 11.3471C10.0081 11.3799 8.5121 11.9915 7.35287 13.1765C6.69045 13.8536 6.23779 14.6727 5.9121 15.3171C5.53121 16.0761 5.18896 16.8516 4.86327 17.5997C4.68662 18.0092 4.50446 18.4133 4.32229 18.8229C3.70403 20.1717 3.01401 21.0618 2.0811 21.6953L0 23.0659C0 23.0659 2.04246 23.8796 4.44926 23.9942C4.77495 24.0106 5.10064 23.9942 5.42081 23.9615C7.94904 23.6939 10.4994 23.4318 13 22.4543C15.5614 21.455 17.2561 19.1888 17.3333 16.7424C17.3333 16.7096 17.3333 16.6768 17.3333 16.6441L25.6743 3.69116L25.7185 3.62017C26.2815 2.52802 25.9834 1.2502 25.0008 0.512998ZM12.183 20.8379C9.46709 21.8973 6.70701 22.3724 3.96348 22.2468C4.86879 21.3294 5.40425 20.3082 5.75754 19.5383C5.95074 19.1232 6.13291 18.6973 6.30955 18.2877C6.62972 17.5615 6.95541 16.8079 7.31423 16.098C7.58471 15.5683 7.95456 14.8966 8.44586 14.3888C9.29045 13.5205 10.411 13.0836 11.7745 13.0836C11.7911 13.0836 11.8132 13.0836 11.8297 13.0836C12.9393 13.0946 13.817 13.4495 14.5125 14.1758C14.5125 14.1758 14.921 14.5908 15.1418 15.1642C15.2522 15.4536 15.3406 15.7376 15.3737 15.9942C15.6386 18.0092 14.3304 20.0024 12.183 20.8379ZM24.1673 2.79559L16.8476 14.1649C16.82 14.0939 16.8034 14.0502 16.8034 14.0502C16.1355 12.5321 13.9163 11.6584 13.9163 11.6584C13.9108 11.6584 13.9108 11.6584 13.9053 11.6529L22.997 1.92733C23.4166 1.56692 23.8195 1.81812 23.9355 1.90003C24.0514 1.9874 24.3991 2.29866 24.1673 2.79559Z"
                                fill={theme?.primaryColor}
                              />
                            </svg>
                            <svg
                              // style={{
                              //   bottom: "-5px",
                              //   left: router.locale == "ar" ? "unset" : "35px",
                              //   right: router.locale == "ar" ? "50px" : "unset",
                              // }}
                              style={getAppropriateSvgPosition().secondPart}
                              className={style.svgTwo}
                              xmlns="http://www.w3.org/2000/svg"
                              width="62"
                              height="2"
                              viewBox="0 0 62 2"
                              fill="none"
                              color={theme?.primaryColor}
                            >
                              <path
                                d="M62 1L0 1"
                                stroke={theme?.primaryColor}
                              />
                            </svg>
                          </Typography>
                        ) : key == "location" ? (
                          <div
                            className={style.flexStart}
                            style={{
                              flexDirection: "row",
                              justifyContent: "start",
                            }}
                            onClick={() =>
                              window.open(
                                `https://www.google.com/maps/@${locationOnMapCordinates.lat},${locationOnMapCordinates.lng},19z`,
                                "_blank"
                              )
                            }
                          >
                            <LocationOnIcon
                              style={{
                                fill: theme?.primaryColor,
                                fontSize: "20px",
                              }}
                            />
                            <Typography
                              variant="body2"
                              color="onBackground.main"
                              sx={{
                                lineHeight: "1.1",
                                textDecoration: "none",
                                cursor: "pointer",
                                padding: "0px 20px",
                              }}
                            >
                              {value}
                            </Typography>
                          </div>
                        ) : key == "phone" ? (
                          <div
                            className={style.flexStart}
                            style={{
                              flexDirection: "row",
                              justifyContent: "start",
                            }}
                          >
                            <PhoneIcon
                              style={{
                                fill: theme?.primaryColor,
                                fontSize: "20px",
                              }}
                            />
                            <Typography
                              variant="body1"
                              color="onBackground.main"
                              sx={{
                                lineHeight: "1.1",
                                padding: "0px 20px",
                                textDecoration: "none",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                window.open(`tel:${value}`, "_self")
                              }
                            >
                              {value}
                            </Typography>
                          </div>
                        ) : key == "Email" ? (
                          <div
                            className={style.flexStart}
                            style={{
                              flexDirection: "row",
                              justifyContent: "start",
                            }}
                          >
                            <EmailIcon
                              style={{
                                fill: theme?.primaryColor,
                                fontSize: "20px",
                              }}
                            />
                            <Typography
                              variant="body1"
                              color="onBackground.main"
                              sx={{
                                lineHeight: "1.1",
                                textDecoration: "none",
                                cursor: "pointer",
                                padding: "0px 20px",
                              }}
                              onClick={() =>
                                window.open(`mailto:${value}`, "_self")
                              }
                            >
                              {value}
                            </Typography>
                          </div>
                        ) : key == "location" ? (
                          <div
                            className={style.flexStart}
                            style={{
                              flexDirection: "row",
                              justifyContent: "start",
                            }}
                            onClick={() =>
                              window.open(
                                `https://www.google.com/maps/@${locationOnMapCordinates.lat},${locationOnMapCordinates.lng},19z`,
                                "_blank"
                              )
                            }
                          >
                            <LocationOnIcon
                              style={{
                                fill: theme?.primaryColor,
                                fontSize: "20px",
                              }}
                            />
                            <Typography
                              variant="body2"
                              color="onBackground.main"
                              sx={{
                                lineHeight: "1.1",
                                textDecoration: "underline",
                                cursor: "pointer",
                                padding: "0px 3px",
                              }}
                            >
                              {value}
                            </Typography>
                          </div>
                        ) : key == "phone" ? (
                          <div
                            className={style.flexStart}
                            style={{
                              flexDirection: "row",
                              justifyContent: "start",
                            }}
                          >
                            <PhoneIcon
                              style={{
                                fill: theme?.primaryColor,
                                fontSize: "20px",
                              }}
                            />
                            <Typography
                              variant="body1"
                              color="onBackground.main"
                              sx={{
                                lineHeight: "1.1",
                                padding: "0px 3px",
                                textDecoration: "underline",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                window.open(`tel:${value}`, "_self")
                              }
                            >
                              {value}
                            </Typography>
                          </div>
                        ) : key == "Email" ? (
                          <div
                            className={style.flexStart}
                            style={{
                              flexDirection: "row",
                              justifyContent: "start",
                            }}
                          >
                            <EmailIcon
                              style={{
                                fill: theme?.primaryColor,
                                fontSize: "20px",
                              }}
                            />
                            <Typography
                              variant="body1"
                              color="onBackground.main"
                              sx={{
                                lineHeight: "1.1",
                                textDecoration: "underline",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                window.open(`mailto:${value}`, "_self")
                              }
                            >
                              {value}
                            </Typography>
                          </div>
                        ) : key == "social" ? (
                          <div
                            className="flex-start"
                            style={{
                              flexDirection: "row",
                              marginBottom: "15px",
                              marginTop: "10px",
                            }}
                          >
                            {/* {footerApi?.data?.contacts.map((item) => {
                              return item.channel == "Facebook" ? (
                                <FacebookIcon
                                  style={{
                                    fill: theme?.primaryColor,
                                    cursor: "pointer",
                                    fontSize: "20px",
                                  }}
                                  onClick={() =>
                                    window.open(item?.value, "_blank")
                                  }
                                />
                              ) : item.channel == "Instagram" ? (
                                <InstagramIcon
                                  style={{
                                    fill: theme?.primaryColor,
                                    cursor: "pointer",
                                    fontSize: "20px",
                                  }}
                                  onClick={() =>
                                    window.open(item.value, "_blank")
                                  }
                                />
                              ) : item?.channel == "Twitter" ? (
                                <TwitterIcon
                                  style={{
                                    fill: theme?.primaryColor,
                                    cursor: "pointer",
                                    fontSize: "20px",
                                  }}
                                  onClick={() =>
                                    window.open(item.value, "_blank")
                                  }
                                />
                              ) : item.channel == "WhatsApp" ? (
                                <WhatsAppIcon
                                  style={{
                                    fill: theme?.primaryColor,
                                    cursor: "pointer",
                                    fontSize: "20px",
                                  }}
                                  onClick={() =>
                                    window.open(`${item.value}`, "_blank")
                                  }
                                />
                              ) : (
                                ""
                              );
                            })} */}
                          </div>
                        ) : (
                          newDescription?.map((str) => {
                            return (
                              <Typography
                                variant="body2"
                                color="onCard.dark"
                                component="h6"
                                sx={{
                                  lineHeight: "30px",
                                  whiteSpace: "wrap",
                                  width: "80%",
                                }}
                              >
                                {str}
                              </Typography>
                            );
                          })
                        )}
                      </div>
                    ))}
                  </Grid>
                );
              })}
            </Grid>
          </div>

          <div
            className="flex-start fixresponsive"
            id="fixresponsive"
            style={{
              flexDirection: "row",
              marginBottom: "15px",
              marginTop: "10px",
              position: "absolute",
            }}
          >
            {footerApi?.data?.contacts.map((item) => {
              return item.channel == "Facebook" ? (
                <FacebookIcon
                  style={{
                    fill: theme?.primaryColor,
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                  onClick={() => window.open(item?.value, "_blank")}
                />
              ) : item.channel == "Instagram" ? (
                <InstagramIcon
                  style={{
                    fill: theme?.primaryColor,
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                  onClick={() => window.open(item.value, "_blank")}
                />
              ) : item?.channel == "Twitter" ? (
                <TwitterIcon
                  style={{
                    fill: theme?.primaryColor,
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                  onClick={() => window.open(item.value, "_blank")}
                />
              ) : item.channel == "WhatsApp" ? (
                <WhatsAppIcon
                  style={{
                    fill: theme?.primaryColor,
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                  onClick={() => window.open(`${item.value}`, "_blank")}
                />
              ) : (
                ""
              );
            })}
          </div>
        </Container>

        <div className={style.lastLine}>
          <Typography
            variant="body1"
            component="p"
            color="#232323cc"
            align="center"
            sx={{ textAlign: "center", fontSize: { xs: "14px", md: "17px" } }}
          >
            All Rights Reserved To{" "}
            <Typography
              component="span"
              sx={{ fontWeight: "bold", fontSize: { xs: "14px", md: "17px" } }}
            >
              {footerApi?.data?.footer?.merchantName}
            </Typography>{" "}
            Powered By{" "}
            <Typography
              component="span"
              style={{
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: { xs: "14px", md: "17px" },
              }}
              onClick={() => window.open("https://meta-itech.com/", "_blank")}
            >
              Meta
            </Typography>
          </Typography>
        </div>
      </Box>
    </div>
  );
}
export default Footer;
