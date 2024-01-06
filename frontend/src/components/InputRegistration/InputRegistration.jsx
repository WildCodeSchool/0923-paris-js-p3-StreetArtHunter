import { useNavigate } from "react-router-dom";
import anonymous from "../../assets/images/img/pngwing.com.png";
import paintMan from "../../assets/images/img/paint-man-b.png";
import "./inputRegistration.css";

function InputRegistration() {
  const navigate = useNavigate();
  return (
    <section className="Display_Desktop_Register Global_height">
      <div className="Picture_DesKtop_Register">
        <img
          className="PaintMan_Picture_Register_left"
          src={paintMan}
          alt="paintMan"
        />
      </div>
      <div className="Block_Register">
        <div className="Register">
          <h1 className="Title_Register">REGISTER</h1>
          <div className="Pseudo_Register">
            <h3>Choose a pseudo</h3>
            <input className="Input_Register" type="text" placeholder="" />
          </div>
          <div className="Password_Register">
            <h3>Choose a password</h3>
            <input className="Input_Register" type="password" placeholder="" />
          </div>
          <div className="Pseudo_Register">
            <h3>Enter your mail</h3>
            <input className="Input_Register" type="text" placeholder="" />
          </div>
          <div
            className="Button-Register"
            role="button"
            onClick={() => {
              navigate("/");
            }}
            onKeyDown={() => {
              navigate("/");
            }}
            tabIndex="0"
          >
            VALIDATION
          </div>
        </div>
        <div className="Anonymous_Register">
          <img
            className="Anonymus_Picture_Register"
            src={anonymous}
            alt="Anonymous"
          />
        </div>
      </div>
      <div className="Picture_DesKtop_Register">
        <img
          className="PaintMan_Picture_Register"
          src={paintMan}
          alt="paintMan"
        />
      </div>
    </section>
  );
}
export default InputRegistration;
