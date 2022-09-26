const mongoose = require("mongoose");

const db = mongoose
  .connect("mongodb://localhost:27017/coupon", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = db;
