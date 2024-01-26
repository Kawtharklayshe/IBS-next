import Head from "next/head";
import { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import useFetch from "../../../../components/useFetch/useFetch";
import { GET_EVENT_ACTION_DETAILS_PAGE } from "../../../../services/endpoints";
import { checkLoadImages } from "../../../../utilies/utiliesFuctions";
import CustomLoader from "../../../../components/customLoader";
import EventActionForm from "../../../../components/common/eventActionForm";

export default function EventAction({ data, headerType, theme }) {
  const [loading, setLoading] = useState(true);
  let { t } = useTranslation("common");
  useEffect(() => {
    checkLoadImages(setLoading);
  }, []);

  if (loading || !data?.data?.actionEventItems?.title) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "#fcfcfc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: "1000",
        }}
        className={!loading ? "none" : undefined}
      >
        <CustomLoader />
      </div>
    );
  }

  return (
    <div className={loading ? "hidden" : undefined}>
      <Head>
        <title>{data?.data?.actionEventItems?.title}</title>
      </Head>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary.main">
              {data?.data?.actionEventItems?.title}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography
              variant="body1"
              component="p"
              dangerouslySetInnerHTML={{
                __html: data?.data?.actionEventItems?.content,
              }}
              sx={{ overflow: "hidden" }}
            />
          </Grid>
          {Boolean(data?.data?.actionEventItems?.displayRegistrationForm) && (
            <Grid item xs={12} md={8}>
              <EventActionForm
                eventAction={data?.data?.actionEventItems}
                participants={data?.data?.actionEventItems.participants}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export const getServerSideProps = async ({ params, locale }) => {
  const [getFetch] = useFetch();
  const eventActionSlug = params?.eventActionSlug;

  const res = await getFetch(
    GET_EVENT_ACTION_DETAILS_PAGE(eventActionSlug),
    process.env.NEXT_PUBLIC_MERCHANT,
    locale
  );
  const data = await res?.json();

  return {
    props: {
      data: data,
    },
  };
};
