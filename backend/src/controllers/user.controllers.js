const argon = require("argon2");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const add = async (req, res, next) => {
  try {
    const user = req.body;
    const [result] = await userModel.insert(user);

    if (result.insertId) {
      const [[newUser]] = await userModel.findById(result.insertId);
      res.status(201).json(newUser);
    } else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { pseudo, email, password } = req.body;
    const [[user]] = await userModel.findByEmail(pseudo, email);
    if (!user) res.sendStatus(422);
    else if (await argon.verify(user.password, password)) {
      const token = jwt.sign(
        { id: user.id, admin: user.admin },
        process.env.APP_SECRET,
        { expiresIn: "30d" }
      );
      res.cookie("auth-token", token, {
        expire: "30d",
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
      });
      res.status(200).json(user);
    } else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const [[user]] = await userModel.findById(req.params.id);
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

const getAll = async (req, res, next) => {
  try {
    const [user] = await userModel.findAll();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const erase = async (req, res, next) => {
  try {
    const userId = req.params.id;
    await userModel.deleteUser(userId);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const getCurrentUser = async (req, res, next) => {
  try {
    const [[user]] = await userModel.findById(req.body.userID);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const incrementUserScore = async (req, res, next) => {
  try {
    const userId = req.params.id;
    await userModel.incrementScore(userId);

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    res.clearCookie("auth-token").sendStatus(200);
  } catch (error) {
    next(error);
  }
};
// eslint-disable-next-line consistent-return
const updatePassword = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const { currentPassword, newPassword } = req.body;

    // Récupérer l'utilisateur actuel
    const [[user]] = await userModel.findById(userId);

    // Vérifier si le mot de passe actuel correspond
    const isPasswordMatch = await argon.verify(user.password, currentPassword);

    if (!isPasswordMatch) {
      return res.status(422).send("password incorect");
    }

    // Mettre à jour le mot de passe
    await userModel.updatePassword(userId, await argon.hash(newPassword));

    res.json({
      success: true,
      message: "Password updated successfully.",
    });
  } catch (error) {
    console.error("Error updating password", error);
    next(error);
  }
};

module.exports = {
  add,
  login,
  getById,
  getAll,
  erase,
  incrementUserScore,
  getCurrentUser,
  logout,
  updatePassword,
};
