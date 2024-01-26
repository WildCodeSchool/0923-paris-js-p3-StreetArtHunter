import { useNavigate } from "react-router-dom";
import ratPhotographer from "../../assets/images/img/Rat_photograph.png";
import "./submitWorkDesktop.css";

function SubmitWorkValidation() {
  const navigate = useNavigate();
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
              <p>add photo</p>
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
