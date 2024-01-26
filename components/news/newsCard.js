import { Typography, Box, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import style from "../../styles/news/style.module.css";
import { CalendarMonth } from "@mui/icons-material";
import { useState } from "react";
import IosShareIcon from "@mui/icons-material/IosShare";
import ShareLinksModal from "../ShareLinksModal";
function NewsCard({ data, theme, parentPageTitle }) {
  function convertToPlain(html) {
    if (typeof window === "object") {
      let tempDivElement = document.createElement("div");
      tempDivElement.innerHTML = html;
      return tempDivElement.textContent || tempDivElement.innerText || "";
    }
  }
  const Router = useRouter();
  const [isSharedLinksModalOpen, setIsSharedLinksModalOpen] = useState(false);
  return (
    <div>
      <Box
        className={style.newsPageCard}
        sx={{
          color: "onCard.main",
          backgroundColor: "card.main",
          boxShadow: `0px 0px ${theme?.elevation}px`,
          position: "relative",
          zIndex: 0,
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
            zIndex: -1,
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
            zIndex: -1,
            width: "0",
            height: "0",
            bottom: "-2px",
            right: "-2px",
            border: "2px solid transparent",
          },
        }}
      >
        <img
          src={
            data?.mediaItems?.length > 0
              ? data?.mediaItems[0]?.url
              : "/images/no-image.png"
          }
          alt="ProjectName"
          className="imgEffect"
          width="100%"
          height="318px"
          style={{ objectFit: "cover", cursor: "pointer" }}
          onClick={() =>
            Router.push({
              pathname: `/news/${data.slug}`,
              query: {
                blog: parentPageTitle,
              },
            })
          }
        />
        <Typography
          variant="h6"
          component="h6"
          sx={{
            px: "15px",
            backgroundColor: "primary.main",
            color: "onPrimary.main",
            opacity: "0.8",
            display: "flex",
            alignItems: "center",
            paddingLeft: "15px",
            width: "100%",
            height: "65px",
            position: "absolute",
            bottom: "33%",
          }}
          onClick={() =>
            Router.push({
              pathname: `/news/${data.slug}`,
              query: {
                blog: parentPageTitle,
              },
            })
          }
        >
          {data?.title}
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 5px",
          }}
        >
          <Typography
            variant="subtitle1"
            component="span"
            color="onCard.light"
            sx={{
              p: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CalendarMonth
              sx={{
                color: "primary.main",
                fontSize: "22px",
                mr: 1,
              }}
            />
            {data?.publishingDate}
          </Typography>
          <IconButton aria-label="share">
            <IosShareIcon
              color="primary"
              sx={{ cursor: "pointer", zIndex: 999 }}
              onClick={() => setIsSharedLinksModalOpen(true)}
            />
          </IconButton>
        </div>
        <Typography
          className={style.textAn}
          variant="body2"
          component="p"
          color="onCard.main"
          sx={{
            lineHeight: "1.8",
            letterSpacing: "0.8px",
            px: "15px",
            cursor: "pointer",
          }}
          onClick={() =>
            Router.push({
              pathname: `/news/${data.slug}`,
              query: {
                blog: parentPageTitle,
              },
            })
          }
        >
          {data?.subTitle}
        </Typography>
      </Box>
      <ShareLinksModal
        isOpen={isSharedLinksModalOpen}
        setIsOpen={setIsSharedLinksModalOpen}
        sharedLink={`${
          typeof window === "object"
            ? `${window.location.origin}/${Router.locale}/news/${data.slug}`
            : ""
        }`}
      />
    </div>
  );
}
export default NewsCard;
