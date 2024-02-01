/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./workCardBloc.css";
import WorkCard from "../WorkCard/WorkCard";
import Map from "../Map/Map";

function workCardBloc({
  data,
  admin = false,
  settingValidation = false,
  closeModal,
  handleDelete,
  handleValidate,
}) {
  const [setting, setSetting] = useState(false);
  console.info(data);
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
          <WorkCard data={data} settingValidation />
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
        {admin && (
          <div>
            <div
              className="workCardBloc__modif_btn"
              onClick={() => setSetting(true)}
              style={{ display: setting ? "none" : "block" }}
            >
              MODIFY
            </div>
          </div>
        )}
        {setting && (
          <section className="setting_btns_WCB">
            <div
              className="valid_btn_WCB"
              // onClick={() => handleValidate(data.id, data.user_id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35"
                viewBox="0 -960 960 960"
                width="35"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </div>
            <div className="abort_btn_WCB" onClick={() => setSetting(false)}>
              ABORT
            </div>
            <div
              className="trash_btn_WCB"
              onClick={async () => {
                await handleDelete(data.id);
                closeModal();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35"
                viewBox="0 -960 960 960"
                width="35"
              >
                <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
              </svg>
            </div>
          </section>
        )}
        {settingValidation && (
          <section className="setting_btns_WCB">
            <div
              className="valid_btn_WCB"
              onClick={async () => {
                await handleValidate(data.id, data.user_id);
                closeModal();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35"
                viewBox="0 -960 960 960"
                width="35"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </div>
            <div className="abort_btn_WCB" onClick={() => closeModal()}>
              ABORT 2
            </div>
            <div
              className="trash_btn_WCB"
              onClick={async () => {
                await handleDelete(data.id);
                closeModal();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35"
                viewBox="0 -960 960 960"
                width="35"
              >
                <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
              </svg>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}

export default workCardBloc;
