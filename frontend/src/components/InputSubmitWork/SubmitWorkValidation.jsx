/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import Map from "../Map/Map";
import ratPhotographer from "../../assets/images/img/Rat_photograph.png";
import "./submitWorkDesktop.css";

function SubmitWorkValidation({ onNextStep, selectedImage }) {
  const accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

  // change coordonate on cardinal button //
  const [mapCoordinates, setMapCoordinates] = useState({
    lng: 2.3522,
    lat: 48.8566,
    zoom: 11,
  });
  const insertImage = async (newlng, newlat, imagePath) => {
    try {
      fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${newlng},${newlat}.json?access_token=${accessToken}`
      )
        .then((response) => response.json())
        .then(async (data) => {
          const postalCode = data.features[0].place_name
            .split(", ")[1]
            .split(" ")[0];

          const form = new FormData();
          form.append("longitude", newlng);
          form.append("latitude", newlat);
          form.append("image", imagePath);
          form.append("entry", Date.now());
          form.append("postalCode", postalCode);

          const response = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/image`,
            {
              method: "POST",
              body: form,
              credentials: "include",
            }
          );

          if (response.status === 201) {
            console.info("Image inserted successfully");
          } else {
            console.error("Error inserting image");
          }
        });
    } catch (error) {
      console.error("Error inserting image:", error);
    }
  };

  return (
    <section className="SubmitW_container Global_height_smartPh Global_height">
      <div className="Picture_DesKtop_Submit">
        <img
          className="Rat_Picture_Submit_left"
          src={ratPhotographer}
          alt="ratLeft"
        />
      </div>
      <center className="title_Image_Content">
        <div className="title_Image">
          <h1 className="titleSubmitWork TSW-correctgap">propose a work</h1>
          <div className="blocImportImage">
            <div className="importImageInside">
              <Map
                UsingLng={mapCoordinates.lng}
                UsingLat={mapCoordinates.lat}
                UsingZoom={mapCoordinates.zoom}
                height="90%"
                width="39%"
                className="map_WCB"
                search
                mapMarker
                onMarkerClick={(coordinates) =>
                  insertImage(coordinates.lng, coordinates.lat, selectedImage)
                }
              />
            </div>
          </div>

          <div className="inputLocation_SWV">
            location
            <label htmlFor="location">
              <input className="caseLocation_SWV" type="text" id="location" />
            </label>
            <div className="inputArtiste_SWV">
              artiste
              <label htmlFor="artiste">
                <input className="caseArtiste_SWV" type="text" id="artiste" />
              </label>
            </div>
          </div>

          <div
            className="Button-SubmitWork"
            role="button"
            onClick={() => onNextStep("/submitworkthank")}
            onKeyDown={() => onNextStep("/submitworkthank")}
            tabIndex="0"
          >
            <h3 className="Button-Validation">submit</h3>
          </div>
        </div>
      </center>
      <div className="Picture_DesKtop_Submit">
        <img
          className="Rat_Picture_Submit_right"
          src={ratPhotographer}
          alt="ratRight"
        />
      </div>
    </section>
  );
}

export default SubmitWorkValidation;
