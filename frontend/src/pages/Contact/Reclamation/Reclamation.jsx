import "../mailForm.css";
import "./reclamation.css";
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
      <div className="MailUs_Form MailUs_Form_claim">
        <h2>claim</h2>
        <h3>Email</h3>
        <input type="text" name="email" placeholder="votrenom@domaine.fr" />
        <h3>Question</h3>
        <textarea
          type="text"
          name="body"
          placeholder="What is your claim brother ?"
        />
        <input type="submit" value="SEND" />
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
