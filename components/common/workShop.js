import { Box, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import EventSlider from "./eventSlider";
import style from "../../styles/workshop/style.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    border: `2px solid ${theme.primaryColor}`,
  },
}));

export function WorkShopCard({ data, theme }) {
  function convertToPlain(html) {
    if (typeof window === "object") {
      let tempDivElement = document.createElement("div");
      tempDivElement.innerHTML = html;
      return tempDivElement.textContent || tempDivElement.innerText || "";
    }
  }
  const Router = useRouter();
  const classes = useStyles();
  const { t } = useTranslation("common");

  return (
    <div>
      {/* <Box className={style.boxWorkShopAll}>
        <div
          style={{
            position: "relative",
            bottom: "120px",
            backgroundColor: "#F8F8F8",
            paddingBottom: "1px",
            paddingTop: "20px",
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
        >
          <Box className={style.boxWorkShop}>
            <Typography
              variant="h6"
              component="h6"
              className={style.headWorkShop}
            >
              {data?.title}
            </Typography>

            <div
              className={style.descWorkShop}
              dangerouslySetInnerHTML={{
                __html: data?.description,
              }}
            ></div>
          </Box>
        </div>
      </Box> */}
      {/* <Accordion
        sx={{
          borderBottom: "1px solid",
          borderBottomColor: "primary.main",
          // boxShadow: "unset",
          // border: "none",
          width: "50%",
          display: "block",
          margin: "auto !important",
          position: "relative",
          top: "-60px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            color="primary.main"
            variant="h6"
            component="h6"
            className={style.headWorkShop}
          >
            {data?.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "backgroundColor.main",
            cursor: "pointer",
          }}
        >
          <div
            className={style.descWorkShop}
            dangerouslySetInnerHTML={{
              __html: data?.description,
            }}
          ></div>
        </AccordionDetails>
      </Accordion> */}
      <Box>
        <div className={classes.root}>
          {data?.comingEvents?.length ? (
            <Accordion
              defaultExpanded={true}
              sx={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "primary.main",
                boxShadow: "unset",
              }}
              //  elevation={3}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    color: "primary.main",
                  }}
                  className={style.h6Accordion}
                >
                  {`${t("UpComing")} ${data?.title}(${t("plural")})`}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "backgroundColor.main",
                  cursor: "pointer",
                }}
              >
                <EventSlider events={data?.comingEvents} />
              </AccordionDetails>
            </Accordion>
          ) : (
            ""
          )}
          {data?.pastEvents?.length ? (
            <Accordion
              sx={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "primary.main",
                boxShadow: "unset",
                marginTop: "25px",
              }}
              //  elevation={3}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    color: "primary.main",
                  }}
                  className={style.h6Accordion}
                >
                  {`${t("Past")} ${data?.title}(${t("plural")})`}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "backgroundColor.main",
                  cursor: "pointer",
                }}
              >
                <EventSlider events={data?.pastEvents} />
              </AccordionDetails>
            </Accordion>
          ) : (
            ""
          )}
        </div>
      </Box>
    </div>
  );
}

export default WorkShopCard;
