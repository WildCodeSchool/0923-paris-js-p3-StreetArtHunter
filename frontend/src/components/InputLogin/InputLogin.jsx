import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import anonymous from "../../assets/images/img/pngwing.com.png";
import loginonymous from "../../assets/images/img/Loginonymous.png";
import AuthContext from "../../context/AuthContext";
import "./inputLogin.css";

function InputRegistration() {
  const navigate = useNavigate();
  const pseudo = useRef();
  const password = useRef();
  const auth = useContext(AuthContext);

  // Gestion soumission de formulaire //
  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            pseudo: pseudo.current.value,
            email: pseudo.current.value,
            password: password.current.value,
          }),
        }
      );
      if (response.status === 200) {
        const user = await response.json();
        auth.setUser(user);
        if (user.admin) navigate("/adminprofil");
        else navigate("/userprofil");
      } else {
        console.error("veuillez verifier votre saisie.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="login_Container Display_Desktop_Login Global_height">
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
            <p>Enter your pseudo or email</p>
            <input
              className="Input_Login"
              type="text"
              placeholder=""
              ref={pseudo}
            />
          </div>
          <div className="Password_Login">
            <p>Enter your password</p>
            <input
              className="Input_Login"
              type="password"
              placeholder=""
              ref={password}
            />
          </div>
          <div
            className="Button-Login"
            role="button"
            onClick={handleSubmit}
            onKeyDown={handleSubmit}
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
