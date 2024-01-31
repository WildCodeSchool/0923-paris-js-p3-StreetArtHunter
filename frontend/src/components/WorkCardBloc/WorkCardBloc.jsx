/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./workCardBloc.css";
import WorkCard from "../WorkCard/WorkCard";
import Map from "../Map/Map";

function workCardBloc({ data }) {
  // change coordonate on button //
  const [mapCoordinates, setMapCoordinates] = useState({
    lng: data.longitude,
    lat: data.latitude,
    zoom: 15,
  });
  return (
    <section>
      <div className="workCardBloc_container">
        <div className="workCardBloc_content">
          <WorkCard data={data} />
          <Map
            UsingLng={mapCoordinates.lng}
            UsingLat={mapCoordinates.lat}
            UsingZoom={mapCoordinates.zoom}
            height="90%"
            width="39%"
            className="map_WCB"
            search
            mapMarker
            works={[data]}
          />
        </div>
      </div>
    </section>
  );
}

export default workCardBloc;
