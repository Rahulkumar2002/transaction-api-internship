const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        res.status(403).json("Token is not valid.");
      }
      req.user = user;
    });
    if (req.user.username === req.body.username) {
      next();
    } else {
      return res
        .status(403)
        .json("You are not authorized to perform this operation.");
    }
  } else {
    return res.status(404).json("Token not found");
  }
};

module.exports = { verifyToken };
