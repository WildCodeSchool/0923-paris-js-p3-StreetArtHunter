import { useNavigate } from "react-router-dom";
import heartIcon from "../../assets/images/img/heart1.png";
import ratPhotographer from "../../assets/images/img/Rat_photograph.png";
import "./submitWorkMobile.css";
import "./submitWorkDesktop.css";

function SubmitWorkThank() {
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
      <center className="title_Image">
        <h1 className="titleSubmitWorkThank">thanks for sharing</h1>
        <div className="heartIcon">
          <img src={heartIcon} alt="heartIcon" />
        </div>

        <p className="text_validation"> It will appear after validation.</p>
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
          <div className="Button-Validation">back</div>
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

export default SubmitWorkThank;
