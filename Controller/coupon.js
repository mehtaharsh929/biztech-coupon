const couponModel = require("../model/coupon");

async function createCoupon(req, res) {
  try {
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
      res.status(200).json({ success: response });
    }
    res.status(200).json({ error: "Coupon Already Exist With Same Name" });
  } catch (error) {
    res.status(500);
  }
}

async function getCouponCode(req, res) {
  try {
    if (req.query.latitude && req.query.longitude) {
      const response = await couponModel.find({
        latitude: req.query.latitude,
        longitude: req.query.longitude,
      });
      res.status(200).json({ success: response });
    }
    res.status(404).json({ error: "No record Found" });
  } catch (error) {
    res.status(500);
  }
}

module.exports = { createCoupon, getCouponCode };
