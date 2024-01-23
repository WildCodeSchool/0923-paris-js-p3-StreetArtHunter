import "./askUs.css";
import "../contactCommon.css";
import "../mailForm.css";
import AnonymousQuestion from "../../../assets/images/img/anonymous_question.png";

function AskUs() {
  return (
    <div className="Main_ContactUs Main_MailUs">
      <div className="anonymousQuestion_container">
        <img
          src={AnonymousQuestion}
          alt="anonymous question"
          className="anonymousquestion"
        />{" "}
      </div>
      <div className="MailUs_Form">
        <h2>? nous questionner ¿</h2>
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
      <div className="anonymousQuestion_container">
        <img
          src={AnonymousQuestion}
          alt="anonymous question"
          className="anonymousquestion"
        />{" "}
      </div>
    </div>
  );
}

export default AskUs;
