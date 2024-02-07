import useTranslation from "next-translate/useTranslation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Typography, Box, Card, CardContent } from "@mui/material";
import useStyles from "./style";
export default function InfoSection({ data }) {
  let { t } = useTranslation("common");
  const classes = useStyles();
  const makeArrayValues = (type) => {
    let address = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].channel == type) address.push(data[i].value);
    }
    return address;
  };
  const getLocationInfo = () => {
    let lat = data?.find(({ channel }) => channel == "Lat")?.value;
    let lng = data?.find(({ channel }) => channel == "Lng")?.value;
    return { lat, lng };
  };

  return (
    <Box className={classes.root}>
      {data.filter((value) => value.channel == "Address").length > 0 && (
        <div
          className={classes.addressContainer}
          onClick={() =>
            window.open(
              `https://www.google.com/maps/@${getLocationInfo().lat},${
                getLocationInfo().lng
              },19.5z`,
              "_blank"
            )
          }
        >
          <Card className={classes.addressCard}>
            <CardContent>
              <LocationOnIcon className={classes.iconClass} />
              <Typography className={classes.addressTitle} variant="h6">
                {t("Our Location")}
              </Typography>
              <Box>
                {makeArrayValues("Address")?.map((item, index) => {
                  return (
                    <Typography
                      className={classes.addressDescription}
                      variant="body1"
                      component="p"
                      key={index}
                    >
                      {item}
                    </Typography>
                  );
                })}
              </Box>
            </CardContent>
          </Card>
        </div>
      )}
      {data?.filter((value) => value.channel == "Phone").length > 0 && (
        <div className={classes.phoneContainer}>
          <Card className={classes.phoneCard}>
            <CardContent>
              <CallIcon className={classes.phoneIconClass} />
              <Typography className={classes.phoneTitle} variant="h6">
                {t("Phone Number")}
              </Typography>
              {makeArrayValues("Phone")?.map((item, index) => {
                return (
                  <Typography
                    className={classes.phoneDescription}
                    variant="subtitle2"
                    key={index}
                  >
                    {item}
                  </Typography>
                );
              })}
            </CardContent>
          </Card>
        </div>
      )}
      {data?.filter((value) => value.channel == "Email").length > 0 && (
        <div className={classes.emailContainer}>
          <Card className={classes.emailCard}>
            <CardContent>
              <EmailIcon className={classes.emailIconClass} />
              <Typography className={classes.emailTitle} variant="h6">
                {t("Email Us")}
              </Typography>
              {makeArrayValues("Email")?.map((item, index) => (
                <Typography
                  className={classes.emailDescription}
                  variant="body1"
                  component="p"
                  key={index}
                >
                  {item}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </div>
      )}
    </Box>
  );
}
