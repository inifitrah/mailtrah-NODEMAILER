const express = require("express");
const app = express();
const cors = require("cors")

//env
require("dotenv").config();

//cors
const corsOptions = {
  origin: process.env.CORS_ORIGIN_REGEX,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors())


const port = 3000
app.use(express.json())

const controllerMail = require("./controllers/mail.controller")
app.use('/', controllerMail)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
