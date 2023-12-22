import { useNavigate } from "react-router-dom";
import "./submitWork.css";

function SubmitWorkValidation() {
  const navigate = useNavigate();
  return (
    <section className="blockValidation">
      <h1 className="titleSubmitWork">propose a work</h1>
      <div className="blocImportImage">
        <div className="importImageInside">
          <p>add photo</p>
        </div>
      </div>
      <div className="inputLocation">
        location
        <label htmlFor="location">
          <input className="caseLocation" type="text" id="location" />
        </label>
        <div className="inputArtiste">
          artiste
          <label htmlFor="artiste">
            <input className="caseArtiste" type="text" id="artiste" />
          </label>
        </div>
      </div>
      <div
        className="Button-SubmitWork"
        role="button"
        onClick={() => {
          navigate("/submitworkthank");
        }}
        onKeyDown={() => {
          navigate("/submitworkthank");
        }}
        tabIndex="0"
      >
        <h3 className="Button-Validation">submit</h3>
      </div>
    </section>
  );
}

export default SubmitWorkValidation;
