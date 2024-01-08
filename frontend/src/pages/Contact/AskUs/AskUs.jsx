import "./askUs.css";
import "../contactCommon.css";
import "../mailForm.css";
import { useNavigate } from "react-router-dom";

function AskUs() {
  const navigate = useNavigate();
  return (
    <div className="Main_ContactUs Main_MailUs">
      <div className="Background_Contact_Wall" />
      <div className="Background_Contact_Common Background_Ask Background_Ask_Graffeur" />
      <div
        className="contact_us_back_btn"
        role="button"
        onClick={() => {
          navigate(-1);
        }}
        onKeyDown={() => {
          navigate(-1);
        }}
        tabIndex="0"
      >
        &lt;&lt; Retour
      </div>
      <div className="MailUs_Form">
        <h2>?Nous questionner¿</h2>
        <h3>Email</h3>
        <input type="text" name="email" placeholder="votrenom@domaine.fr" />
        <input type="hidden" name="object" value="Une nouvelle question" />
        <h3>Question</h3>
        <textarea
          type="text"
          name="body"
          placeholder="Ecrivez-nous toutes vos questions !"
        />
        <input type="submit" value="Envoyer" />
      </div>
    </div>
  );
}

export default AskUs;
