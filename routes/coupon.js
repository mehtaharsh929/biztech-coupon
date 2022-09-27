const express = require("express");
const {createCoupon,getCouponCode} = require("../Controller/coupon")

// Set default API response
function coupon() {
  const router = express.Router();
  router.post("/createCouponCode", createCoupon);
  router.get("/getCouponCode", getCouponCode);
  return router;
}

// Export API routes
module.exports = coupon;

// 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
