// MapContainer.js
// This file is used to wrap the map component with the APIProvider component from @vis.gl/react-google-maps.
// This is necessary to provide the Google Maps API key to the map component.
import React from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
// import MapComponent from "./MapComponent";
import GLOBAL from "../../config/global";

const MapWrapper = ({ children }) => {
  return (
    <APIProvider apiKey={GLOBAL.GOOGLE_MAPS_API_KEY}>
      {children}
    </APIProvider>
  );
};

export default MapWrapper;
