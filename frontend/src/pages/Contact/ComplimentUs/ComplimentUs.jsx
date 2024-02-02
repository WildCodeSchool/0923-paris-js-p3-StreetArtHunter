/* eslint-disable no-unused-vars */
import { useState } from "react";
import "../mailForm.css";
import "./complimentUs.css";

import AnonymousFlower from "../../../assets/images/img/anonymous_flower.png";

function ComplimentUs() {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  async function sendEmail() {
    console.info(email, text);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/mail/compliment`,
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
      <div className="anonymousFlower_container">
        <img
          src={AnonymousFlower}
          alt="anonymous flower"
          className="anonymousFlower anonymousFlower_right"
        />{" "}
      </div>
      <div className="MailUs_Form">
        <h2>compliment us</h2>
        <h3>Email</h3>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          name="email"
          placeholder="youradress@adress.fr"
        />
        <input type="hidden" name="object" value="a new compliment" />
        <h3>Message</h3>
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          type="text"
          name="body"
          placeholder="write your compliments!"
        />
        <input type="button" value="SEND" onClick={() => sendEmail()} />
      </div>

      <div className="anonymousFlower_container">
        <img
          src={AnonymousFlower}
          alt="anonymous flower"
          className="anonymousFlower"
        />{" "}
      </div>
    </div>
  );
}

export default ComplimentUs;
