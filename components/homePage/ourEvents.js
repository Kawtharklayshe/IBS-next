import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import style from "../../styles/homePage/style.module.css";
import Router from "next/router";
import { useRouter } from "next/router";
import { textAlign } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function convertToPlain(html) {
  if (typeof window === "object") {
    let tempDivElement = document.createElement("div");
    tempDivElement.innerHTML = html;
    return tempDivElement.textContent || tempDivElement.innerText || "";
  }
}
export function OurEvent({ theme, data }) {
  const Router = useRouter();
  return (
    <div
      className={style.eventSection}
      style={{
        position: "relative",
        paddingBottom: "50px",
      }}
    >
      <Container className={style.containerEventsQ}>
        <div
          data-aos="fade-left"
          data-aos-duration="600"
          data-aos-easing="ease-out"
        >
          <Grid
            container
            sx={{
              position: "relative",
            }}
          >
            <Grid item md={6} lg={6}>
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
            </Grid>
            <Grid item md={6} lg={6}>
              <Button
                className={style.btnNews}
                style={{
                  position: "absolute",
                  top: "30px",
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
                onClick={() => Router.push("/events")}
              >
                See All
              </Button>
            </Grid>
          </Grid>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="300"
          data-aos-easing="ease-out"
        >
          <Grid
            container
            spacing={2}
            // whiteSpace={1}

            // style={{
            //     marginLeft: '0px',
            //     // display: 'flex',
            //     // justifyContent: 'space-between'
            // }}
          >
            {data?.items?.map((item, index) => {
              return (
                <Grid
                  item
                  md={6}
                  lg={4}
                  sm={12}
                  xs={12}
                  //className={style.itemOurEvent}
                  style={{ position: "relative" }}
                >
                  <Link href={`/events/${item.slug}`}>
                    <a style={{ width: "100%", textDecoration: "none" }}>
                      <Box
                        className={style.imageParent}
                        style={{
                          // display: "inline-block",
                          overflow: "hidden",
                          display: "flex",
                          justifyContent: "center",
                          // width: '95%',
                          marginRight: "auto",
                          marginLeft: "auto",
                        }}
                      >
                        <img
                          className={style.imgEvent}
                          // width='95%'
                          height="307px"
                          // src="/images/ourEvents1.png"
                          src={
                            item?.image ? item?.image : "/images/no-image.png"
                          }
                          alt=""
                        />
                      </Box>
                      <Box
                        className={style.boxEvent}
                        style={{
                          position: "relative",
                          bottom: "100px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        sx={{
                          ["@media (max-width:400px)"]: {
                            left: Router.locale == "ar" ? "unset" : "0",
                            right: Router.locale == "ar" ? "0" : "unset",
                          },
                        }}
                      >
                        <Card
                          className={style.contentEvent}
                          sx={{
                            width: "343px",
                            height: "75px",
                            textAlign: "center",
                            backgroundColor: "primary.main",
                            //opacity: '0.75'
                            backgroundColor: `${theme?.primaryColor}BF`,
                          }}
                        >
                          <CardContent>
                            <Box>
                              <Typography
                                variant="h6"
                                component="h6"
                                sx={{
                                  color: "onPrimary.main",
                                  padding: "6px",
                                }}
                              >
                                {/* IT-Talent Forum */}
                                {item?.title}
                              </Typography>
                            </Box>
                          </CardContent>
                        </Card>
                        <Card
                          className={style.headContentEvent}
                          sx={{
                            width: "343px",
                            // height: "297px",
                            height: "75px",
                            position: "relative",
                          }}
                        >
                          {/* <Typography
                            className={style.desEvent}
                            variant="p"
                            component="p"
                          > */}
                          {/* Industry is booming, skilled workers are rare. It is
                    difficult to find the right job! And what about a thesis in
                    the industry? These are questions graduates and many
                    companies are dealing..... */}
                          {/* {convertToPlain(item?.description)}
                          </Typography> */}
                          {/* <Box
                            style={{
                              position: "absolute",
                              bottom: "25%",
                              // left: '9%',
                              left: Router.locale == "ar" ? "unset" : "9%",
                              right: Router.locale == "ar" ? "9%" : "unset",

                              display: Router.locale == "ar" ? "flex" : "unset",
                            }}
                          > */}
                          {/* <Typography
                      style={{
                        opacity: "0.7",
                      }}
                      variant="span"
                      component="span"
                    >
                      2019
                      {item?.createdAt} */}
                          {/* <svg
                        style={{
                          marginLeft: "10px",
                          marginRight: "10px",
                          transform:
                            Router.locale == "ar"
                              ? "rotateY(-180deg)"
                              : "unset",
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="8"
                        viewBox="0 0 17 8"
                        fill="none"
                      >
                        <path
                          d="M16.3536 4.35355C16.5488 4.15829 16.5488 3.84171 16.3536 3.64645L13.1716 0.464466C12.9763 0.269204 12.6597 0.269204 12.4645 0.464466C12.2692 0.659729 12.2692 0.976311 12.4645 1.17157L15.2929 4L12.4645 6.82843C12.2692 7.02369 12.2692 7.34027 12.4645 7.53553C12.6597 7.7308 12.9763 7.7308 13.1716 7.53553L16.3536 4.35355ZM16 3.5L-4.37114e-08 3.5L4.37114e-08 4.5L16 4.5L16 3.5Z"
                          fill="#959595"
                        />
                      </svg>
                    </Typography> */}
                          {/* <Typography
                      style={{
                        // borderRight: '1px solid rgba(227, 227, 227, 0.89)',
                        borderRight:
                          Router.locale == "en"
                            ? "1px solid rgba(227, 227, 227, 0.89)"
                            : "unset",
                        borderLeft:
                          Router.locale == "ar"
                            ? "1px solid rgba(227, 227, 227, 0.89)"
                            : "unset",
                        // paddingRight: '10px',
                        opacity: "0.7",
                        paddingRight:
                          Router.locale == "ar" ? "unset" : "10px",
                        paddingLeft: Router.locale == "ar" ? "10px" : "unset",
                      }}
                      variant="span"
                      component="span"
                    >
                      2021
                      {item?.updatedAt}
                    </Typography> */}

                          {/* <Typography
                      style={{
                        color: "#EAA142",
                        // paddingLeft: '15px',
                        paddingLeft:
                          Router.locale == "ar" ? "unset" : "15px",
                        paddingRight: Router.locale == "ar" ? "15px" : "unset",
                      }}
                      variant="span"
                      component="span"
                    >
                      +16 more events
                    </Typography> */}
                          {/* </Box> */}
                        </Card>
                        <Box
                          zIndex={10000}
                          sx={{
                            // display:'flex',
                            // justifyContent:'center'.
                            position: "absolute",
                            // left: '35%',
                            // left: Router.locale == "ar" ? "unset" : "35%",
                            // right: Router.locale == "ar" ? "35%" : "unset",
                            bottom: "-30px",
                            transform: "scale(1)",
                            "&:hover": {
                              transform: "scale(1.2)",
                              transition: "transform 0.5s",
                            },
                          }}
                        >
                          <svg
                            style={{
                              cursor: "pointer",
                              // position:'absolute',
                              // bottom:'-33px',
                              transform:
                                Router.locale == "ar"
                                  ? "rotateY(-180deg)"
                                  : "unset",
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="61"
                            height="61"
                            viewBox="0 0 61 61"
                            fill="none"
                          >
                            <circle
                              cx="30.5"
                              cy="30.5"
                              r="30.5"
                              fill="#5B8A64"
                            />
                            <path
                              d="M37.8839 30.8839C38.372 30.3957 38.372 29.6043 37.8839 29.1161L29.9289 21.1612C29.4408 20.673 28.6493 20.673 28.1612 21.1612C27.673 21.6493 27.673 22.4408 28.1612 22.9289L35.2322 30L28.1612 37.0711C27.673 37.5592 27.673 38.3507 28.1612 38.8388C28.6493 39.327 29.4408 39.327 29.9289 38.8388L37.8839 30.8839ZM23 31.25H37V28.75H23V31.25Z"
                              fill="white"
                            />
                          </svg>
                        </Box>
                      </Box>
                    </a>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default OurEvent;
