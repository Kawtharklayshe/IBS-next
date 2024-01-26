import Image from "next/image";
import MainCoverSection from "../components/mainCover";
import { checkLoadImages } from "../utilies/utiliesFuctions";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import MapCard from "../components/contactUs/mapCard";
import {
  Grid,
  Typography,
  Container,
  Box,
  TextField,
  Button,
  Card,
  TextareaAutosize,
  CardContent,
  CircularProgress,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import styles from "../styles/contact/style.module.css";
import Details from "../components/contactUs/detail.js";
import { GET_CONTACT } from "../services/endpoints";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { PostSendEmail } from "../services/endpoints";
import useFetch from "../components/useFetch/useFetch";
import CustomLoader from "../components/customLoader";
import { style } from "@mui/system";

export default function ContactUs({ data, theme, headerType }) {
  let { t } = useTranslation("common");
  const [getFetch, postFetch] = useFetch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pageInfo, setPageInfo] = useState({
    title: data?.data?.pageDetail?.title,
    description: data?.data?.pageDetail?.description,
    image: data?.data?.pageDetail?.image,
    breadcrumbs: [
      {
        title: "home",
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
    setIsSubmitting(true);
    let res = await postFetch(PostSendEmail, process.env.NEXT_PUBLIC_MERCHANT, {
      Name: name,
      Mobile: mobile,
      Email: email,
      Body: body,
    });
    let data = await res?.json();
    setIsSubmitting(false);
    if (!data?.isSuccess) toast.success("Sent successfully");
  };
  useEffect(() => {
    checkLoadImages(setLoading);
  }, []);
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "#fcfcfc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: "1000",
        }}
        className={!loading ? "none" : undefined}
      >
        <CustomLoader />
      </div>
      <div className={loading ? "hidden" : undefined}>
        <MainCoverSection
          breadcrumbs={pageInfo.breadcrumbs}
          title={pageInfo.title}
          description={pageInfo.description}
          image={pageInfo.image}
          headerType={headerType}
        />
        {/* <Details data={data?.data?.pageItems?.channels} /> */}
        <Box sx={{ backgroundColor: "background.main" }}>
          <Container
            className={styles.contactContainer}
            maxWidth="lg"
            sx={{ paddingBottom: "100px" }}
          >
            <Head>
              <title>{pageInfo.title}</title>
            </Head>
            <Details data={data?.data?.pageItems?.channels} />
            <Grid
              container
              spacing={6}
              className={styles.gridContainer}
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                boxShadow: "0px -3px 16px rgba(0, 0, 0, 0.12)",
              }}
            >
              <Grid item xs={12} md={7} style={{ padding: "0" }}>
                <Box
                  className={styles.detailCard}
                  sx={{
                    backgroundColor: "card.main",
                    color: "onCard.main",
                    // boxShadow: `0px 0px ${theme?.elevation}px`,
                    borderRadius: theme?.radius,
                  }}
                >
                  {/* <MapCard
                    lat={data?.data?.pageItems?.map?.lat}
                    lng={data?.data?.pageItems?.map?.lng}
                  /> */}

                  <img
                    className={styles.imgCon}
                    width="100%"
                    height="617px"
                    src="/images/Rectangle 1909123525.png"
                    alt=""
                  />
                  {/* <Details data={data?.data?.pageItems?.channels} /> */}
                  {/* <Box>
                    <div>
                      {data?.data?.pageItems?.whatsApp && (
                        <WhatsAppIcon
                          sx={{
                            mx: "4px",
                            color: "primary.main",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            window.open(
                              `${data?.data?.pageItems?.whatsApp}`,
                              "_blank"
                            )
                          }
                        />
                      )}
                      {data?.data?.pageItems?.telegram && (
                        <TelegramIcon
                          sx={{
                            mx: "4px",
                            color: "primary.main",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            window.open(
                              data?.data?.pageItems?.telegram,
                              "_blank"
                            )
                          }
                        />
                      )}

                       <TwitterIcon
                    sx={{ mx: "4px", color: "primary.main", cursor: "pointer" }}
                    onClick={() =>
                      window.open(data?., "_blank")
                    }
                  /> 
                      {data?.data?.pageItems?.facebook && (
                        <FacebookIcon
                          sx={{
                            mx: "4px",
                            color: "primary.main",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            window.open(
                              data?.data?.pageItems?.facebook,
                              "_blank"
                            )
                          }
                        />
                      )}
                    </div>
                  </Box> */}
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                sx={{ paddingRight: "48px", height: "617px" }}
              >
                <Typography
                  variant="h6"
                  color="onBackground.dark"
                  sx={{ mb: "20px" }}
                >
                  {t("leaveMessage")}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "35px",
                    justifyContent: "space-evenly",
                  }}
                >
                  <TextField
                    id="contactName"
                    placeholder={t("namePlace")}
                    variant="outlined"
                    size="small"
                    className={styles.input}
                    value={name}
                    onChange={(e) => setName(e?.currentTarget?.value)}
                  />
                  <TextField
                    id="contactemail"
                    placeholder={t("emailPlace")}
                    variant="outlined"
                    size="small"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />

                  <TextField
                    id="contactphone"
                    placeholder={t("phonePlace")}
                    variant="outlined"
                    size="small"
                    className={styles.input}
                    value={mobile}
                    onChange={(e) => setMobile(e.currentTarget.value)}
                  />
                  <Box sx={{ borderColor: "primary.main" }}>
                    <TextareaAutosize
                      id="contactName"
                      placeholder={t("messagePlace")}
                      size="400px"
                      minRows={5}
                      className={`${styles.inputArea} borderCol`}
                      style={{ fontSize: "18px" }}
                      value={body}
                      onChange={(e) => setBody(e.currentTarget.value)}
                    />
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      width: "137px",
                      height: "40px",
                      // borderRadius: "36px",
                      // borderRadius: theme?.radius,
                      color: "onPrimary.main",
                      backgroundColor: "primary.main",
                      border: "1px solid",
                      boxShadow: `0px 0px ${theme?.elevation}px`,
                      "&:hover": {
                        color: "primary.main",
                        backgroundColor: "transparent",
                        borderColor: "primary.main",
                      },
                      fontSize: "18px",
                      p: "3px 28px",
                    }}
                    disabled={isSubmitting}
                    onClick={SendEmail}
                  >
                    {t("send")}{" "}
                    {isSubmitting && (
                      <CircularProgress size={24} sx={{ mx: 1 }} />
                    )}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <MapCard
          lat={data?.data?.pageItems?.map?.lat}
          lng={data?.data?.pageItems?.map?.lng}
        />
      </div>
    </div>
  );
}
export async function getStaticProps({ locale }) {
  const [getFetch] = useFetch();
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
