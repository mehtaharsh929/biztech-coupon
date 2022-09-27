const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./config/db");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
const coupon = require("./routes/coupon");

app.use("/api", coupon());

app.listen(process.env.PORT, () => {
  console.log("sever listening on port:3000");
});
