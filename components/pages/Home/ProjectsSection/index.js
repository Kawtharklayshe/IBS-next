import React from "react";
import useTranslation from "next-translate/useTranslation";
import { Box, Container, Typography } from "@mui/material";
import TailwindCarousel from "../../../UI/Carousel/TailwindCarousel";
import useStyles from "./style";

const ProjectsSection = ({ data }) => {
  const classes = useStyles({ backgroundImage: data.detail.backgroundImage });
  let { t } = useTranslation("common");
  return (
    <Box data-aos="zoom-out" className={classes.root}>
      <Container maxWidth="false" className={classes.innerContainer}>
        <Typography variant="h6" component="h6" className={classes.title}>
          {data.detail.title}
        </Typography>
        <Typography variant="subtitle1" className={classes.subTitle}>
          {data.detail.subTitle}
        </Typography>
        <TailwindCarousel items={data.items} parentTitle={t("projects")} />
        
      </Container>
    </Box>
  );
};

export default ProjectsSection;
