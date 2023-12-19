import MenuBurger from "./MenuBurger";
import "./header.css";

function Header() {
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
        >
          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
        </svg>
      </div>
      <div className="Login-Button">
        <h3 className="LogIn-Header">Log-In</h3>
        <h3 className="SignUp-Header">Sign-up</h3>
      </div>
      <div className="Burger-Header">
        <MenuBurger />
      </div>
    </nav>
  );
}

export default Header;
