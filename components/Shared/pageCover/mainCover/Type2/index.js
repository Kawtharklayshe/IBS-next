import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import { Typography, Container, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import useStyles from "./style";

const MainCover = ({ breadcrumbs, image, headerType, title, description }) => {
  const classes = useStyles({ headerType });
  let { t, lang } = useTranslation("common");

  //Showing Title (Home) and Title of Page (Here is About us)
  const breadcrumbsList = breadcrumbs.map((item, index) => {
    if (index + 1 != breadcrumbs?.length)
      return (
        <Link key={index} href={item.link}>
          <Typography className={classes.breadcrumbLinkTitle}>
            {item?.title}
          </Typography>
        </Link>
      );
    else
      return (
        <Typography key={index} className={classes.breadcrumbLastTitle}>
          {item?.title}
        </Typography>
      );
  });
  return (
    <Box className={classes.coverContainer}>
      <Container maxWidth="false" className={classes.innerContainer}>
        <Stack>
          <Breadcrumbs
            separator={
              lang == "ar" ? (
                <ArrowBackIosNewIcon
                  fontSize="small"
                  className={classes.seperatorIcon}
                />
              ) : (
                <ArrowForwardIosIcon
                  fontSize="small"
                  className={classes.seperatorIcon}
                />
              )
            }
            aria-label="breadcrumb"
          >
            {breadcrumbsList}
          </Breadcrumbs>
        </Stack>
        {image && image != "" && (
          <Box className={classes.coverImageContainer}>
            <img src={image} className={classes.coverImage} alt="coverImage" />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default MainCover;
