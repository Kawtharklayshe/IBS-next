import { Box, Typography } from "@mui/material";
import useStyles from "./style";

const TestimonialCard = ({ item }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography
        variant="body1"
        component="p"
        className={classes.commentContent}
      >
        {item?.content}
      </Typography>
      {/** person info section */}
      <Box className={classes.personInfoContainer}>
        <img src={item?.image} className={classes.personImage} />
        <Box>
          <Typography
            variant="subtitle1"
            component="h6"
            className={classes.personTitle}
          >
            {item?.name}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.personPosition}
          >
            {item?.position}
          </Typography>
        </Box>
      </Box>
      {/** end of person info section */}
    </Box>
  );
};
export default TestimonialCard;
