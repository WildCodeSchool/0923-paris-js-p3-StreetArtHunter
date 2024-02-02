/* eslint-disable no-unused-vars */
import { useState } from "react";
import "../mailForm.css";
import "./askUs.css";
import AnonymousQuestion from "../../../assets/images/img/anonymous_question.png";

function AskUs() {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  async function sendEmail() {
    console.info(email, text);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/mail/question`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            from: email,
            text,
          }),
        }
      );
      if (response.status === 200) {
        console.info("email envoyée");
      }
    } catch (error) {
      console.error(error);
    }
  }

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
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          name="email"
          placeholder="votrenom@domaine.fr"
        />
        <input type="hidden" name="object" value="a new question" />
        <h3>Question</h3>
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          type="text"
          name="body"
          placeholder="Write your questions !"
        />
        <input type="submit" value="SEND" onClick={() => sendEmail()} />
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
