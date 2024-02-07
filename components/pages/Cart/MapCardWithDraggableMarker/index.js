import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import useTranslation from "next-translate/useTranslation";
import { GpsFixed } from "@mui/icons-material";
import { Button } from "@mui/material";
import useStyles, { containerStyle } from "./style";

const MapCardWithDraggableMarker = ({ markerInfo, setMarker }) => {
  let { t, lang } = useTranslation("common");
  const [mapCenterInfo, setMapCenterInfo] = useState();
  const [detectLoading, setDetectLoading] = useState(false);
  const classes = useStyles();
  const { lat, lng } = markerInfo;

  const handleChooseMarker = (e) => {
    setMarker({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };
  const getCurrentLocation = () => {
    setDetectLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setDetectLoading(false);
        setMapCenterInfo({
          lat: parseFloat(position.coords.latitude),
          lng: parseFloat(position.coords.longitude),
        });
        setMarker({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        setMapCenterInfo({
          lat: 0.0,
          lng: 0.0,
        });
        setDetectLoading(false);
      }
    );
  };
  // get user position if there is no marker and update map center
  useEffect(() => {
    if (!lat && !lng)
      navigator.geolocation.getCurrentPosition(
        (position) =>
          setMapCenterInfo({
            lat: parseFloat(position.coords.latitude),
            lng: parseFloat(position.coords.longitude),
          }),
        () =>
          setMapCenterInfo({
            lat: 0.0,
            lng: 0.0,
          })
      );
  }, []);

  const mapCenter = lat && lng ? markerInfo : mapCenterInfo;
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={mapCenter?.lat == 0.0 ? 2 : 6}
        onClick={handleChooseMarker}
        //onLoad={getCurrentLocation}
      >
        {lng && lat && (
          <Marker
            position={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
            draggable
            onDragEnd={handleChooseMarker}
          />
        )}
        {/* Child components, such as markers, info windows, etc. */}
      </GoogleMap>
      <Button
        variant="outlined"
        className={classes.detectButton}
        disabled={detectLoading}
        onClick={getCurrentLocation}
      >
        <GpsFixed className={classes.detectIcon} />{" "}
        {!detectLoading && t("Detect Current Location")}
      </Button>
    </LoadScript>
  );
};

export default MapCardWithDraggableMarker;
