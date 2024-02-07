import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  //root class
  root: {
    '&:hover': {
      background: 'rgba(97, 97, 97, 0.1)',
      borderRadius: theme.shape.cardRadius,
      cursor: 'pointer',
    },
  },

  //Box That have (Title and description)
  TextContainer: {
    background: theme.palette.onPrimary.main,
    borderRadius: '4px',
    width: '100%',
    height: '120px',
    marginTop: '-10px',
  },

  //The Image
  image: {
    width: '100%',
    height: '200px',
    borderRadius: '4px',
    objectFit: 'cover',
  },

  //The Title
  Title: {
    color: theme.palette.onCard.main,
  },

  //The Description
  description: {
    color: theme.palette.onCard.light,
  },
}));

export default useStyles;
