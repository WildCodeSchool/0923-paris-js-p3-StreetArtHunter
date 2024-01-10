/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from "react-router-dom";
import MenuBurger from "./MenuBurger";
import "./header.css";

function Header() {
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
          onClick={() => navigate("/")}
        >
          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
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

export default Header;
