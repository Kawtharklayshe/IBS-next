import { headerTypes } from "../../../../../constants/enums";
import { Parallax } from "react-parallax";
import { Typography, Button, Box, Container } from "@mui/material";
import useStyles from "./style";

const ParallexFixedBackground = ({ data, headerType, heroHeight }) => {
  const classes = useStyles({ headerType, headerTypes, heroHeight });

  return (
    <Box className={classes.root}>
      <Parallax
        bgImage={data.image?.length > 0 && data?.image[0]}
        bgImageAlt="parallex"
        strength={500}
        className={classes.parallexRoot}
      >
        <Box className={classes.imageOverlay} /> {/* overlay for image */}
        <Container maxWidth="false" className={classes.detailsContainer}>
          <Box className={classes.DetailsInnerContainer}>
            <Typography variant="h4" className={classes.title}>
              {data?.title}
            </Typography>
            <Typography variant="body1" className={classes.subTitle}>
              {data?.description}
            </Typography>
            {data?.buttonText != null && (
              <Button
                className={classes.button}
                onClick={() => window.open(data?.buttonUrl, "_blank")}
              >
                {data?.buttonText}
              </Button>
            )}
          </Box>
        </Container>
      </Parallax>
    </Box>
  );
};
export default ParallexFixedBackground;
