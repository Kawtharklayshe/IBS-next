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
import style from "../../styles/publications/style.module.css";
import Router from "next/router";
import { useRouter } from "next/router";
import { textAlign } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Opacity } from "@mui/icons-material";
import { CalendarMonth } from "@mui/icons-material";

export function PublicationCard({ data, theme, parentPageTitle }) {
  const Router = useRouter();
  return (
    <div
      style={
        {
          // boxShadow: '0px 0px 2px',
        }
      }
    >
      <Box
        onClick={() =>
          Router.push({
            pathname: `/publications/${data.slug}`,
            query: {
              blog: parentPageTitle,
            },
          })
        }
        style={{ cursor: "pointer" }}
        sx={{
          color: "onCard.main",
          backgroundColor: "card.main",
          boxShadow: `0px 0px ${theme?.elevation}px`,
          position: "relative",

          "&:hover&::before": {
            width: "100%",
            height: "100%,",
            borderTopColor: "primary.main",
            borderLeftColor: "primary.main",
            transition: "all .25s ease-out,.25s ease-out",
          },
          "&:hover&::after": {
            width: "100%",
            height: "100%",
            borderBottomColor: "primary.main",
            borderRightColor: "primary.main",
            transition: "all .25s ease-out,.25s ease-out",
          },
          "&::before": {
            content: "''",
            position: "absolute",
            width: "0",
            height: "100%",
            top: "-2px",
            left: "-2px",
            bottom: "0",
            border: "2px solid transparent",
          },
          "&::after": {
            content: "''",
            position: "absolute",
            width: "0",
            height: "0",
            bottom: "-2px",
            right: "-2px",
            border: "2px solid transparent",
          },
        }}
      >
        <Box
          className={style.imageParent}
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            // width: '95%',
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <img
            src={
              // data?.pageItems?.items?.length > 0
              // ? data?.pageItems?.items?.mediaItems?.thumbnailUrl
              // : "/images/no-image.png"

              data?.mediaItems[0]?.thumbnailUrl ?? "/images/no-image.png"
            }
            // alt="publication"
            className={style.imgPub}
            // width="100%"
            height="350px"
            width="100%"
          />
        </Box>
        <Box
          className={style.boxPublication}
          style={{
            position: "relative",
            bottom: "100px",
            // left: '10px',
            // left: Router.locale != "ar" ? "10px" : "unset",
            // right: Router.locale == "ar" ? "10px" : "unset",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          sx={{
            ["@media (max-width:400px)"]: {
              left: Router.locale == "en" ? "0" : "unset",
              right: Router.locale == "ar" ? "0" : "unset",
            },
          }}
        >
          <Card
            className={style.contentPublication}
            sx={{
              width: "100%",
              height: "75px",
              textAlign: "center",
              backgroundColor: "primary.main",
              //opacity: '0.75'
              backgroundColor: `${theme?.primaryColor}BF`,
              borderRadius: "unset",
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
                    textAlign: "left",
                  }}
                >
                  {data?.title}
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Card
            className={style.headContentPublication}
            sx={{ width: "100%", height: "100px", position: "relative" }}
            style={{
              boxShadow: "unset",
            }}
          >
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "space-between",
                marginTop: "5px",
              }}
            >
              <Typography
                variant="span"
                component="span"
                className={style.spanPublication}
              >
                {data?.publisher}
              </Typography>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CalendarMonth
                  sx={{ color: "primary.main", fontSize: "22px" }}
                />
                <Typography
                  variant="subtitle1"
                  component="span"
                  color="onCard.light"
                  sx={{ lineHeight: "3", pl: "10px", pr: "5px" }}
                >
                  {data?.publishingDate}
                </Typography>
              </Box>
            </Box>
            <Typography className={style.desPub} variant="p" component="p">
              {data?.subTitle}
            </Typography>
          </Card>
        </Box>
      </Box>
    </div>
  );
}

export default PublicationCard;
