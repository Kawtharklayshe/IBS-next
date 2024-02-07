import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& div.contentContainer": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "80%",
      background: "url(./images/modal_bg.webp)",
      width: "445px",
      maxWidth: "400px",
      height: "531px",
      maxHeight: "80vh",
      borderRadius: "13px",
      display: "grid",
      placeItems: "center",

      [theme.breakpoints.down(1000)]: {
        maxWidth: "320px",
      },

      "&:focus": {
        outline: "none",
      },

      "& div.content": {
        width: "90%",
        height: "90%",
        background: "#fff",
        borderRadius: "13px",

        "& div.closeBtn": {
          textAlign: "end",
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "15px",
          paddingTop: "9px",

          "& svg": {
            color: "#4F4C4C",
            cursor: "pointer",
            transform: "scale(1)",
            transition: "all 0.3s",

            "&:hover": {
              transform: "scale(1.2)",
            },
          },
        },

        "& div.actualContent": {
          height: "calc(100% - 33px)",

          "& div.imgContainer": {
            height: "41%",
            backgroundImage: `url("/images/image 38.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          },

          "& .title": {
            marginTop: 0,
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "28px",
            color: theme.palette.primary.main,
            textAlign: "center",
            overflow: "hidden",
            display: "-webkit-box",
            "-webkitLineClamp": 2,
            "-webkitBoxOrient": "vertical",
          },

          "& p.description": {
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "21px",
            textAlign: "center",
            overflow: "hidden",
            display: "-webkit-box",
            "-webkitLineClamp": 2,
            "-webkitBoxOrient": "vertical",
            overflow: "hidden",
            display: "-webkit-box",
            "-webkitLineClamp": 5,
            "-webkitBoxOrient": "vertical",

            [theme.breakpoints.down(1170)]: {
              "-webkitLineClamp": 4,
            },
          },

          "& .title, & p.description": {
            width: "90%",
            marginRight: "auto",
            marginLeft: "auto",
          },
        },
      },
    },
  },
}));

export default useStyles;
