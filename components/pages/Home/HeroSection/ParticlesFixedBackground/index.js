import Particles from "react-tsparticles";
import { headerTypes } from "../../../../../constants/enums";
import { Typography, Button, Box, Container } from "@mui/material";
import useStyles from "./style";

const ParticlesFixedBackground = ({ data, headerType, heroHeight }) => {
  const classes = useStyles({ headerType, headerTypes, heroHeight });

  return (
    <Box className={classes.root}>
      <img
        src={data.image?.length > 0 && data?.image[0]}
        className={classes.image}
      />
      <Box className={classes.imageOverlay} /> {/** Image overlay */}
      <Particles
        options={{
          style: {
            position: "absolute",
            opacity: "0.8",
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "bubble",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              bubble: {
                opacity: 0.8,
                size: 10,
                color: {
                  value: "#C2D7ED",
                },
              },
            },
          },
          particles: {
            links: {
              enable: true,
            },
            move: {
              enable: true,
            },
            size: {
              value: 2,
            },
          },
        }}
      />
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
    </Box>
  );
};
export default ParticlesFixedBackground;
