import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Typography, Box } from "@mui/material";
import CustomButton from "../../../../UI/Button/Type1";
import useStyles from "./style";

const ProjectCard = ({ item, url, parentPageTitle }) => {
  let { t, lang } = useTranslation("common");
  const Router = useRouter();
  const classes = useStyles();

  // get featured image url
  const getFeaturedImageUrl =
    item.mediaItems.find((item) => item.isFeature)?.thumbnailUrl ||
    "/images/no-image.png";

  function convertToPlain(html) {
    if (typeof window === "object") {
      let tempDivElement = document.createElement("div");
      tempDivElement.innerHTML = html;
      return tempDivElement.textContent || tempDivElement.innerText || "";
    }
  }

  const handleClick = () => {
    Router.push({
      pathname: url,
      query: {
        blog: parentPageTitle,
      },
    });
  };
  return (
    <Box className={classes.root}>
      <div className={classes.imageContainer}>
        <img
          src={getFeaturedImageUrl}
          alt="ProjectName"
          className={classes.image}
        />
      </div>
      <Typography variant="h6" component="h6" className={classes.title}>
        {item?.title}
      </Typography>
      <Typography variant="body2" component="p" className={classes.description}>
        {convertToPlain(item?.description)}
      </Typography>
      <CustomButton
        title="more"
        onSubmit={handleClick}
        classNames={classes.extraCustomButtonClass}
      />
    </Box>
  );
};

export default ProjectCard;
