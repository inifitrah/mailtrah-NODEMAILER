const nodemailer = require("nodemailer");

async function mail(from, to, subject, text) {
  const port = 587;
  const host = process.env.HOST;
  const YOUR_LOGIN = process.env.YOUR_LOGIN;
  const YOUR_KEY = process.env.YOUR_KEY;

  const transporter = nodemailer.createTransport({
    host,
    port,
    auth: {
      user: YOUR_LOGIN,
      pass: YOUR_KEY,
    },
  });

  try {
    await transporter.sendMail({
      from: {
        name: from.name,
        address: from.address,
      },
      to: {
        name: to.name,
        address: to.address,
      },
      subject,
      text,
    });
    //when successfully sending the message
    return {
      message: "successful sending",
      from,
      to,
      subject,
      text,
    };
  } catch (error) {
    throw Error(error.message);
  }
}

module.exports = mail;
