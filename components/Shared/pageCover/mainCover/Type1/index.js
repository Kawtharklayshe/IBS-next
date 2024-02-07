import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { headerTypes } from "../../../../../constants/enums";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import { Grid, Typography, Container } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import useStyles from "./style";
const MainCover = ({
  breadcrumbs,
  title = "",
  description = "",
  image,
  headerType,
}) => {
  const classes = useStyles();
  let { t, lang } = useTranslation("common");
  const breadcrumbsList = breadcrumbs.map((item, index) => {
    if (index + 1 != breadcrumbs?.length)
      return (
        <Link key={index} color="inherit" href={item.link}>
          <Typography className={classes.breadcrumbLinkTitle}>
            {item?.title}
          </Typography>
        </Link>
      );
    else
      return (
        <Typography
          key={index}
          className={`${classes.breadcrumbLastTitle} overFlowBasic`}
        >
          {item?.title}
        </Typography>
      );
  });
  return (
    <div
      className={
        headerType == headerTypes.colored
          ? classes.coverContainer
          : classes.coverContainerHeaderTransparent
      }
    >
      <Image
        src={image || "/images/default-cover.png"}
        className={
          headerType == headerTypes.colored
            ? classes.imageContainer
            : classes.imageContainerHeaderTransparent
        }
        alt="coverImage"
        layout="fill"
        priority
      />
      <div className={classes.overLayDivBehindImage} />
      <Container maxWidth="false" className={classes.infoContainer}>
        <Grid container sx={{ zIndex: 1 }}>
          <Grid item xs={8} md={4}>
            <Typography
              variant="h3"
              className={`${classes.infoTitle} overFlowBasic`}
            >
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              className={`${classes.infoDescription} overFlow`}
            >
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12} mt={2}>
            <Stack sx={{ zIndex: 5 }}>
              <Breadcrumbs
                sx={{ maxWidth: "50%" }}
                separator={
                  lang == "ar" ? (
                    <ArrowBackIosNewIcon
                      fontSize="small"
                      sx={{ fill: "white" }}
                    />
                  ) : (
                    <ArrowForwardIosIcon
                      fontSize="small"
                      sx={{ fill: "white" }}
                    />
                  )
                }
                aria-label="breadcrumb"
              >
                {breadcrumbsList}
              </Breadcrumbs>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MainCover;
