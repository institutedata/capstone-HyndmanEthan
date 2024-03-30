// PinComponent.js
import React from "react";
import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

const PinComponent = ({ pins, markerRef, toggleInfoWindow }) => {
  return (
    <>
      {pins.map((pin) => (
        <AdvancedMarker
          key={pin.id}
          title={pin.vendorName}
          position={{ lat: pin.lat, lng: pin.lng }}
          onClick={() => toggleInfoWindow(pin)} // Pass the pin to toggleInfoWindow
          ref={markerRef} // Assuming markerRef is used elsewhere
        >
          <Pin
            background={"#FBBC04"}
            glyphColor={"#000"}
            borderColor={"#000"}
          />
        </AdvancedMarker>
      ))}
    </>
  );
};

export default PinComponent;
