/* eslint-disable camelcase */
import formatDate from "../../utils/FormatDate";
import "./workCard.css";

function WorkCard({ data, classForWCVADF }) {
  const {
    image,
    entry,
    user_pseudo,
    artist_pseudo,
    location_name,
    // longitude,
    // latitude,
  } = data;

  // Classtoggle to change width
  const WorkCardContainer = classForWCVADF
    ? "workCard_container_WVAF"
    : "workCard_container";

  // Format the entry date
  const formattedEntryDate = formatDate(entry);

  return (
    <section className={WorkCardContainer}>
      <div className="workCard_content">
        <img className="Work_image" src={image} alt="work" />
        <div className="work_infos_container">
          <p className="work_info">
            <span className="WIC_span">entry: </span> {formattedEntryDate}
          </p>
          <p className="work_info">
            <span className="WIC_span">zone:</span> {location_name}
          </p>
          <p className="work_info">
            <span className="WIC_span">loc:</span>
          </p>
          <p className="work_info">
            <span className="WIC_span">artist</span>: {artist_pseudo}
          </p>
          <p className="work_info">
            <span className="WIC_span">submitted by:</span> {user_pseudo}
          </p>
        </div>
      </div>
    </section>
  );
}

export default WorkCard;
