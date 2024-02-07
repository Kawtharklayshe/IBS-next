import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // the root class
  root: {
    boxShadow: `0px 0px ${theme.shape.cardElevation}px`,
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.card.main,
    borderRadius: theme.shape.cardRadius,
    transform: 'translateY(0px)',
    transition: '0.3s',
    width: '90%',
    margin: '0',
    border: '0',
    position: 'relative',
    zIndex: '0',
    '&:hover': {
      transition: '0.5s',
      transform: 'translateY(-10px)',
    },
    '&:hover img': {
      filter: 'invert(1)',
    },
    '&:hover $OverlayCardHoverType2': {
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(58, 73, 116, 0.77)',
      borderRadius: '10px',
      visibility: 'visible',
      transition: 'width .4s linear',
    },
    '&:hover h6': {
      color: theme.palette.onPrimary.main,
      transition: 'color 0.4s ease',
      position: 'relative',
    },
    '&:hover p': {
      color: theme.palette.onPrimary.main,
      transition: 'color 0.4s ease',
      position: 'relative',
    },
    '&:hover $btnCardType2': {
      color: 'orange',
      transition: 'color 0.4s ease',
    },
  },

  // div That Has (Overlay Effect)
  OverlayCardHoverType2: {
    width: '0%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    visibility: 'hidden',
    borderRadius: '10px',
    transition: 'width 0.4s linear, visibility 0.4s linear',
    zIndex: '-1',
  },

  //Container That have (Box Image) and (Box Text)
  ContainerImageAndText: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    padding: '20px',
    verticalAlign: 'baseline',
  },
  //Container That has an Image
  ImageContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //Image in Services Cards Type 2
  ImageCardType2: {
    width: '70px',
    height: '70px',
  },
  //Container That have Title and Description
  TextContainer: {
    marginTop: '2rem',
  },
  //Title in Services Cards Type 2
  TitleCardType2: {
    color: theme.palette.onCard.main,
    fontWeight: 'bold',
    lineHeight: '20px',
    textTransform: 'capitalize',
    marginBottom: '10px',
    textAlign: 'center',
  },
  //Description in Services Cards Type 2
  DescriptionCardType2: {
    color: theme.palette.onCard.light,
    lineHeight: '20px',
    marginBottom: '10px',
    textAlign: 'center',
    display: '-webkit-box',
    lineClamp: '3',
    boxOrient: 'vertical',
    minHeight: '3rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  //Button in Services Cards Type 2
  btnCardType2: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
    marginTop: '24px !important',
  },
}));

export default useStyles;
