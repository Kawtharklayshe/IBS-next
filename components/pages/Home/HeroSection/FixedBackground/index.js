import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Typography, Button, Box, Container } from "@mui/material";
import { headerTypes } from "../../../../../constants/enums";
import useStyles from "./style";

const FixedBackground = ({ data, headerType, heroHeight }) => {
  const Router = useRouter();
  const classes = useStyles({ headerType, headerTypes, heroHeight });
  let { t, lang } = useTranslation("common");
  return (
    <Box className={classes.root}>
      <img
        src={data.image?.length && data.image[0]}
        className={classes.image}
      />
      <Box className={classes.imageOverlay} /> {/** image overlay  */}
      <Container maxWidth="false" className={classes.detailsContainer}>
        <Box className={classes.DetailsInnerContainer}>
          <Typography variant="h2" className={classes.title}>
            {data?.title}
          </Typography>
          <Typography variant="body1" className={classes.subTitle}>
            {data?.description}
          </Typography>
          {data?.buttonText != null && (
            <Button
              className={classes.button}
              onClick={() => Router.push(data?.buttonUrl)}
            >
              {data?.buttonText}
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
};
export default FixedBackground;
