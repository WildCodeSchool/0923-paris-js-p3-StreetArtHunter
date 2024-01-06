import "./reclamation.css";
import "../contactCommon.css";
import "../mailForm.css";

function Reclamation() {
  return (
    <div className="Main_ContactUs">
      <div className="Background_Contact_Wall" />
      <div className="Background_Contact_Common Background_Ask Background_Ask_Reclamation" />
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
