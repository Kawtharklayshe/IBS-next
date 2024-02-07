import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "27vh",
    position: "relative",
    backgroundColor: theme.palette.primary.light,

    "& svg.waves": {
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "20vh",
      marginBottom: "-7px",
      minHeight: "100px",
      maxHeight: "150px",
    },

    "& .parallax > use": {
      animation: "$move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite",
    },

    "& .parallax > use:nth-child(1)": {
      animationDelay: "-2s",
      animationDuration: "4s",
    },

    "& .parallax > use:nth-child(2)": {
      animationDelay: "-3s",
      animationDuration: "7s",
    },

    "& .parallax > use:nth-child(3)": {
      animationDelay: "-4s",
      animationDuration: "10s",
    },

    "& .parallax > use:nth-child(4)": {
      animationDelay: "-5s",
      animationDuration: "20s",
    },

    /*Shrinking for mobile*/
    //   @media (max-width: 768px) {
    //     .waves {
    //       height:40px,
    //       min-height:40px,
    //     }
    //     .content {
    //       height:30vh,
    //     }
    //     h1 {
    //       font-size:24px,
    //     }
    //   }
  },

  "@keyframes move-forever": {
    "0%": {
      transform: "translate3d(-90px,0,0)",
    },

    "100%": {
      transform: "translate3d(85px,0,0)",
    },
  },
}));

export default useStyles;
