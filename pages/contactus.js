import Head from "next/head";
import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import { getFetch, postFetch } from "../services/httpService";
import { GET_CONTACT, PostSendEmail } from "../services/endpoints";
import MainCover from "../components/Shared/pageCover/mainCover/Type2";
import {
  checkLoadImages,
  getSEOKeywordsContent,
} from "../utilies/utiliesFuctions";
import MapCard from "../components/pages/ContactUs/mapCard";
import {
  Grid,
  Typography,
  Container,
  Box,
  TextField,
  Button,
  TextareaAutosize,
  Stack,
  Paper,
} from "@mui/material";
import InfoSection from "../components/pages/ContactUs/InfoSection";
import CustomLoader from "../components/Shared/customLoader";
import useStyles from "../components/pages/ContactUs/style";

export default function ContactUs({ data, theme, headerType }) {
  let { t } = useTranslation("common");
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({
    title: data?.data?.pageDetail?.title,
    description: data?.data?.pageDetail?.description,
    image: data?.data?.pageDetail?.image,
    breadcrumbs: [
      {
        title: t("home"),
        link: "/",
      },
      {
        title: data?.data?.pageDetail?.title,
        link: "",
      },
    ],
    headerType: headerType,
  });

  const SendEmail = async () => {
    let res = await postFetch(PostSendEmail, process.env.NEXT_PUBLIC_MERCHANT, {
      Name: name,
      Mobile: mobile,
      Email: email,
      Body: body,
    });
    let data = await res?.json();
    if (data?.status == 200) toast.success("Subscribe successfully");
  };
  useEffect(() => {
    checkLoadImages(setLoading);
  }, []);

  return (
    <div>
      <div className={!loading ? "none" : undefined}>
        <CustomLoader />
      </div>
      <div className={loading ? "hidden" : undefined}>
        <MainCover
          breadcrumbs={pageInfo.breadcrumbs}
          title={pageInfo.title}
          description={pageInfo.description}
          image={pageInfo.image}
          headerType={headerType}
        />
        <Box className={classes.root}>
          <Container maxWidth="false" className={classes.innerConatiner}>
            <Head>
              <title>{pageInfo.title}</title>
              <meta
                name="keywords"
                content={getSEOKeywordsContent(data?.data?.pageDetail?.seoTags)}
              />
              <meta
                name="description"
                content={data?.data?.pageDetail?.seoDescription}
              />
            </Head>
            <InfoSection data={data?.data?.pageItems?.channels} />
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              className={classes.secondSectionContainer}
            >
              <Paper className={classes.formContainer}>
                <Typography variant="h6" className={classes.formTitle}>
                  {t("leaveMessage")}
                </Typography>
                <Box className={classes.inputsContainer}>
                  <TextField
                    id="contactName"
                    placeholder={t("namePlace")}
                    variant="outlined"
                    size="small"
                    className={classes.inputField}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    id="contactemail"
                    placeholder={t("emailPlace")}
                    variant="outlined"
                    size="small"
                    className={classes.inputField}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    id="contactphone"
                    placeholder={t("phonePlace")}
                    variant="outlined"
                    size="small"
                    className={classes.inputField}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                  <TextareaAutosize
                    id="contactName"
                    placeholder={t("messagePlace")}
                    minRows={4}
                    className={`${classes.inputAreaField}`}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    fullWidth
                    className={classes.submitButton}
                    onClick={SendEmail}
                  >
                    {t("send")}
                  </Button>
                </Box>
              </Paper>
              <Box className={classes.imageContainer} />
            </Stack>
            <Grid container sx={{ mt: 5 }}>
              <Grid item xs={12}>
                <MapCard
                  lat={data?.data?.pageItems?.map?.lat}
                  lng={data?.data?.pageItems?.map?.lng}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </div>
  );
}
export async function getStaticProps({ locale }) {
  const res = await getFetch(
    GET_CONTACT,
    process.env.NEXT_PUBLIC_MERCHANT,
    locale
  );
  const data = await res?.json();
  return {
    props: {
      data: data || "",
    },
  };
}
