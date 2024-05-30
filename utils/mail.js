const nodemailer = require("nodemailer");

async function mail(option) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    auth: { 
      user: process.env.SMTP_USER_LOGIN ,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  try {
   const mail = await transporter.sendMail({...option})
    return {
      message: "Successful sending",
      ...mail
    };
  } catch (error) {
    throw Error(error.message);
  }
}

module.exports = mail;
