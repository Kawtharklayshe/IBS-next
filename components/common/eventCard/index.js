import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import IosShareIcon from "@mui/icons-material/IosShare";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import * as moment from "moment";
import style from "../../../styles/workshop/style.module.css";
import ShareLinksModal from "../../ShareLinksModal";
const EventCard = ({ item }) => {
  const Router = useRouter();
  const [isSharedLinksModalOpen, setIsSharedLinksModalOpen] = useState(false);
  return (
    <Card
      sx={{ width: "97%", height: "100%" }}
      className={style.cardInAccordion}
    >
      <Box sx={{ position: "relative" }}>
        <Image
          src={item.image || "/images/WorkShop1.png"}
          width="400px"
          height="300px"
          onClick={() => Router.push(`/events/event/${item.slug}`)}
        />
        <Typography
          variant="h6"
          component="h6"
          className={style.eventDateTitle}
          sx={{
            backgroundColor: "primary.main",
            color: "onPrimary.main",
          }}
        >
          {moment(item.eventDate).format("DD MMM YYYY")}
        </Typography>
      </Box>
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <IconButton aria-label="share">
          <IosShareIcon
            color="primary"
            onClick={() => setIsSharedLinksModalOpen(true)}
          />
        </IconButton>
      </CardActions>
      <CardContent sx={{ paddingTop: "0px" }}>
        <Link href={`/events/event/${item.slug}`}>
          <a
            style={{
              textDecoration: "none",
              width: "97%",
              //height: "520px",
              display: "inline-block",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                component="h6"
                className={style.h6CardWorkShop}
              >
                {item.title}
              </Typography>
              <Typography
                variant="p"
                component="p"
                className={style.pCardWorkShop}
                dangerouslySetInnerHTML={{
                  __html: item.about,
                }}
              ></Typography>
              <svg
                style={{
                  position: "relative",
                  right: "15px",
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="302"
                height="2"
                viewBox="0 0 302 2"
                fill="none"
              >
                <path d="M0 1H302" stroke="#E4E4E4" />
              </svg>
              <Typography
                variant="span"
                component="span"
                className={style.spanCardWorkShop}
                color="primary.main"
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <svg
                    style={{
                      marginRight: "10px",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                  >
                    <path
                      d="M8.46406 17.5875C3.93594 17.5875 0.234375 13.725 0.234375 8.99997C0.234375 4.27497 3.93594 0.412476 8.46406 0.412476C12.9922 0.412476 16.6937 4.27497 16.6937 8.99997C16.7297 13.725 13.0281 17.5875 8.46406 17.5875ZM8.46406 1.31247C4.40312 1.31247 1.13281 4.76247 1.13281 8.96247C1.13281 13.1625 4.43906 16.6125 8.46406 16.6125C12.4891 16.6125 15.7953 13.1625 15.7953 8.96247C15.7953 4.76247 12.525 1.31247 8.46406 1.31247Z"
                      fill="#5B8A64"
                    />
                    <path
                      d="M11.0508 13.3875L7.99609 10.2V4.38745H8.9664V9.78745L11.7336 12.6749L11.0508 13.3875Z"
                      fill="#5B8A64"
                    />
                  </svg>

                  {moment(item.eventDate).format("hh: mm A")}
                </Box>
              </Typography>
              <Typography
                variant="span"
                component="span"
                className={style.spanCardWorkShop}
                color="primary.main"
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <svg
                    style={{
                      marginRight: "10px",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="23"
                    viewBox="0 0 14 23"
                    fill="none"
                  >
                    <path
                      d="M9.09913 16.434L12.6582 10.7112C12.6698 10.6927 12.6795 10.6733 12.6871 10.6531C13.3017 9.65086 13.6262 8.50597 13.6262 7.33711C13.6262 3.83051 10.7734 0.977661 7.26681 0.977661C3.76025 0.977661 0.907187 3.83051 0.907187 7.33711C0.907187 8.50621 1.23216 9.65157 1.84721 10.6545C1.85433 10.6721 1.86264 10.6892 1.87261 10.7058L5.30392 16.4483C2.64029 16.8248 0.888672 17.92 0.888672 19.2487C0.888672 20.8949 3.68618 22.1841 7.25731 22.1841C10.8284 22.1841 13.626 20.8947 13.626 19.2487C13.6262 17.9139 11.7929 16.7941 9.09913 16.434ZM2.48647 10.3338C1.91913 9.43081 1.61932 8.39464 1.61932 7.33711C1.61932 4.22314 4.15263 1.68981 7.26681 1.68981C10.3807 1.68981 12.9141 4.22314 12.9141 7.33711C12.9141 8.39511 12.6142 9.43128 12.0471 10.3338C12.0353 10.3528 12.0255 10.3725 12.0177 10.3929L8.25763 16.4383C8.20113 16.525 8.18997 16.5447 8.1209 16.6581L7.17138 18.185L2.51828 10.3979C2.50997 10.3758 2.49929 10.3542 2.48647 10.3338ZM7.25755 21.472C3.92404 21.472 1.60105 20.3 1.60105 19.2487C1.60105 18.2944 3.35053 17.3952 5.70367 17.1167L6.8597 19.0516C6.92356 19.1582 7.03797 19.224 7.16212 19.2249C7.16307 19.2249 7.16426 19.2249 7.16521 19.2249C7.28817 19.2249 7.40259 19.1613 7.46763 19.0569L8.68301 17.1027C11.0737 17.3617 12.9138 18.2837 12.9138 19.2487C12.9141 20.3003 10.5911 21.472 7.25755 21.472Z"
                      fill="#5B8A64"
                    />
                    <path
                      d="M9.56993 7.33699C9.56993 6.06201 8.53258 5.02466 7.25762 5.02466C5.98266 5.02466 4.94531 6.06201 4.94531 7.33699C4.94531 8.61196 5.98266 9.64932 7.25762 9.64932C8.53258 9.64932 9.56993 8.61196 9.56993 7.33699ZM5.65745 7.33699C5.65745 6.45464 6.37528 5.7368 7.25762 5.7368C8.13996 5.7368 8.85779 6.45464 8.85779 7.33699C8.85779 8.21934 8.1402 8.93718 7.25762 8.93718C6.37505 8.93718 5.65745 8.21934 5.65745 7.33699Z"
                      fill="#5B8A64"
                    />
                  </svg>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.location,
                    }}
                  ></div>
                </Box>
              </Typography>
            </Box>
          </a>
        </Link>
      </CardContent>
      <ShareLinksModal
        isOpen={isSharedLinksModalOpen}
        setIsOpen={setIsSharedLinksModalOpen}
        sharedLink={`${
          typeof window === "object"
            ? `${window.location.origin}/${Router.locale}/events/event/${item.slug}`
            : ""
        }`}
      />
    </Card>
  );
};

export default EventCard;
