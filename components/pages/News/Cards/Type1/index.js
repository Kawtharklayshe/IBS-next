import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Typography, Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import useStyles from "./style";

const NewsCard = ({ data, theme, parentPageTitle }) => {
  const Router = useRouter();
  const classes = useStyles();
  let { t, lang } = useTranslation("common");
  function convertToPlain(html) {
    if (typeof window === "object") {
      let tempDivElement = document.createElement("div");
      tempDivElement.innerHTML = html;
      return tempDivElement.textContent || tempDivElement.innerText || "";
    }
  }
  return (
    <Box className={classes.root}>
      <div className={classes.imageContainer}>
        <img
          src={
            data?.mediaItems?.length > 0
              ? data?.mediaItems[0]?.thumbnailUrl
              : "/images/no-image.png"
          }
          alt="NewsImage"
          className={classes.imageClass}
        />
      </div>
      <Typography variant="h6" component="h6" className={classes.title}>
        {data?.title}
      </Typography>
      <Typography variant="body2" component="p" className={classes.description}>
        {convertToPlain(data?.description)}
      </Typography>
      {/** Footer section */}
      <Box
        className={classes.cardFooter}
        onClick={() =>
          Router.push({
            pathname: `/news/${data.slug}`,
            query: {
              blog: parentPageTitle,
            },
          })
        }
      >
        <Typography className={classes.footerTitle}>{t("readMore")}</Typography>
        <Box component="span" className={classes.footerIconContainer}>
          <KeyboardArrowRightIcon className={classes.footerIcon} />
        </Box>
      </Box>
      {/** end of footer section */}
    </Box>
  );
};
export default NewsCard;
