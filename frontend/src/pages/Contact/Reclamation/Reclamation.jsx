import "./reclamation.css";
import "../contactCommon.css";
import "../mailForm.css";
import { useNavigate } from "react-router-dom";

function Reclamation() {
  const navigate = useNavigate();
  return (
    <div className="Main_ContactUs Main_MailUs">
      <div className="Background_Contact_Wall" />
      <div className="Background_Contact_Common Background_Ask Background_Ask_Reclamation" />
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
        <h2>Réclamation</h2>
        <h3>Email</h3>
        <input type="text" name="email" placeholder="votrenom@domaine.fr" />
        <h3>Objet</h3>
        <input
          type="text"
          name="object"
          placeholder="Objet de votre réclamation"
        />

        <h3>Question</h3>
        <textarea type="text" name="body" placeholder="Racontez-nous tout !" />
        <input type="submit" value="Envoyer" />
      </div>
    </div>
  );
}

export default Reclamation;
