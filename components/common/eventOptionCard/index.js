import { Box, Typography, Card } from "@mui/material";
import { useRouter } from "next/router";
const EventOptionCard = ({ item, theme }) => {
  const Router = useRouter();
  console.log(item);
  return (
    <Card
    // onClick={() => item?.onClickUrl}
    onClick={() => Router.push(item?.onClickUrl)}
      sx={{
        height: "405px",
        width: "95%",
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: "20px",
      }}
    >
      <Box
        sx={{
          background: theme.primaryColor,
          color: theme.onPrimaryColor,
          height: "75px",
          display: "grid",
          placeItems: "center",
          backgroundImage: `url("/images/stars.png")`,
        }}
      >
        <Typography
          variant="h6"
          component="h6"
          sx={{
            overflow: "hidden",
            display: "-webkit-box",
            "-webkitLineClamp": "2",
            "-webkitBoxOrient": "vertical",
            textAlign: "center",
            fontSize: "15px",
          }}
        >
          {item.title}
        </Typography>
      </Box>
      <Box
        sx={{
          borderBottom: "1px solid #E4E4E4",
          height: "114px",
          display: "grid",
          placeItems: "center",
          padding: "12px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "13px",
            lineHeight: "24px",
            textAlign: "center",
            overflow: "hidden",
            display: "-webkit-box",
            "-webkitLineClamp": "4",
            "-webkitBoxOrient": "vertical",
          }}
        >
          {item.description}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          height: "calc(100% - 189px)",
          padding: "12px",
        }}
      >
        <Box style={{ height: "98px" }}>
          <Typography
            component="h3"
            sx={{
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "26px",
              textAlign: "center",
              color: theme.primaryColor,
              textTransform: "capitalize",
            }}
          >
            your qualification:
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "24px",
              textAlign: "center",
              height: "100%",
              overflow: "hidden",
              display: "-webkit-box",
              "-webkitLineClamp": "3",
              "-webkitBoxOrient": "vertical",
            }}
          >
            {item.qualification}
          </Typography>
        </Box>
        <Box style={{ height: "98px" }}>
          <Typography
            component="h3"
            sx={{
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "26px",
              textAlign: "center",
              color: theme.primaryColor,
              textTransform: "capitalize",
            }}
          >
            content:
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "24px",
              textAlign: "center",
              height: "100%",
              overflow: "hidden",
              display: "-webkit-box",
              "-webkitLineClamp": "3",
              "-webkitBoxOrient": "vertical",
            }}
          >
            {item.content}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default EventOptionCard;
