import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { Box, Typography ,Button } from "@mui/material";
import CustomButton from "../../../../UI/Button/Type1";
import useStyles from "./style";


  import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const ServiceCard = ({ item, parentPageTitle }) => {
  const Router = useRouter();
  let { t, lang } = useTranslation("common");
  const classes = useStyles();

  function convertToPlain(html) {
    if (typeof window === "object") {
      let tempDivElement = document.createElement("div");
      tempDivElement.innerHTML = html;
      return tempDivElement.textContent || tempDivElement.innerText || "";
    }
  }


  const handleClick = () => {
    Router.push({
      pathname: "/services/subservices",
      query: {
        id: item.id,
        blog: parentPageTitle,
      },
    });
  };
  return (
    <Box >
      {/* <div className={classes.imageContainer}>
        <img src={item.image} alt="serviceImage" className={classes.image} />
      </div>
      <Typography variant="h6" component="h6" className={classes.title}>
        {item.title}
      </Typography>
      <Typography
        variant="subtitle1"
        component="p"
        className={classes.description}
      >
        {convertToPlain(item.description)}
      </Typography>
      <CustomButton
        onSubmit={handleClick}
        title="See All"
        classNames={classes.extraButtonClass}
      /> */}
       <Box my={4}>
       
        <Card className={classes.card}>
          <CardMedia
          className={classes.CardMedia}
            media="picture"
            alt="Contemplative Reptile"
            image={item.image}
            title="Contemplative Reptile"
          />
         
          <CardContent className={classes.CardContent}>
            <Typography gutterBottom variant="h5" component="h2">
            {item.title}
            </Typography>
            <Typography
              variant="body2"
              className={classes.CardContentTextSecondary}
              component="p"
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions className={classes.CardContent} >
          <CustomButton
        onSubmit={handleClick}
        title="See All"
        classNames={classes.extraButtonClass}
      />
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default ServiceCard;
