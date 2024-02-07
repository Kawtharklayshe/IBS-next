import { Container, Button, Box, Typography } from "@mui/material";
import useStyles from "./style";

const CommunicateUsSection = ({ data }) => {
  const classes = useStyles({ backgroundImage: data?.items?.image });
  return (
    <Box
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay="500"
      data-aos-easing="ease-out"
      className={classes.root}
    >
      <Box className={classes.overlay} />
      <Container maxWidth="false" className={classes.innerContainer}>
        <Typography variant="body1" component="p" className={classes.title}>
          {data?.items?.title}
        </Typography>
        <Button
          className={classes.button}
          onClick={() => window.open(data?.items?.buttonUrl, "_blank")}
        >
          {data?.items?.buttonText}
        </Button>
      </Container>
    </Box>
  );
};
export default CommunicateUsSection;
