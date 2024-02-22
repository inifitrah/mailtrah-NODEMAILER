const express = require("express");
const app = express();

require("dotenv").config();

const port = 9999
app.use(express.json())

const controllerMail = require("./controllers/mail.controller")
app.use('/', controllerMail)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
