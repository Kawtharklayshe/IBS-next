import React from "react";
import { Box, Grid, Container, Typography, Button } from "@mui/material";
import IntroVideo from "./IntroVideo";
import useStyles from "./style";

const IntroSection = ({ data }) => {
  const classes = useStyles({ backgroundImage: data.detail.backgroundImage });
  return (
    <Box data-aos="zoom-in" className={classes.root}>
     
      <Container maxWidth="false" className={classes.innerContainer}>
      <section class="relative table w-full md:py-44 py-36">
            <div class="absolute inset-0 bg-indigo-600/5"></div>
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px] mx-10">
                    <div class="md:col-span-7">
                        <div class="md:me-6">
                            <span class="text-indigo-600 font-medium">Title</span>
                            <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">sub title</h4>
                            <p class="text-slate-400 text-lg max-w-xl">short description about us</p>
                        
                          

                            <span class="text-slate-400 font-medium">experians <a href="" class="text-indigo-600">years number</a></span>
                        </div>
                    </div>

                    <div class="md:col-span-5">
                        <div class="relative">
                            <img src="assets/images/marketing.png" alt="" />
                            <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <a href="#!" data-type="youtube" data-id="yba7hPeTSjk"
                                    class="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                    <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Typography variant="h6" component="h6" className={classes.title}>
          {data.detail.title}
        </Typography>
        <Typography variant="subtitle1" className={classes.subTitle}>
          {data.detail.subTitle}
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-easing="ease-out"
            >
              <IntroVideo
                video={data?.items?.video}
                image={data?.items?.image}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className={classes.detailsContainer}
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
            data-aos-easing="ease-out"
          >
            <Typography variant="h4" className={classes.detailsTitle}>
              {data?.items?.title}
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.detailsSubTitle}
            >
              {data?.items?.subTitle}
            </Typography>
            <Button
              className={classes.detailsButton}
              onClick={() => window.open(data?.items?.buttonUrl, "_blank")}
            >
              {data?.items?.button}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IntroSection;
