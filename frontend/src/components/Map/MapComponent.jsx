// This file is used to render the map component.

import React from "react";
import { Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import PinComponent from "./PinComponent";

const MapComponent = ({ defaultZoom, defaultCenter, mapId, pins, markerRef, toggleInfoWindow }) => {
  return (
    <>
      <Map
        // defaultZoom, defaultCenter, and mapId are passed as props to the Map component
        defaultZoom={defaultZoom}
        defaultCenter={defaultCenter}
        // mapId is used to identify the map instance and provide custom theme
        mapId={mapId}
        // removes the default UI for google maps
        disableDefaultUI={true}
      >
        {/* Pin component fetches pins and adds them to the map */}
      <PinComponent />
      </Map>
    </>
  );
};

export default MapComponent;

