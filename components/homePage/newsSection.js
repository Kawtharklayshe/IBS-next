import { Typography, Grid, Box, Container, Button, Stack } from "@mui/material";
import Router from "next/router";
import { useRouter } from "next/router";
import Image from "next/image";
import style from "../../styles/homePage/style.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Stretch from "../helpers/stretch";

export function NewsSection({ data, theme, url }) {
  function convertToPlain(html) {
    if (typeof window === "object") {
      let tempDivElement = document.createElement("div");
      tempDivElement.innerHTML = html;
      return tempDivElement.textContent || tempDivElement.innerText || "";
    }
  }
  const Router = useRouter();
  return (
    <div style={{ position: "relative" }} className={style.newsSection}>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Typography
            variant="h6"
            component="h6"
            sx={{ textAlign: "start", color: "onBackground.light" }}
          >
            {data?.detail?.title}
          </Typography>
          <Typography
            className={style.pNews}
            variant="p"
            component="p"
            sx={{ textAlign: "start", color: "onBackground.main" }}
          >
            {data?.detail?.subTitle}
          </Typography>
          <Button
            className={style.btnNews}
            style={{
              position: "absolute",
              top: "0",
              left: Router.locale == "ar" ? "0" : "unset",
              right: Router.locale == "ar" ? "unset" : "0",
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
            onClick={() => window.open("/news")}
          >
            See All
          </Button>
        </Grid>
      </Grid>

      <div
      // data-aos="fade-up"
      // data-aos-duration="600"
      // data-aos-delay="300"
      // data-aos-easing="ease-out"
      >
        <Grid container className={style.containerNews}>
          <Grid className={style.mainNews} item xs={6} md={6} sx={4}>
            <Box style={{ position: "relative" }}>
              <Box className={style.imageOneResponsive}>
                <Image
                  src={
                    data.items[0].mediaItems
                      ? data.items[0].mediaItems[0].thumbnailUrl
                      : "/images/no-image.png"
                  }
                  width="611px"
                  height="653px"
                  style={{ position: "relative" }}
                ></Image>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                sx={{
                  position: "absolute",
                  bottom: "4px",
                  width: 300,
                  height: 300,
                  backgroundColor: "primary.main",
                }}
                className={style.boxNews}
              >
                <Typography
                  className={style.subTitleNews}
                  variant="h6"
                  component="h6"
                  sx={{
                    textAlign: "start",
                    color: "Background",
                    fontSize: "20px",
                    lineHeight: "24px",
                    margin: "10px",
                  }}
                >
                  <h5 className="headerBox" style={{ fontSize: "20px" }}>
                    {data?.items[0]?.title}
                    {/* {data.title} */}
                  </h5>

                  {data?.items[0]?.subTitle}
                  {/* {data.subTitle} */}
                </Typography>
                {/* <Typography
              className={style.descriptionNews}
                variant="p"
                component="p"
                sx={{ textAlign: "start", color: "Background" }}
                style={{margin:'10px',fontSize:'14px', lineHeight: '30px'}}
              >
                {convertToPlain(data?.items[0]?.description)}
              </Typography> */}

                <Button
                  className={style.btnSubTitle}
                  onClick={() => Router.push(`/news/${data?.items[0]?.slug}`)}
                  style={{
                    color: "Background",
                    width: "fit-content",
                    fontSize: "18px",
                    cursor: "pointer",
                    zIndex: "10000",
                  }}
                  variant="text"
                >
                  See more
                  <ArrowForwardIosIcon
                    style={{
                      fontSize: "18px",
                      position: "absolute",
                      left: Router.locale == "ar" ? "-20px" : "unset",
                      right: Router.locale == "ar" ? "unset" : "-20px",
                      transform:
                        Router.locale == "ar" ? "rotateY(-180deg)" : "unset",
                      cursor: "pointer",
                    }}
                  />
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid container xs={6} className={style.sectionRemov}>
            <Grid item sm={12}>
              <Stack maxWidth="100%" direction="row">
                <Box
                  className={style.boxNewsTwo}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: "primary.main",
                  }}
                >
                  <Typography
                    className={style.subTitleNews}
                    variant="h6"
                    component="h6"
                    sx={{
                      textAlign: "start",
                      color: "Background",
                      fontSize: "20px",
                      lineHeight: "24px",
                      margin: "10px",
                    }}
                  >
                    <h5 className="headerBox" style={{ fontSize: "20px" }}>
                      {data?.items[1]?.title}
                      {/* {data.title} */}
                    </h5>

                    {data?.items[1]?.subTitle}
                    {/* {data.subTitle} */}
                  </Typography>
                  {/* <Typography
                          className={style.descriptionNews}
                            variant="p"
                            component="p"
                            sx={{ textAlign: "start", color: "Background" }}
                            style={{margin:'10px',fontSize:'14px', lineHeight: '30px'}}
                          >
                          {convertToPlain(data?.items[1]?.description)}
                          </Typography> */}

                  <Button
                    className={style.btnSubTitle}
                    onClick={() => Router.push(`/news/${data?.items[1]?.slug}`)}
                    style={{
                      color: "Background",
                      width: "fit-content",
                      fontSize: "18px",
                      cursor: "pointer",
                      zIndex: "10000",
                    }}
                    variant="text"
                  >
                    See more{" "}
                    <ArrowForwardIosIcon
                      style={{
                        fontSize: "18px",
                        position: "absolute",
                        left: Router.locale == "ar" ? "-20px" : "unset",
                        right: Router.locale == "ar" ? "unset" : "-20px",
                        transform:
                          Router.locale == "ar" ? "rotateY(-180deg)" : "unset",
                        cursor: "pointer",
                      }}
                    />
                  </Button>
                </Box>

                <>
                  <Image
                    className={style.imageTwoResponsive}
                    src={
                      data.items[1].mediaItems
                        ? data.items[1].mediaItems[0].thumbnailUrl
                        : "/images/no-image.png"
                    }
                    width="364px"
                    height="330px"
                  ></Image>
                </>
              </Stack>
            </Grid>

            {/*Here is the section 3 */}

            <Grid style={{ marginBottom: "10px" }} item xs={12} sm={12}>
              <Stack direction="row">
                <>
                  <Image
                    src={
                      data.items[2].mediaItems
                        ? data.items[2].mediaItems[0].thumbnailUrl
                        : "/images/no-image.png"
                    }
                    width="364px"
                    height="330px"
                  ></Image>
                </>

                <Box
                  className={style.boxNewsThree}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  sx={{ width: 442, height: 315, backgroundColor: "#FFA100" }}
                >
                  <Typography
                    className={style.subTitleNews}
                    variant="h6"
                    component="h6"
                    sx={{
                      textAlign: "start",
                      color: "Background",
                      fontSize: "20px",
                      lineHeight: "24px",
                      margin: "10px",
                    }}
                  >
                    <h5 className="headerBox" style={{ fontSize: "20px" }}>
                      {data?.items[2]?.title}
                      {/* {data.title} */}
                    </h5>

                    {data?.items[2]?.subTitle}
                    {data.subTitle}
                  </Typography>
                  {/* <Typography
                          className={style.descriptionNews}
                            variant="p"
                            component="p"
                            sx={{ textAlign: "start", color: "Background" }}
                            style={{margin:'10px',fontSize:'14px', lineHeight: '30px'}}
                          >
                            {convertToPlain(data?.items[2]?.description)}
                          </Typography> */}

                  <Button
                    className={style.btnSubTitle}
                    onClick={() => Router.push(`/news/${data?.items[2]?.slug}`)}
                    style={{
                      color: "Background",
                      width: "fit-content",
                      fontSize: "18px",
                      cursor: "pointer",
                      zIndex: "10000",
                    }}
                    variant="text"
                  >
                    See more
                    <ArrowForwardIosIcon
                      style={{
                        fontSize: "18px",
                        position: "absolute",
                        left: Router.locale == "ar" ? "-20px" : "unset",
                        right: Router.locale == "ar" ? "unset" : "-20px",
                        transform:
                          Router.locale == "ar" ? "rotateY(-180deg)" : "unset",
                        cursor: "pointer",
                      }}
                    />
                  </Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default NewsSection;
