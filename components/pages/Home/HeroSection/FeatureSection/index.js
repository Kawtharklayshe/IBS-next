import { Typography, Container, Box, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FAB from "@fortawesome/free-brands-svg-icons";
import * as FAS from "@fortawesome/free-solid-svg-icons";
import * as FAR from "@fortawesome/free-regular-svg-icons";
import useStyles from "./style";

const FeatureSection = ({ data }) => {
  const classes = useStyles();
  const getIcon = (name) => {
    const str = name;
    const newStr = "f" + str?.slice(1);
    return newStr;
  };
  return (
    <Box
      className={classes.root}
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-easing="ease-out"
    >
      <Container maxWidth="false" className={classes.innerContainer}>
        <Grid container>
          {data?.items?.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box className={classes.itemContainer}>
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
                    className={classes.itemIcon}
                  />
                  <Typography variant="subtitle1" className={classes.itemTitle}>
                    {item?.title}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};
export default FeatureSection;
