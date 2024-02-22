const mail = require("../utils/mail");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    statusCode: 200,
    message: "Welcome to mailtrah"
  })
});

router.post("/sendmail", async (req, res) => {
  const { from, to, subject, text } = req.body;
  try {
    const sendMessage = await mail(from, to, subject, text);
    res.status(200).send(sendMessage);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router