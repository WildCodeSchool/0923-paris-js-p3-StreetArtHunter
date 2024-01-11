import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import anonymous from "../../assets/images/img/pngwing.com.png";
import paintMan from "../../assets/images/img/paint-man.png";
import authContext from "../context/AuthContext";
import "./inputLogin.css";

function InputRegistration() {
  const navigate = useNavigate();
  const Email = useRef();
  const Password = useRef();
  const Pseudo = useRef();
  const auth = useContext(authContext);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Email: Email.current.value, // Utilisation de .current.value pour accéder à la valeur
            Password: Password.current.value,
            Pseudo: Pseudo.current.value,
          }),
        }
      );
      if (response.status === 200) {
        const user = response.json();
        auth.setUser(user);
        navigate("/homepage");
      } else {
        console.error("veuillez vérifier votre saisie.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="Display_Desktop_Login">
      <div className="Picture_DesKtop_Login">
        <img
          className="PaintMan_Picture_Login_left"
          src={paintMan}
          alt="paintMan"
        />
      </div>
      <div className="Block_Login">
        <div className="Login">
          <h1 className="Title_Login">LogIn</h1>
          <div className="Pseudo_Login">
            <h3>Enter your pseudo</h3>
            <input className="Input_Login" type="text" placeholder="" />
          </div>
          <div className="Password_Login">
            <h3>Enter your password</h3>
            <input
              className="Input_Login"
              type="password"
              placeholder=""
              ref={Password}
            />
          </div>
          <div className="Pseudo_Login">
            <h3>Enter your mail</h3>
            <input
              className="Input_Login"
              type="text"
              placeholder=""
              ref={Email}
            />
          </div>
          <div
            className="Button-Login"
            role="button"
            onClick={handleSubmit}
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
        <img className="PaintMan_Picture_Login" src={paintMan} alt="paintMan" />
      </div>
    </section>
  );
}
export default InputRegistration;
