import styles from "../../styles/contact/style.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";
import useTranslation from "next-translate/useTranslation";
import { Grid, Typography, Container, Card, CardContent } from "@mui/material";
import { display } from "@mui/system";
export default function Details({ data }) {
  let { t } = useTranslation("common");
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
    <div style={{ display:'flex',gap:'50px',justifyContent:'center',marginBottom:'200px',flexWrap:'wrap'}}>
      {data.filter((value) => value.channel == "Address").length > 0 && (
        <div
          className={styles.mainAddress}
          onClick={() =>
            window.open(
              `https://www.google.com/maps/@${getLocationInfo().lat},${
                getLocationInfo().lng
              },19.5z`,
              "_blank"
            )
          }
        >
          {/* <LocationOnIcon sx={{ color: "primary.main", fontSize: "27px" }} /> */}
          <div>
            {/* <Typography variant="subtitle2" component="h6" color="primary.main">
              {t("location")}
            </Typography> */}
               
                <Card className={styles.cardHover}  
                sx={{width: '242px' ,
                //  height: '186px',
                height: '100%',
                "&:hover":{
                  backgroundColor:'primary.main',
                }}}>
                  <CardContent>
                  <LocationOnIcon className={styles.iconHover}
                   sx={{ color: "primary.main", fontSize: "27px", display:'block',margin:"auto",marginBottom:'20px' }} />
                  <Typography className={styles.headHover}
                   variant="h6"
                   sx={{textAlign:'center',marginBottom:'20px'}}>{t("Our Location")}</Typography>
                   {makeArrayValues("Address")?.map((item, index) => {
                     return (
                      <div className={styles.cardCollapsible }>
                <Typography
                className={styles.desHover}
                id={styles.paragraphStyling }
                  variant="body1"
                  component="p"
                  color="onCard.light"
                  key={index}
                  sx={{ mb: 1 }}
                >      
                    
                  {item}
                </Typography>
                </div>
                );
              })}
              </CardContent>
              </Card>
          </div>
        </div>
      )}
      {data?.filter((value) => value.channel == "Phone").length > 0 && (
        <div className={styles.detail}>
          {/* <CallIcon sx={{ color: "primary.main", fontSize: "27px" }} /> */}
          <div>
            {/* <Typography variant="subtitle2" component="h6" color="primary.main">
              {t("Contactinfo")}
            </Typography> */}
                <Card className={styles.cardHover}  sx={{width: '242px' ,
                //  height: '186px',
                 height: '100%',
                "&:hover":{
                  backgroundColor:'primary.main',
                }}}>
                  <CardContent>
                  <CallIcon className={styles.iconHover} sx={{ color: "primary.main", fontSize: "27px", display:'block',margin:"auto",marginBottom:'20px' }} />
                  <Typography className={styles.headHover} variant="h6" sx={{textAlign:'center',marginBottom:'20px'}}>{t("Phone Number")} </Typography>
                  {makeArrayValues("Phone")?.map((item, index) => {
                    return (
                <Typography
                className={styles.desHover}
                id={styles.paragraphStyling }
                  variant="body1"
                  component="p"
                  color="onCard.light"
                  key={index}
                  sx={{ mb: 1 , textAlign: 'center' }}
                >
                  Tel: {item} 
                  
                </Typography>
                );
              })}
              </CardContent>
              </Card>
          </div>
        </div>
      )}
      {data?.filter((value) => value.channel == "Website").length > 0 && (
        <div className={styles.detail}>
          <LanguageIcon sx={{ color: "primary.main", fontSize: "27px" }} />
          <div>
            {/* <Typography variant="subtitle2" component="h6" color="primary.main">
              {t("website")}
            </Typography> */}
            {makeArrayValues("Website")?.map((item, index) => {
              return (
                <Typography
                id={styles.paragraphStyling }
                  variant="body1"
                  component="p"
                  color="onCard.dark"
                  key={index}
                  sx={{ mb: 1 }}
                >
                  {item}
                </Typography>
              );
            })}
          </div>
        </div>
      )}
      {data?.filter((value) => value.channel == "Email").length > 0 && (
        <div className={styles.detail}>
          {/* <EmailIcon sx={{ color: "primary.main", fontSize: "27px" }} /> */}
          <div>
            {/* <Typography variant="subtitle2" component="h6" color="primary.main">
              {t("email")}
            </Typography> */}
                <Card className={styles.cardHover} sx={{width: '242px' , 
                // height: '186px',
                height: '100%',
                "&:hover":{
                  backgroundColor:'primary.main',
                }}}>
                  <CardContent>
                  <EmailIcon className={styles.iconHover} sx={{ color: "primary.main", fontSize: "27px", display:'block',margin:"auto",marginBottom:'20px' }} />
                  <Typography className={styles.headHover} variant="h6" sx={{textAlign:'center',marginBottom:'20px'}}>{t("Email Us")}</Typography>
                {makeArrayValues("Email")?.map((item, index) => {
                  return (
                <Typography
                className={styles.desHover}
                id={styles.paragraphStyling }
                  variant="body1"
                  component="p"
                  color="onCard.light"
                  key={index}
                  sx={{ mb: 1 , textAlign:'center' }}
                >
                  {item}
                </Typography>
                );
              })}
              </CardContent>
              </Card>
          </div>
        </div>
      )}
    </div>
  );
}
