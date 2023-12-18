import "./header.css";

function Header() {
  return (
    <nav className="Navbar">
      <h1 className="Title-Header">Street Art Hunterz</h1>
      <div className="LogOut-img">
        <img
          id="LogOut-Header"
          src="./assets/images/ico/login_FILL0_wght400_GRAD0_opsz24.png"
          alt="log-out"
        />
      </div>
    </nav>
  );
}

export default Header;
