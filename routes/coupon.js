const express = require("express");
const couponModel = require("../model/coupon");

// Set default API response
function coupon() {
  const router = express.Router();
  router.post("/createCouponCode", createCoupon);
  router.get("/getCouponCode", getCouponCode);
  return router;
}

// http://localhost:3000/api/createCouponCode
// {
//     "name": "test",
//     "description": "dsdks",
//     "expiration_date": "10/10/20",
//     "longitude": "3213",
//     "latitude": "21212"
// }

async function createCoupon(req, res) {
  try {
    console.log(req);

    const couponExistWithSameName = await couponModel.find({
      name: req.body.name,
    });

    if (couponExistWithSameName.length <= 0) {
      couponDetails = new couponModel({
        name: req.body.name,
        description: req.body.description,
        expiration_date: req.body.expiration_date,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
      });

      const response = await couponDetails.save();
      res.status(200).json({ error: response });
    }
    res.status(200).json({ success: "Coupon Already Exist With Same Name" });
  } catch (error) {
    res.status(500);
  }
}

// http://localhost:3000/api/getCouponCode?latitude=21212&&longitude=3213
async function getCouponCode(req, res) {
  try {
    if (req.query.latitude && req.query.longitude) {
      const response = await couponModel.find({
        latitude: req.query.latitude,
        longitude: req.query.longitude,
      });
      res.status(200).json({ success: response });
    }
    res.status(404).json({ success: "No record Found" });
  } catch (error) {
    res.status(500);
  }
}

// Export API routes
module.exports = coupon;
