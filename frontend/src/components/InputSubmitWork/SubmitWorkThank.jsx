import { useNavigate } from "react-router-dom";
import { heartIcon } from "../../assets/images/img/heart1.png";
import "./submitWork.css";

function SubmitWorkThank() {
  const navigate = useNavigate();

  return (
    <section className="centered">
      <h1 className="titleSubmitWork">propose a work</h1>

      <img className="heartIcon" src={heartIcon} alt="heartIcon" />

      <div
        className="Button-SubmitWork"
        role="button"
        onClick={() => {
          navigate("/login");
        }}
        onKeyDown={() => {
          navigate("/login");
        }}
        tabIndex="0"
      >
        <h3 className="Button-Validation">back</h3>
      </div>
    </section>
  );
}

export default SubmitWorkThank;
