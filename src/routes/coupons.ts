import app from "../server";
import setCoupon from "../controllers/coupons/set-coupon";
import displayCoupons from "../controllers/coupons/display-coupons";
import updateCoupon from "../controllers/coupons/update-coupon";
import deleteCoupon from "../controllers/coupons/delete-coupon";
import createCoupon from "../controllers/coupons/create-coupon";
import apply from "../controllers/coupons/apply";
import {
  adminMiddleware,
  userMiddleware,
} from "../helper/middlewares/middlewares";

app.get("/coupon/apply", userMiddleware, apply);

app.register(
  (app, ops, next) => {
    app.get("/coupon/items", adminMiddleware, displayCoupons);
    app.delete("/coupon/:couponId", adminMiddleware, deleteCoupon);
    app.put("/coupon/:couponId", adminMiddleware, updateCoupon);
    app.post("/coupon", adminMiddleware, createCoupon);
    app.put("/set/:userId/coupon/:couponId", adminMiddleware, setCoupon);

    next();
  },
  { prefix: "/admin" }
);
