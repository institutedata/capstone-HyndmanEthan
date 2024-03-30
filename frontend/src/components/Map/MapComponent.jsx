// MapComponent.js
import React from "react";
import { Map, AdvancedMarker } from "@vis.gl/react-google-maps";
// import PinComponent from "./PinComponent";

const MapComponent = ({ defaultZoom, defaultCenter, mapId, pins, markerRef, toggleInfoWindow }) => {
  return (
    <>
      <Map
        defaultZoom={defaultZoom}
        defaultCenter={defaultCenter}
        mapId={mapId}
        disableDefaultUI={true}
      >
        {/* <PinComponent pins={pins} markerRef={markerRef} toggleInfoWindow={toggleInfoWindow} /> */}
      <AdvancedMarker
                  
                  position={{ lat: -36.84827218198349, lng: 174.7630093593862 }} // Use the pin data to set marker position
                  >
      </AdvancedMarker>

      </Map>
    </>
  );
};

export default MapComponent;

