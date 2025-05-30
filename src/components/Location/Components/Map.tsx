import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { useCallback, useState } from "react";

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
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <div className="h-5 w-5 bg-amber-800 z-20 -translate-y-10">
          <i className="fas fa-map-marker-alt text-4xl text-blue-900 mb-4 "></i>
        </div>
      </GoogleMap>
    )
  );
};

export default Map;
