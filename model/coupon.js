const mongoose = require("mongoose");

const couponDetailsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  expiration_date: {
    type: Date,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
    required: true,
  },
});

//Creating the collection couponDetails
const couponDetails = mongoose.model("coupon_details", couponDetailsSchema);

module.exports = couponDetails;
