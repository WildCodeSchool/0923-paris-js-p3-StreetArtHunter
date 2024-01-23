import "../mailForm.css";
import "./complimentUs.css";
import AnonymousFlower from "../../../assets/images/img/anonymous_flower.png";

function ComplimentUs() {
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
        <input type="text" name="email" placeholder="youradress@adress.fr" />
        <input type="hidden" name="object" value="a new compliment" />
        <h3>Message</h3>
        <textarea
          type="text"
          name="body"
          placeholder="write your compliments!"
        />
        <input type="submit" value="SEND" />
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
