import { useRouter } from "next/router";
import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FAB from "@fortawesome/free-brands-svg-icons";
import * as FAS from "@fortawesome/free-solid-svg-icons";
import * as FAR from "@fortawesome/free-regular-svg-icons";
import useStyles from "./style";

const ApporachSection = ({ data }) => {
  const Router = useRouter();
  const classes = useStyles({ backgroundImage: data.detail.backgroundImage });

  const getIcon = (name) => {
    const str = name;
    const newStr = "f" + str?.slice(1);
    return newStr;
  };
  return (
    <Box data-aos="fade-down" className={classes.root}>
      <Container maxWidth="false" className={classes.innerContainer}>
        <Grid container>
          <Grid item xs={12} md={6} className={classes.firstSectionContainer}>
            <Typography variant="h6" component="h6" className={classes.title}>
              {data.detail.title}
            </Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              {data.detail.subTitle}
            </Typography>
            <Button
              className={classes.button}
              onClick={() => window.open(data?.detail?.buttonUrl, "_blank")}
            >
              {data?.detail?.button}
            </Button>
          </Grid>
          <Grid item xs={12} md={6} className={classes.secondSectionContainer}>
            {data?.items?.map((item, index) => (
              <Box className={classes.approcahItemContainer} key={index}>
                <Box className={classes.iconContainer}>
                  <FontAwesomeIcon
                    icon={
                      FAB[getIcon(item.icon)] != null
                        ? FAB[getIcon(item.icon)]
                        : FAS[getIcon(item.icon)] != null
                        ? FAS[getIcon(item.icon)]
                        : FAR[getIcon(item.icon)] != null
                        ? FAR[getIcon(item.icon)]
                        : ""
                    }
                    className={classes.approachIcon}
                  />
                </Box>
                <Box className={classes.detailsContainer}>
                  <Typography
                    variant="h6"
                    component="h6"
                    className={classes.detailsTitle}
                  >
                    {item.tilte}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.detailsSubtitle}
                  >
                    {item.subTilte}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ApporachSection;
