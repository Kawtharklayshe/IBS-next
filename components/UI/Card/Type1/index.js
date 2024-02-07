import { Typography, Box } from '@mui/material';
import useStyles from './style';

const MutualCard = ({ title, subTitle, imageUrl, onClick = undefined }) => {
  const classes = useStyles();

  return (
    <Box onClick={onClick} className={classes.root}>
      <Box className={classes.ImageContainer}>
        <img className={classes.image} src={imageUrl} alt="cardPicture" />
        <Box className={classes.TextContainer}>
          <Typography variant="h6" component="h6" className={classes.Title}>
            {title}
          </Typography>
          <Typography variant="p" component="p" className={classes.description}>
            {subTitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default MutualCard;
