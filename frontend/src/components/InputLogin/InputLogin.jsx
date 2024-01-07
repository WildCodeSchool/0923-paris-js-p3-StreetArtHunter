import { useNavigate } from "react-router-dom";
import anonymous from "../../assets/images/img/pngwing.com.png";
import loginonymous from "../../assets/images/img/Loginonymous.png";
import "./inputLogin.css";

function InputRegistration() {
  const navigate = useNavigate();
  return (
    <section className="login_Container Display_Desktop_Login Global_height_smartPh Global_height">
      <div className="Picture_DesKtop_Login">
        <img
          className="loginonymous_left"
          src={loginonymous}
          alt="Login anonymous"
        />
      </div>
      <div className="Block_Login">
        <div className="Login">
          <h1 className="Title_Login">LogIn</h1>
          <div className="Pseudo_Login">
            <p>Enter your pseudo</p>
            <input className="Input_Login" type="text" placeholder="" />
          </div>
          <div className="Password_Login">
            <p>Enter your password</p>
            <input className="Input_Login" type="password" placeholder="" />
          </div>
          <div
            className="Button-Login"
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
        <div className="Anonymous_Login">
          <img
            className="Anonymus_Picture_Login"
            src={anonymous}
            alt="Anonymous"
          />
        </div>
      </div>
      <div className="Picture_DesKtop_Login">
        <img
          className="loginonymous"
          src={loginonymous}
          alt="Login anonymous"
        />
      </div>
    </section>
  );
}
export default InputRegistration;
