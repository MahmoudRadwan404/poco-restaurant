import app from "../server";
import setCoupon from "../controllers/coupons/set-coupon";
import displayCoupons from "../controllers/coupons/display-coupons";
import updateCoupon from "../controllers/coupons/update-coupon";
import deleteCoupon from "../controllers/coupons/delete-coupon";
import createCoupon from "../controllers/coupons/create-coupon";
import apply from "../controllers/coupons/apply";
import { adminMiddleware, userMiddleware } from "../helper/middlewares/middlewares";

app.get("/admin/coupon/items", adminMiddleware, displayCoupons);
app.delete("/admin/coupon/:couponId", adminMiddleware, deleteCoupon);
app.put("/admin/coupon/:couponId", adminMiddleware, updateCoupon);
app.post("/admin/coupon", adminMiddleware, createCoupon);
app.put("/admin/set/:userId/coupon/:couponId", adminMiddleware, setCoupon);
app.get("/coupon/apply", userMiddleware, apply);
