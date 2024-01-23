import "../mailForm.css";
import "./askUs.css";
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
        <h2>¿ question ?</h2>
        <h3>Email</h3>
        <input type="text" name="email" placeholder="votrenom@domaine.fr" />
        <input type="hidden" name="object" value="a new question" />
        <h3>Question</h3>
        <textarea
          type="text"
          name="body"
          placeholder="Write your questions !"
        />
        <input type="submit" value="SEND" />
      </div>
      <div className="anonymousQuestion_container">
        <img
          src={AnonymousQuestion}
          alt="anonymous question"
          className="anonymousquestion anonymousquestion_left"
        />{" "}
      </div>
    </div>
  );
}

export default AskUs;
