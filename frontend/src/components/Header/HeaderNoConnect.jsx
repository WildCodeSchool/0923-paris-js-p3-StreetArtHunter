/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from "react-router-dom";
import MenuBurger from "./MenuBurger";
import "./headerNoConnect.css";

function HeaderNoConnect() {
  const navigate = useNavigate();
  return (
    <nav className="Navbar">
      <div className="Title-Header">STREET ART HUNTERZ</div>
      <div className="LogIn-img">
        <svg
          className="LogOut-Header"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          onClick={() => navigate("/login")}
          onKeyDown={() => {
            navigate("/login");
          }}
          tabIndex="0"
        >
          <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" />
        </svg>
      </div>
      <div className="Login-Button">
        <div
          className="LogIn-Header"
          role="button"
          onClick={() => {
            navigate("/login");
          }}
          onKeyDown={() => {
            navigate("/login");
          }}
          tabIndex="0"
        >
          login
        </div>
        <div
          className="SignUp-Header"
          role="button"
          onClick={() => {
            navigate("/register");
          }}
          onKeyDown={() => {
            navigate("/register");
          }}
          tabIndex="0"
        >
          signup
        </div>
      </div>
      <div className="Burger-Header">
        <MenuBurger />
      </div>
    </nav>
  );
}

export default HeaderNoConnect;
