import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { toast } from "react-toastify";
import { getFetch, postFetch } from "../../../services/httpService";
import { FOOTER, PostFooterSubscribe } from "../../../services/endpoints";
import {
  Grid,
  Typography,
  Container,
  Box,
  Button,
  TextField,
} from "@mui/material";
import LocationIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";
import Waves from "../WavesAnimation";
import useStyles from "./style";

const Footer = ({ theme }) => {
  const classes = useStyles();
  const router = useRouter();
  let { t } = useTranslation("common");
  const [fullData, setFullData] = useState();
  const [email, setEmail] = useState("");

  // Function for reshape data from API response
  const reShapeData = (data) => {
    let columnsData = {
      firstRow: {
        logo: data?.logo,
        description: data?.footer?.content?.personalInfo?.active // if so, Description will be shown
          ? data?.footer?.content?.personalInfo?.description
          : "",
      },
      secondRow: [
        // If Personal info is active, it will be shown as a first column
        data?.footer?.content?.personalInfo?.active && {
          columnName: "PersonalInfo",
          title: "Personal Info",
          locationTitle: data?.footer?.content?.personalInfo?.location,
          locationOnMapCordinates: {
            lat: data?.contacts?.find((item) => item.channel == "Lat")?.value,
            lng: data?.contacts?.find((item) => item.channel == "Lng")?.value,
          },
          phone: data?.footer?.content?.personalInfo?.phone,
        },
        // If Subscribe info is active, it will be shown as a second column
        data?.footer?.content?.subscribe?.active && {
          columnName: "StayConnected",
          title: data?.footer?.content?.subscribe?.title,
        },
        // If SocialMedia info is active, it will be shown as a third column
        data?.footer?.content?.socialMedia?.active && {
          columnName: "SocialMedia",
          title: "Social Media",
          contacts: [
            ...data?.contacts?.filter(
              (item) => item.channel != "Lat" && item.channel != "Lng"
            ),
          ],
        },
        // If there are UsefullLinks, they will be shown as a fourth column
        data?.usefullLinks?.length && {
          columnName: "Links",
          title: "Links",
          links: [...data?.usefullLinks],
        },
      ].filter((item) => item), // filtering is so important for checking the length value later
    };
    return columnsData;
  };

  const handleOpenGoogleMaps = (locationOnMapCordinates) => {
    const { lat, lng } = locationOnMapCordinates;
    if (lat && lng)
      window.open(`https://www.google.com/maps/@${lat},${lng},19z`, "_blank");
  };
  const handleMakeCall = (phoneNumber) => {
    if (phoneNumber) window.open(`tel:${phoneNumber}`, "_self");
  };
  const handleOpenLink = (link) => {
    if (link) window.open(link, "_blank");
  };
  const handleOpenEmail = (email) => {
    if (email) window.open(`mailto:${email}`, "_self");
  };

  const handleDispalySocialMediaItem = (socialMediaItem) => {
    const { channel, contactUsId, value } = socialMediaItem;
    switch (channel) {
      case "Email":
        return (
          <Typography
            key={contactUsId}
            className={classes.columnItemTitle}
            variant="subtitle1"
            onClick={() => handleOpenEmail(value)}
          >
            <EmailIcon className={classes.emailIcon} />
            {value}
          </Typography>
        );
      case "Facebook":
        return (
          <Typography
            key={contactUsId}
            className={classes.columnItemTitle}
            variant="subtitle1"
            onClick={() => handleOpenLink(value)}
          >
            <FacebookIcon className={classes.facebookIcon} />
            {channel}
          </Typography>
        );
      case "Instagram":
        return (
          <Typography
            key={contactUsId}
            className={classes.columnItemTitle}
            variant="subtitle1"
            onClick={() => handleOpenLink(value)}
          >
            <InstagramIcon className={classes.instagramIcon} />
            {channel}
          </Typography>
        );
      case "WhatsApp":
        return (
          <Typography
            key={contactUsId}
            className={classes.columnItemTitle}
            variant="subtitle1"
            onClick={() => handleOpenLink(value)}
          >
            <WhatsAppIcon className={classes.whatsAppIcon} />
            {channel}
          </Typography>
        );
      case "Twitter":
        return (
          <Typography
            key={contactUsId}
            className={classes.columnItemTitle}
            variant="subtitle1"
            onClick={() => handleOpenLink(value)}
          >
            <TwitterIcon className={classes.twitterIcon} />
            {channel}
          </Typography>
        );
      case "Address":
        return (
          <Typography
            key={contactUsId}
            className={classes.columnItemTitle}
            variant="subtitle1"
          >
            <BusinessIcon className={classes.businessIcon} />
            {value}
          </Typography>
        );
      case "Phone":
        return (
          <Typography
            key={contactUsId}
            className={classes.columnItemTitle}
            variant="subtitle1"
            onClick={() => handleMakeCall(value)}
          >
            <PhoneIcon className={classes.phoneIcon} />
            {value}
          </Typography>
        );

      default:
        return <Fragment />;
    }
  };

  useEffect(async () => {
    let res = await getFetch(
      FOOTER,
      process.env.NEXT_PUBLIC_MERCHANT,
      router.locale
    );
    let { data } = await res?.json();
    setFullData(reShapeData(data));
  }, []);

  const SendEmail = async () => {
    let res = await postFetch(
      PostFooterSubscribe,
      process.env.NEXT_PUBLIC_MERCHANT,
      { email: email }
    );
    let data = await res?.json();
    setEmail("");
    if (data?.status == 200) toast.success("Subscribe successfully");
  };

  return (
    <Box className={classes.root}>
      <Waves />
      <Box className={classes.mainFooterContainer}>
        <Container maxWidth="false" className={classes.innerContainer}>
          <Grid container className={classes.firstRowContainer}>
            <Grid item xs={12} md={4} className={classes.logoContainer}>
              <img
                className={classes.logoImage}
                src={fullData?.firstRow?.logo}
                alt="logoImage"
              />
            </Grid>
            <Grid item xs={12} md={8} className={classes.descriptionContainer}>
              <Typography className={classes.description}>
                {fullData?.firstRow?.description}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} className={classes.secondRowContainer}>
            {fullData?.secondRow?.map((column, ind, arr) => (
              <Grid
                item
                key={column.columnName}
                xs={12}
                sm={6}
                md={12 / arr.length} // calculating how many columns should it take
              >
                {/** First Column */}
                {column.columnName == "PersonalInfo" && (
                  <Box className={classes.ColumnContainer}>
                    <Typography className={classes.columnTitle} variant="h6">
                      {t(column.title)}
                    </Typography>
                    <Typography
                      className={classes.columnItemTitle}
                      variant="subtitle1"
                      onClick={() =>
                        handleOpenGoogleMaps(column.locationOnMapCordinates)
                      }
                    >
                      <LocationIcon className={classes.locationIcon} />
                      {column.locationTitle}
                    </Typography>
                    <Typography
                      className={classes.columnItemTitle}
                      variant="subtitle1"
                      onClick={() => handleMakeCall(column.phone)}
                    >
                      <PhoneIcon className={classes.phoneIcon} />
                      {column.phone}
                    </Typography>
                  </Box>
                )}
                {/** end of First Column */}
                {/** Second Column */}
                {column.columnName == "StayConnected" && (
                  <Box className={classes.ColumnContainer}>
                    <Typography className={classes.columnTitle} variant="h6">
                      {column.title}
                    </Typography>
                    <TextField
                      type="email"
                      size="small"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button variant="contained" onClick={SendEmail}>
                      {t("Subscribe")}
                    </Button>
                  </Box>
                )}
                {/** end of Second Column */}
                {/** Third Column */}
                {column.columnName == "SocialMedia" && (
                  <Box className={classes.ColumnContainer}>
                    <Typography className={classes.columnTitle} variant="h6">
                      {t(column.title)}
                    </Typography>
                    {column.contacts.map((contact) =>
                      handleDispalySocialMediaItem(contact)
                    )}
                  </Box>
                )}
                {/** end of Third Column */}
                {/** Fourth Column */}
                {column.columnName == "Links" && (
                  <Box className={classes.ColumnContainer}>
                    <Typography className={classes.columnTitle} variant="h6">
                      {t(column.title)}
                    </Typography>
                    {column.links.map((link) => (
                      <Typography
                        key={link.id}
                        className={classes.columnLinkTitle}
                        variant="subtitle1"
                        onClick={() => handleOpenLink(link.url)}
                      >
                        {link.title}
                      </Typography>
                    ))}
                  </Box>
                )}
                {/** end of Fourth Column */}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
export default Footer;
