import { useNavigate } from "react-router-dom";
import classement from "../../assets/images/ico/classement.png";
import graffiti from "../../assets/images/ico/artiste-de-graffiti.png";
import infos from "../../assets/images/ico/About_ico.png";
import "./footer_Connected.css";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer>
      <div
        role="button"
        onClick={() => {
          navigate("/login");
        }}
        onKeyDown={() => {
          navigate("/login");
        }}
        tabIndex="0"
      >
        <img className="iconGraffiti" src={graffiti} alt="graffiti" />
      </div>

      <svg
        className="iconWalk"
        alt="iconWalk"
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 -960 960 960"
        width="29.855px"
        onClick={() => navigate("/spotzone")}
      >
        <path d="m280-40 112-564-72 28v136h-80v-188l202-86q14-6 29.5-7t29.5 4q14 5 26.5 14t20.5 23l40 64q26 42 70.5 69T760-520v80q-70 0-125-29t-94-74l-25 123 84 80v300h-80v-260l-84-64-72 324h-84Zm260-700q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z" />
      </svg>

      <svg
        className="iconAdd"
        alt="iconAdd"
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 -960 960 960"
        width="29.855px"
        onClick={() => navigate("/submitwork")}
      >
        <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
      </svg>

      <div
        role="button"
        onClick={() => {
          navigate("/classement");
        }}
        onKeyDown={() => {
          navigate("/classement");
        }}
        tabIndex="0"
      >
        <img className="iconClassement" src={classement} alt="classement" />
      </div>

      <div
        role="button"
        onClick={() => {
          navigate("/information");
        }}
        onKeyDown={() => {
          navigate("/information");
        }}
        tabIndex="0"
      >
        <img className="iconInfos" src={infos} alt="infos" />
      </div>
    </footer>
  );
}

export default Footer;