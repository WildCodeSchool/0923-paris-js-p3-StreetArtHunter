import "./spotCard.css";
import { useNavigate } from "react-router-dom";

function SpotCard({ data }) {
  const { image, location } = data;
  const navigate = useNavigate();
  return (
    <section>
      <div
        className="SpotCard_section"
        onClick={() => navigate(`/spotzonebyid/${location}`)}
        onKeyDown={() => navigate(`/spotzonebyid/${location}`)}
        tabIndex="0"
        role="button"
      >
        <div className="SpotCard_container">
          <img className="spot_image" src={image} alt="workspot" />
          <p className="spotCard_info">{location} </p>
        </div>
      </div>
    </section>
  );
}

export default SpotCard;
