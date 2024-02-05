import { useState } from "react";
import "../mailForm.css";
import "./reclamation.css";
import AnonymousMegaphone from "../../../assets/images/img/anonymous_megaphonev3.png";

function Reclamation() {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  async function sendEmail() {
    console.info(email, text);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/mail/claim`,
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
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          name="email"
          placeholder="votrenom@domaine.fr"
        />
        <h3>Question</h3>
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          type="text"
          name="body"
          placeholder="What is your claim brother ?"
        />
        <input type="button" value="SEND" onClick={() => sendEmail()} />
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
