
import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";


export default function PinComponent({ pins, markerRef, toggleInfoWindow}) {

    {pins.map((pin) => (
        <AdvancedMarker
            key={pin.id}
          title={pin.vendorName}
          ref={markerRef}
          position={{ lat: pin.lat, lng: pin.lng }} // Use the pin data to set marker position
          onClick={toggleInfoWindow}
        >
          <Pin
            background={"#FBBC04"}
            glyphColor={"#000"}
            borderColor={"#000"}
          />
        </AdvancedMarker>
      ))}}