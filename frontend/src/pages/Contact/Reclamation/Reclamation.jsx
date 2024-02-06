/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-undef */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../mailForm.css";
import "./reclamation.css";
import AnonymousMegaphone from "../../../assets/images/img/anonymous_megaphonev3.png";

function Reclamation() {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const navigate = useNavigate();

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
        setIsEmailSent(true);
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
        <h2
          onClick={() => {
            navigate("/contactus");
          }}
          onKeyDown={() => {
            navigate("/contactus");
          }}
        >
          claim
        </h2>
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
        {!isEmailSent && (
          <input
            type="button"
            className="contact_send_btn"
            value="SEND"
            onClick={() => sendEmail()}
          />
        )}
        {isEmailSent && (
          <p className="SendEmailConfirmation">Email envoyé avec succès !</p>
        )}
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
