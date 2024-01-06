import "./askUs.css";
import "../contactCommon.css";
import "../mailForm.css";

function AskUs() {
  return (
    <div className="Main_ContactUs">
      <div className="Background_Contact_Wall" />
      <div className="Background_Contact_Common Background_Ask Background_Ask_Graffeur" />
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
