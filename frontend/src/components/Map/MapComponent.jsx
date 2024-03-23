import React, { useState } from "react"; // Import useState from React
import { Map, AdvancedMarker, InfoWindow, Pin } from "@vis.gl/react-google-maps";

const MapComponent = ({ defaultZoom, defaultCenter, mapId }) => {
  const [showInfoWindow, setShowInfoWindow] = useState(false); // Initialize showInfoWindow state

  const handleMarkerClick = () => {
    setShowInfoWindow(true); // Open the info window when the marker is clicked
  };

  const handleCloseInfoWindow = () => {
    setShowInfoWindow(false); // Close the info window when the close button is clicked
  };

  return (
    <>
      <Map
        defaultZoom={defaultZoom}
        defaultCenter={defaultCenter}
        mapId={mapId}
      >
        <AdvancedMarker
          key={1}
          title={"Chur Bae"}
          position={{ lat: -36.84929860386961, lng: 174.75828893877747 }}
          onClick={handleMarkerClick} // Call handleMarkerClick when the marker is clicked
        >
          <Pin
            background={"#FBBC04"}
            glyphColor={"#000"} // Set glyph color to transparent
            borderColor={"#000"}
          />
        </AdvancedMarker>

        {showInfoWindow && (
          <InfoWindow
            position={{ lat: -36.84929860386961, lng: 174.75828893877747 }} // Position of the info window
            onCloseClick={handleCloseInfoWindow} // Call handleCloseInfoWindow when the close button is clicked
          >
            <div>
              {/* Content of the info window */}
              <h3>Chur Bae</h3>
              <p>Additional information goes here...</p>
            </div>
          </InfoWindow>
        )}
        <AdvancedMarker
          key={2}
          title={"Chur Bae"}
          position={{ lat: -36.8645106, lng: 174.7379457 }}
          onClick={handleMarkerClick} // Call handleMarkerClick when the marker is clicked
        >
          <Pin
            background={"#FBBC04"}
            glyphColor={"#000"} // Set glyph color to transparent
            borderColor={"#000"}
          />
        </AdvancedMarker>
        <AdvancedMarker
          key={3}
          title={"Chur Bae"}
          position={{ lat: -36.848484599314986, lng: 174.75560541166732 }}
          onClick={handleMarkerClick} // Call handleMarkerClick when the marker is clicked
        >
          
          <Pin
            background={"#FBBC04"}
            glyphColor={"#000"} // Set glyph color to transparent
            borderColor={"#000"}
          />
        </AdvancedMarker>
        <AdvancedMarker
          key={4}
          title={"Chur Bae"}
          position={{ lat: -36.858475226999644, lng: 174.73087487116462 }}
          onClick={handleMarkerClick} // Call handleMarkerClick when the marker is clicked
        >
           
          <Pin
            background={"#FBBC04"}
            glyphColor={"#000"} // Set glyph color to transparent
            borderColor={"#000"}
          />
        </AdvancedMarker>

      </Map>
    </>
  );
};

export default MapComponent;
