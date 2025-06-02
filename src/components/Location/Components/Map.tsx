import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center: google.maps.LatLngLiteral = {
  lat: -3.823315445209218,
  lng: -38.58396160677644,
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
  });

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={20}
      ></GoogleMap>
    )
  );
};

export default Map;
