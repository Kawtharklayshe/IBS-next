import Image from "next/image";
import { Box, Typography } from "@mui/material";
import StarRatings from "react-star-ratings";
import avatarSrc from "../../../../../assets/user.png";
import useStyles from "./style";

const ReviewCard = ({ data, theme }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.infoContainer}>
        <Box className={classes.personContainer}>
          <Image
            src={avatarSrc}
            className={classes.avatar}
            width={63}
            height={63}
          />
          <Box className={classes.fullNameContainer}>
            <Typography variant="h6" className={classes.fullName}>
              {data.name}
            </Typography>
            <Typography variant="subtitle1" className={classes.infoDate}>
              {data.createdAt}
            </Typography>
          </Box>
        </Box>
        <StarRatings
          rating={data.itemRate}
          starRatedColor={theme?.primaryColor}
          starSelectingHoverColor={theme?.primaryColor}
          numberOfStars={5}
          starDimension="19px"
          starSpacing="1px"
          name="rating"
        />
      </Box>
      <Typography variant="body1" className={classes.content}>
        {data.text}
      </Typography>
    </Box>
  );
};

export default ReviewCard;
