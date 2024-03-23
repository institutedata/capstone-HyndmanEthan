import { useState } from "react";
import MapComponent from "../components/Map/MapComponent";
import MapWrapper from "../components/Map/MapWrapper";
import { defaultPosition, defaultZoomLevel } from "../config/global";
import GLOBAL from "../config/global";

const MapPage = () => {



  return (
    <MapWrapper>
      <div style={{ height: "94vh", width: "100vw" }}>
        <MapComponent
          defaultZoom={defaultZoomLevel}
          defaultCenter={defaultPosition}
          mapId={GLOBAL.GOOGLE_MAPS_ID}
        />
        
      </div>
    </MapWrapper>
  );
};

export default MapPage;
