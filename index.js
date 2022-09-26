const express = require("express");
const app = express();
const db = require("./config/db");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const coupon = require("./routes/coupon");

app.use("/api", coupon());

app.listen(3000, () => {
  console.log("sever listening on port:3000");
});
