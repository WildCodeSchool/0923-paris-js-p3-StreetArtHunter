/* eslint-disable no-shadow */
/* eslint-disable camelcase */
import { useState } from "react";
import mapboxgl from "mapbox-gl";
import formatDate from "../../utils/FormatDate";
import "./workCard.css";

function WorkCard({ data, classForWCVADF }) {
  const {
    image,
    entry,
    user_pseudo,
    artist_pseudo,
    location_name,
    longitude,
    latitude,
  } = data;

  // Classtoggle to change width
  const WorkCardContainer = classForWCVADF
    ? "workCard_container_WVAF"
    : "workCard_container";

  // Format the entry date
  const formattedEntryDate = formatDate(entry);

  // convert Long/lat to placename
  const [address, setAddress] = useState("");

  fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxgl.accessToken}`
  )
    .then((response) => response.json())
    .then((datas) => {
      const address = datas.features[0].place_name;
      console.info(datas.features[0]);
      setAddress(address);
    })
    .catch((error) => {
      console.error(
        "Une erreur est survenue lors de la requête à Mapbox API :",
        error
      );
    });

  return (
    <section className={WorkCardContainer}>
      <div className="workCard_content">
        <img className="Work_image" src={image} alt="work" />
        <div className="work_infos_container">
          <p className="work_info">
            <span className="WIC_span">zone:</span> {location_name}
          </p>
          <p className="work_info">
            <span className="WIC_span">adress:</span>
            {address}
          </p>
          <p className="work_info">
            <span className="WIC_span">artist</span>: {artist_pseudo}
          </p>
          <p className="work_info">
            <span className="WIC_span">submitted by:</span> {user_pseudo}
          </p>
          <p className="work_info">
            <span className="WIC_span">entry: </span> {formattedEntryDate}
          </p>
        </div>
      </div>
    </section>
  );
}

export default WorkCard;
