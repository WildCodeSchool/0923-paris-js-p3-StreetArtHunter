import "./reclamation.css";
import "../contactCommon.css";
import "../mailForm.css";
import AnonymousMegaphone from "../../../assets/images/img/anonymous_megaphonev3.png";

function Reclamation() {
  return (
    <div className="Main_ContactUs Main_MailUs">
      <div className="anonymousMegaphone_container">
        <img
          src={AnonymousMegaphone}
          alt="anonymous question"
          className="anonymousMegaphone anonymousMegaphone_right"
        />{" "}
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
      <div className="anonymousMegaphone_container">
        <img
          src={AnonymousMegaphone}
          alt="anonymous question"
          className="anonymousMegaphone"
        />{" "}
      </div>
    </div>
  );
}

export default Reclamation;
