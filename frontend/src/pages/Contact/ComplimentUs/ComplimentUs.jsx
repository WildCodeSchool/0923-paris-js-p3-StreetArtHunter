import "./complimentUs.css";
import "../contactCommon.css";
import "../mailForm.css";

function ComplimentUs() {
  return (
    <div className="Main_ContactUs">
      <div className="Background_Contact_Wall" />
      <div className="Background_Contact_Common Background_Ask Background_Ask_Flower" />
      <div className="MailUs_Form">
        <h2>Nous complimenter</h2>
        <h3>Email</h3>
        <input type="text" name="email" placeholder="votrenom@domaine.fr" />
        <input type="hidden" name="object" value="Un nouveau compliment" />
        <h3>Message</h3>
        <textarea
          type="text"
          name="body"
          placeholder="Ecrivez-nous vos compliments !"
        />
        <input type="submit" value="Envoyer" />
      </div>
    </div>
  );
}

export default ComplimentUs;
