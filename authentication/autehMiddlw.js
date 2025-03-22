const jwt = require("jsonwebtoken");

const authenticated = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      res.json({
        msg: "token is invalid",
      });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.user = decoded;
    next();
  } catch (error) {
    console.log("not verify", error);
    res.json({
      msg: "not verify",
    });
  }
};

module.exports = authenticated;
