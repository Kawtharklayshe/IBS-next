import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  getSEOKeywordsContent,
  checkLoadImages,
} from "../../utilies/utiliesFuctions";
import { Container, Grid, Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Rectangle } from "@mui/icons-material";
import { ArrowRightAlt } from "@mui/icons-material";
import MainCover from "../../components/mainCover";
import classes from "../../styles/publications/style.module.css";
import useFetch from "../../components/useFetch/useFetch";
import { GET_PUBLICATION_DETAILS } from "../../services/endpoints";
import VidoeComp from "../../components/videoComp/videoComp";
import CircleIcon from "@mui/icons-material/Circle";
import CustomLoader from "../../components/customLoader";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const PublicationDetails = ({ data, headerType }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  let { t } = useTranslation("common");
  const [pageInfo, setPageInfo] = useState({
    title: data?.data?.pageDetail?.title,
    image: data?.data?.pageDetail?.image || "/images/pageMainCover.png",
    description: data?.data?.pageDetail?.description,
    breadcrumbs: [
      {
        title: "home",
        link: "/",
      },
      {
        title: router.query.blog || t("publications"),
        link: "/publications",
      },
      {
        title: data?.data?.pageDetail?.title,
        link: "",
      },
    ],
    headerType: headerType,
  });

  const PublicationDetails = {
    id: data?.data?.item?.id,
    title: data?.data?.item?.title,
    subTitle: data?.data?.item?.subTitle,
    images: data?.data?.item?.mediaItems,
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
        <MainCover
          breadcrumbs={pageInfo.breadcrumbs}
          description={pageInfo.description}
          title={pageInfo.title}
          image={pageInfo.image}
          headerType={headerType}
        />
        <Head>
          <title>{data?.data?.item?.title}</title>
          <meta
            name="description"
            content={data?.data?.item?.seoDescription}
          ></meta>
          {data?.data?.seo?.seoTags.length > 0 ? (
            <meta
              name="keywords"
              content={getSEOKeywordsContent(data.data.seo.seoTags)}
            />
          ) : null}
        </Head>
        <Box sx={{ backgroundColor: "background.main" }}>
          <Container maxWidth="lg" sx={{ paddingBottom: "75px" }}>
            <Grid container sx={{ mt: "-40px" }}>
              <Grid
                item
                xs={12}
                md={PublicationDetails.images?.length > 0 ? 6 : 12}
                lg={PublicationDetails.images?.length > 0 ? 6 : 12}
              >
                <Typography
                  variant="h6"
                  color="primary.main"
                  my={3}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {/* {t("details")} */}
                  {data?.data?.item?.title}
                </Typography>
                <>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.data?.item?.description,
                    }}
                    style={{}}
                  ></div>
                  <Box sx={{ display: "block" }}>
                    {data?.data?.item?.attachments?.map((file, index) => (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "20px",
                        }}
                        key={index}
                      >
                        {file.url.endsWith(".pdf") && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              flexDirection: "row-reverse",
                            }}
                          >
                            <span
                              onClick={() => window.open(file.url, "_blank")}
                              style={{
                                marginLeft: "20px",
                                color: "#116681",
                                textDecoration: "underline",
                                cursor: "pointer",
                              }}
                            >
                              {/* {"file" + " " + [index]} */}
                              Download file
                            </span>
                            <svg
                              style={{}}
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                            >
                              <path
                                d="M34.575 37.3406V10.1257H27.4132C27.0333 10.1257 26.669 9.97478 26.4004 9.70616C26.1318 9.43754 25.9808 9.07321 25.9808 8.69333V2.96387H5.92773V18.0037V37.3406H34.575Z"
                                stroke="#DB544A"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M25.9805 2.96387L34.5747 10.1257"
                                stroke="#DB544A"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M20.2078 15.5295C20.556 15.7336 20.6805 16.0666 20.7136 16.4408C20.7356 16.6219 20.716 16.8056 20.6563 16.9779C20.5779 16.7016 20.477 16.4321 20.3546 16.1722C20.288 16.024 20.2083 15.882 20.1165 15.7479C20.061 15.6709 20.0001 15.5859 19.8909 15.5993C19.7816 15.6127 19.744 15.7112 19.7118 15.7998C19.6352 16.0234 19.5968 16.2582 19.5981 16.4945C19.5765 17.4277 19.6972 18.3586 19.9562 19.2554C19.9624 19.2711 19.9696 19.2863 19.9777 19.3011C20.0538 19.071 20.129 18.8534 20.1952 18.6395C20.2785 18.3709 20.3555 18.0943 20.4334 17.8221C20.4432 17.7872 20.4468 17.7541 20.4978 17.7595C20.5489 17.7648 20.5345 17.806 20.5345 17.8329C20.5411 18.4103 20.4904 18.987 20.3832 19.5544C20.3492 19.746 20.3054 19.9358 20.266 20.1265C20.2581 20.156 20.2597 20.1873 20.2704 20.216C20.7386 21.4263 21.394 22.5149 22.3554 23.4021C22.6306 23.6554 22.9278 23.8836 23.2435 24.0843C23.2762 24.1075 23.3166 24.1171 23.3563 24.1111C24.2346 23.9804 25.1209 23.9116 26.0089 23.9052C26.3994 23.8972 26.789 23.9461 27.1655 24.0502C27.3148 24.0916 27.4542 24.1625 27.5755 24.2588C27.8172 24.4603 27.819 24.7378 27.6892 24.9866C27.6704 25.0216 27.6534 25.0198 27.631 24.992C27.6086 24.9643 27.5889 24.949 27.571 24.9258C27.392 24.6742 27.1288 24.5739 26.8325 24.5381C26.3332 24.4897 25.8308 24.4816 25.3303 24.514C24.965 24.5283 24.5998 24.5534 24.2345 24.5731C24.2291 24.5936 24.2435 24.5972 24.2551 24.6017C24.9021 24.8912 25.5754 25.1179 26.2658 25.2785C26.5637 25.3517 26.8713 25.3768 27.1771 25.3528C27.3547 25.3473 27.5241 25.2769 27.6534 25.155C27.6623 25.1841 27.6623 25.2153 27.6534 25.2445C27.5889 25.6026 27.3553 25.7816 27.0214 25.8595C26.7282 25.9182 26.4266 25.9209 26.1324 25.8676C25.204 25.7315 24.3563 25.368 23.53 24.9428C23.4433 24.9042 23.3601 24.8584 23.2811 24.8058C23.1217 24.6859 22.9516 24.6796 22.7619 24.7046C21.7571 24.8283 20.7634 25.0294 19.7897 25.3062C19.0117 25.5279 18.2528 25.8117 17.5203 26.1549C17.4691 26.1783 17.4265 26.2171 17.3985 26.2659C16.9335 27.0763 16.428 27.8627 15.8838 28.6222C15.7465 28.8139 15.597 28.9966 15.4362 29.1692C15.2032 29.4344 14.8832 29.6077 14.5338 29.6579C14.2739 29.6947 14.0094 29.6399 13.7854 29.5031C13.6662 29.4426 13.5742 29.3395 13.5275 29.2143C13.4809 29.089 13.4832 28.9508 13.5338 28.8272C13.6203 28.5961 13.7437 28.3805 13.8991 28.1889C14.4146 27.4541 15.1288 26.8815 15.9581 26.5381C15.9868 26.5264 16.0127 26.5014 16.0476 26.5112C16.0324 26.5506 15.9957 26.5721 15.9671 26.6007C15.4596 27.0785 14.9939 27.5988 14.575 28.1558C14.4074 28.38 14.2617 28.6199 14.1399 28.8719C14.099 28.9518 14.0689 29.0367 14.0504 29.1244C14.0414 29.1754 14.0334 29.2309 14.0835 29.2658C14.1336 29.3008 14.1784 29.2658 14.2187 29.2417C14.3417 29.1577 14.4576 29.0636 14.5652 28.9606C15.4497 28.1577 16.1843 27.2037 16.7343 26.1433C17.2714 25.1012 17.8426 24.0843 18.3627 23.0306C18.7754 22.1971 19.1684 21.3538 19.5193 20.4926C19.539 20.4515 19.5422 20.4044 19.5283 20.361C19.2421 19.4833 19.0468 18.5786 18.9455 17.661C18.8882 17.2158 18.8753 16.7659 18.907 16.3182C18.9192 16.1315 18.9679 15.949 19.0502 15.781C19.1049 15.6845 19.1793 15.6006 19.2687 15.5348C19.4277 15.4368 19.6148 15.3946 19.8004 15.4149C19.9408 15.4342 20.0779 15.4728 20.2078 15.5295ZM17.8041 25.5963C18.036 25.4925 18.2633 25.3797 18.4997 25.2865C19.6286 24.8389 20.8013 24.5534 21.9911 24.326L22.3912 24.2517C21.3125 23.4871 20.4504 22.5615 19.9097 21.3458C19.8148 21.6063 19.7226 21.8516 19.6187 22.0924C19.2696 22.8981 18.8452 23.6644 18.4316 24.437C18.2248 24.8228 18.0091 25.2042 17.7969 25.5882C17.7907 25.5945 17.7862 25.6008 17.7969 25.607L17.8041 25.5963Z"
                                fill="#DB544A"
                              />
                            </svg>
                          </div>
                        )}
                        {(file.url.endsWith(".doc") ||
                          file.url.endsWith(".docx")) && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              flexDirection: "row-reverse",
                            }}
                          >
                            <span
                              onClick={() =>
                                window.open(file.thumbnailUrl, "_blank")
                              }
                              style={{
                                marginLeft: "20px",
                                color: "#116681",
                                textDecoration: "underline",
                                cursor: "pointer",
                              }}
                            >
                              {/* {"file" + " " + [index]} */}
                            </span>
                            <svg
                              style={{}}
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                            >
                              <path
                                d="M34.575 37.3406V10.1257H27.4132C27.0333 10.1257 26.669 9.97478 26.4004 9.70616C26.1318 9.43754 25.9808 9.07321 25.9808 8.69333V2.96387H5.92773V18.0037V37.3406H34.575Z"
                                stroke="#295391"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M25.9805 2.96387L34.5747 10.1257"
                                stroke="#295391"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M19.1183 19.6882C19.0703 19.5202 19.0223 19.3562 18.9743 19.1962C18.9263 19.0282 18.8823 18.8722 18.8423 18.7282C18.8103 18.5762 18.7783 18.4362 18.7463 18.3082C18.7143 18.1802 18.6903 18.0722 18.6743 17.9842H18.6263C18.6103 18.0722 18.5863 18.1802 18.5543 18.3082C18.5303 18.4362 18.4983 18.5762 18.4583 18.7282C18.4263 18.8802 18.3863 19.0402 18.3383 19.2082C18.2983 19.3682 18.2503 19.5322 18.1943 19.7002L17.0423 23.3122H15.8423L14.0783 16.8802H15.1703L16.0583 20.3122C16.1223 20.5442 16.1823 20.7802 16.2383 21.0202C16.2943 21.2522 16.3423 21.4762 16.3823 21.6922C16.4303 21.9002 16.4623 22.0802 16.4783 22.2322H16.5263C16.5503 22.1362 16.5783 22.0162 16.6103 21.8722C16.6423 21.7282 16.6743 21.5762 16.7063 21.4162C16.7463 21.2562 16.7863 21.0962 16.8263 20.9362C16.8743 20.7762 16.9183 20.6322 16.9583 20.5042L18.0983 16.8802H19.2503L20.3543 20.5042C20.4103 20.6882 20.4663 20.8842 20.5223 21.0922C20.5863 21.3002 20.6423 21.5042 20.6903 21.7042C20.7383 21.8962 20.7703 22.0682 20.7863 22.2202H20.8343C20.8503 22.0842 20.8783 21.9162 20.9183 21.7162C20.9663 21.5082 21.0183 21.2842 21.0743 21.0442C21.1383 20.7962 21.2023 20.5522 21.2663 20.3122L22.1663 16.8802H23.2463L21.4583 23.3122H20.2223L19.1183 19.6882Z"
                                fill="#295391"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </Box>
                </>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ color: "primary.main" }}>
                  <Carousel
                    IndicatorIcon={<CircleIcon fontSize="10px" />}
                    indicatorIconButtonProps={{
                      style: {
                        margin: "4px 4px", // 4 px for top,down  and 5 for right,left
                        color: "#c4c4c4",
                        fontSize: "10px",
                      },
                    }}
                    activeIndicatorIconButtonProps={{
                      style: {
                        color: "inherit", // it takes its color from Box parent
                      },
                    }}
                    indicatorContainerProps={{
                      style: {
                        marginTop: "0px", // 5
                        textAlign: "center", // 4
                      },
                    }}
                    navButtonsProps={{
                      // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                      style: {
                        backgroundColor: "transparent",
                        borderRadius: 0,
                        color: "inherit",
                        top: "50% !important",
                        transform: "translateY(-50%)",
                      },
                    }}
                    navButtonsWrapperProps={{
                      // Move the buttons to the bottom. Unsetting top here to override default style.
                      style: {
                        bottom: "0",
                        top: "unset",
                      },
                    }}
                    NextIcon={
                      <ArrowForwardIosIcon
                        style={{ fontSize: "40px", color: "inherit" }}
                      />
                    }
                    PrevIcon={
                      <ArrowBackIosIcon
                        style={{ fontSize: "40px", color: "inherit" }}
                      />
                    }
                  >
                    {PublicationDetails?.images?.map((item, i) => (
                      <div key={i}>
                        {item?.type == 1 && (
                          <img
                            key={i}
                            src={item?.thumbnailUrl}
                            className={classes.carsoulDetails}
                          />
                        )}
                        {item?.type == 2 && (
                          <VidoeComp
                            video={item?.thumbnailUrl}
                            image={item?.coverImage}
                          />
                        )}
                      </div>
                    ))}
                  </Carousel>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </div>
  );
};

export default PublicationDetails;
export async function getServerSideProps(context) {
  const [getFetch] = useFetch();
  let data = null;
  const publicationSlug = context.params.publicationSlug;
  let locale = context?.locale;
  try {
    const res = await getFetch(
      GET_PUBLICATION_DETAILS(publicationSlug),
      process.env.NEXT_PUBLIC_MERCHANT,
      locale
    );
    data = await res.json();
  } catch (e) {}
  return {
    props: {
      data: data,
    },
  };
}
// export async function getStaticPaths() {
//   const res = await fetch('https://.../posts')
//   const projects = await res.json()

//   // Get the paths we want to pre-render based on posts
//   const paths = projects.map((project) => ({
//     params: { id: project.id },
//   }))

//   // We'll pre-render only these paths at build time.
//   // { fallback: blocking } will server-render pages
//   // on-demand if the path doesn't exist.
//   return { paths, fallback: 'true' }
// }
