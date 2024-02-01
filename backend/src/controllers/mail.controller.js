const sendMail = require("../send-mail");

const compliment = async (req, res, next) => {
  try {
    await sendMail.sendcompliment(req.body);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  compliment,
};
