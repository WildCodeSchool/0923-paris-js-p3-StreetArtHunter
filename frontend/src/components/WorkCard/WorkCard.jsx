import "./workCard.css";

function WorkCard({ data }) {
  const { image, entry, userSub, artist, location } = data;
  return (
    <section className="workCard_container">
      <div className="workCard_content">
        <img className="Work_image" src={image} alt="work" />
        <div className="work_infos_container">
          <p className="work_info"> entry: {entry}</p>
          <p className="work_info"> zone: {location}</p>
          <p className="work_info"> loc: adresse rue + cp</p>
          <p className="work_info"> artist: {artist}</p>
          <p className="work_info"> submitted by: {userSub}</p>
        </div>
      </div>
    </section>
  );
}

export default WorkCard;
