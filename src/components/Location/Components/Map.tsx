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
    googleMapsApiKey: "AIzaSyCDr4MC5PZPQJF_AdWR8_t0MrvX7wutDzE",
  });

  return (
    isLoaded && (
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
        <div className="h-5 w-5 bg-amber-800 z-20 -translate-y-10">
          <i className="fas fa-map-marker-alt text-4xl text-blue-900 mb-4 "></i>
        </div>
      </GoogleMap>
    )
  );
};

export default Map;
