import { useNavigate } from "react-router-dom";
import "./contactUs.css";
import "../contactCommon.css";
import contactAnonymous from "../../../assets/images/img/anonymous_contactUs.png";

function ContactUs() {
  const navigate = useNavigate();
  return (
    <section className="Main_ContactUs Menu_ContactUs">
      <div className="MainContact_Container">
        <div className="contactAnonymous_container">
          <img
            className="contactonymous_left"
            src={contactAnonymous}
            alt="Login anonymous"
          />
        </div>
        <div className="MainContactContent">
          <div className="img_contactUS" />
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
            nous complimenter
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
            nous questionner
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
            réclamation
          </div>
        </div>
        <div className="contactAnonymous_container">
          <img
            className="contactonymous_right"
            src={contactAnonymous}
            alt="Login anonymous"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
