import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Typography, Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import useStyles from "./style";

const CategoryCard = ({ data, theme }) => {
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

  const handleNavigate = () => {
    if (data?.childrenCategories.length > 0)
      Router.push(`/categories/${data.slugName}`);
    else Router.push(`/shop?catId=${data.id}`);
  };

  return (
    <Box className={classes.root}>
      <div className={classes.imageContainer}>
        <img
          src={data?.image || "/images/no-image.png"}
          alt="categoryImage"
          className={classes.imageClass}
        />
      </div>
      <Typography variant="h6" component="h6" className={classes.title}>
        {data?.name}
      </Typography>
      <Typography variant="body2" component="p" className={classes.description}>
        {convertToPlain(data?.description)}
      </Typography>
      {/** Footer section */}
      <Box className={classes.cardFooter} onClick={handleNavigate}>
        <Typography className={classes.footerTitle}>{t("readMore")}</Typography>
        <Box component="span" className={classes.footerIconContainer}>
          <KeyboardArrowRightIcon className={classes.footerIcon} />
        </Box>
      </Box>
      {/** end of footer section */}
    </Box>
  );
};
export default CategoryCard;
