// Desc: This file contains the MapPins which is responsible for rendering the pins on the map.
// The MapPins fetches the data from the server using the useDataFetcher hook and renders the pins on the map.
// TODO: Add InfoWindow to display vendor details when a pin is clicked.
import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import GLOBAL from "../../config/global";
import useDataFetcher from "../../utils/useDataFetcher"; // Import fetcher

const MapPins = ({ pins: propPins, markerRef, toggleInfoWindow }) => {
  
  const pinRefs = {};

  return (
    <>
    
      {propPins.map((pin) => (
        <AdvancedMarker
          key={pin._id}
          title={pin.vendorName}
          position={{ lat: pin.lat, lng: pin.lng }}
          onClick={() => toggleInfoWindow(pin)}
          ref={(ref) => (pinRefs[pin.card] = ref)} // Store ref in pinRefs
        >
          
          <Pin background={"#FBBC04"} glyphColor={"#000"} borderColor={"#000"}  />
        </AdvancedMarker>
      ))}
      {console.log(pinRefs)} {/* Log pinRefs these will be used to set the markers for each of the infowindows (vendor cards in the maps) */}
    </>
  );
};

const PinComponent = () => {
  const { loading, data: pins, error } = useDataFetcher(`${GLOBAL.SERVER_URL}/pins/`);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <MapPins pins={pins.data} />;
};

export default PinComponent;

