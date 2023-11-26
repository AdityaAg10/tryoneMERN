const jwt = require("jsonwebtoken");
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decryptedToken = jwt.verify(token, "kuchBhi");
    req.body.userId = decryptedToken.userId;
    next();
  } catch (error) {
    
    res.send({
      success: false,
      message: error.message,
    });
  }
};
