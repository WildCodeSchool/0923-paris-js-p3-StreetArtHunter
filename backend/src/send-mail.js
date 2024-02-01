require("dotenv").config();
const nodemailer = require("nodemailer");
/**
 * sendEmail
 * @param {Object} mailObj - Email information
 * @param {String} from - Email address of the sender
 * @param {Array} to - Array of receipents email address
 * @param {String} subject - Subject of the email
 * @param {String} text - Email body
 */

// Create a transporter
const transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

const sendEmail = async (mailObj) => {
  const { from, to, subject, text } = mailObj;
  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from, // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      html: `<div style="text-align: center;"">
        <h1 style=color: #3584c8;>${subject}</h1>
        
        <p>
          ${text}
          <br />
        </p>
      </div>`, // html body
    });

    // console.log(`Message sent: ${info.messageId}`);
    return `Message sent Thank you for your feedback: ${info.messageId}`;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Something went wrong in the sendmail method. Error: ${error.message}`
    );
  }
};
const sendcompliment = async ({
  from,
  to = "jouanmartial@icloud.com",
  subject = "Streetarthunterz - Compliments",
  text,
}) => {
  sendEmail({
    from,
    to,
    subject,
    text,
  });
};
const sendquestion = async ({
  from,
  to = "jouanmartial@icloud.com",
  subject = "Streetarthunterz - question",
  text,
}) => {
  sendEmail({
    from,
    to,
    subject,
    text,
  });
};
const sendclaim = async ({
  from,
  to = "jouanmartial@icloud.com",
  subject = "Streetarthunterz - Claim",
  text,
}) => {
  sendEmail({
    from,
    to,
    subject,
    text,
  });
};

// sendcompliment({
//   from: "bboudrioux@gmail.com",
//   text: "super site!",
// });

module.exports = {
  sendcompliment,
  sendquestion,
  sendclaim,
};
