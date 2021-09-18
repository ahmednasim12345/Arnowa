const User = require("../Model/UserModel");

exports.Signup = (req, res) => {
  const { firstname, lastname, email, phone, password } = req.body;
  const newUser = new User({ firstname, lastname, email, phone, password });
  newUser.save((err, results) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
    if (results) {
      return res.status(200).json({
        message: "You are successffully signed up",
      });
    }
    return res.status(400).json({
      message: "Signed up failed",
    });
  });
};

exports.Login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email, password }).exec((err, results) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (results) {
      const result = JSON.parse(JSON.stringify(results));
      delete result.password;
      return res.status(200).send({ message: "User logged in successfully", result });
    }
    return res.status(400).send({ message: "Invalid user credential" });
  });
};
