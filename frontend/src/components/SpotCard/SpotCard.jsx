import "./spotCard.css";

function SpotCard({ data }) {
  const { image, location } = data;

  return (
    <section className="SpotCard_section">
      <div className="SpotCard_container">
        <img className="spot_image" src={image} alt="workspot" />
        <p className="spotCard_info">{location} </p>
      </div>
    </section>
  );
}

export default SpotCard;
