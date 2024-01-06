import { useNavigate } from "react-router-dom";
import "./contactUs.css";
import "../contactCommon.css";

function ContactUs() {
  const navigate = useNavigate();
  return (
    <div className="Main_ContactUs">
      <div className="Background_Contact_Common Background_ContactUs" />

      <h1 className="Title_ContactUs">NOUS CONTACTER</h1>

      <div
        className="contact_us_btn"
        role="button"
        onClick={() => {
          navigate("/ComplimentUs");
        }}
        onKeyDown={() => {
          navigate("/ComplimentUs");
        }}
        tabIndex="0"
      >
        Nous complimenter
      </div>
      <div
        className="contact_us_btn"
        role="button"
        onClick={() => {
          navigate("/AskUs");
        }}
        onKeyDown={() => {
          navigate("/AskUs");
        }}
        tabIndex="0"
      >
        Nous questionner
      </div>
      <div
        className="contact_us_btn"
        role="button"
        onClick={() => {
          navigate("/Reclamation");
        }}
        onKeyDown={() => {
          navigate("/Reclamation");
        }}
        tabIndex="0"
      >
        Réclamation
      </div>
    </div>
  );
}

export default ContactUs;
