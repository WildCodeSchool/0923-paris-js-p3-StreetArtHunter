// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import AuthContext from "../../context/AuthContext";
import "./spotCard.css";

function SpotCard({ location }) {
  const { image } = location;
  // const { user } = useContext(AuthContext);
  console.info(location);
  const navigate = useNavigate();
  return (
    <section>
      <div
        className="SpotCard_section"
        onClick={() => navigate(`/spotzonebyid/${location.id}`)}
        onKeyDown={() => navigate(`/spotzonebyid/${location.id}`)}
        tabIndex="0"
        role="button"
      >
        <div className="SpotCard_container">
          <img className="spot_image" src={image} alt="workspot" />
          <p className="spotCard_info">{location.name} </p>
        </div>
      </div>
    </section>
  );
}

export default SpotCard;
