import { useNavigate } from "react-router-dom";
import ratLeft from "../../assets/images/img/ratPhotoLeft.png";
import ratRight from "../../assets/images/img/ratPhotoRight.png";
import "./submitWorkMobile.css";
import "./submitWorkDesktop.css";

function SubmitWorkValidation() {
  const navigate = useNavigate();
  return (
    <section className="blockValidation">
      <div className="Picture_DesKtop_Submit">
        <img className="Rat_Picture_Submit_left" src={ratLeft} alt="ratLeft" />
      </div>
      <center className="title_image_button">
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
      </center>
      <div className="Picture_DesKtop_Submit">
        <img
          className="Rat_Picture_Submit_right"
          src={ratRight}
          alt="ratRight"
        />
      </div>
    </section>
  );
}

export default SubmitWorkValidation;
