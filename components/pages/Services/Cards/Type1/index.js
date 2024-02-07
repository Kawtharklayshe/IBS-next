import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import CustomButton from "../../../../UI/Button/Type1";
import useStyles from "./style";

const ServiceCard = ({ item, parentPageTitle }) => {
  const Router = useRouter();
  let { t, lang } = useTranslation("common");
  const classes = useStyles();

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
      <div className={classes.imageContainer}>
        <img src={item.image} alt="serviceImage" className={classes.image} />
      </div>
      <Typography variant="h6" component="h6" className={classes.title}>
        {item.title}
      </Typography>
      <Typography
        variant="subtitle1"
        component="p"
        className={classes.description}
      >
        {convertToPlain(item.description)}
      </Typography>
      <CustomButton
        onSubmit={handleClick}
        title="See All"
        classNames={classes.extraButtonClass}
      />
    </Box>
  );
};

export default ServiceCard;
