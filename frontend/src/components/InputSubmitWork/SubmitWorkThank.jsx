import { useNavigate } from "react-router-dom";
import heartIcon from "../../assets/images/img/heart1.png";
import ratLeft from "../../assets/images/img/ratPhotoLeft.png";
import ratRight from "../../assets/images/img/ratPhotoRight.png";
import "./submitWorkMobile.css";
import "./submitWorkDesktop.css";

function SubmitWorkThank() {
  const navigate = useNavigate();

  return (
    <section>
      <div className="Picture_DesKtop_Submit">
        <img className="Rat_Picture_Submit_left" src={ratLeft} alt="ratLeft" />
      </div>
      <center className="title_image_button">
        <h1 className="titleSubmitWorkThank">thank you for the sharing</h1>
        <div className="heartIcon">
          <img src={heartIcon} alt="heartIcon" />
        </div>

        <h3 className="text_validation"> It will appear after validation.</h3>
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
          <h4 className="Button-Validation">back</h4>
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

export default SubmitWorkThank;
