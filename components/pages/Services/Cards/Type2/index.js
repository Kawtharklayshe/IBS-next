import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import useStyles from "./style";

const ServiceCard = ({ item, parentPageTitle }) => {
  const classes = useStyles();
  let { t } = useTranslation("common");
  const Router = useRouter();

  //Function To Extract Text From HTML
  function convertToPlain(html) {
    if (typeof window === "object") {
      let tempDivElement = document.createElement("div");
      tempDivElement.innerHTML = html;
      return tempDivElement.textContent || tempDivElement.innerText || "";
    }
  }

  const handleClick = () => {
    Router.push({
      pathname: "/services/subservices",
      query: {
        id: item.id,
        blog: parentPageTitle,
      },
    });
  };
  return (
    <Box className={classes.root}>
      <div className={classes.OverlayCardHoverType2} />
      <Box className={classes.ContainerImageAndText}>
        <Box className={classes.ImageContainer}>
          <img className={classes.ImageCardType2} src={item.image} />
        </Box>
        <Box className={classes.TextContainer}>
          <Typography
            variant="h6"
            component="h6"
            className={classes.TitleCardType2}
          >
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.DescriptionCardType2}
          >
            {convertToPlain(item.description)}
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.btnCardType2}
            onClick={handleClick}
          >
            {t("Read More")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default ServiceCard;
