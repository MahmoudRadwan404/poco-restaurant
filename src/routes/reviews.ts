import app from "../server";
import verifyToken from "../validation/verify-token";
import verifyAdmin from "../validation/admin/verify-admin";
import addReview from "../controllers/reviews/add-review";
import displayReviews from "../controllers/reviews/display-reviews";
import deleteReview from "../controllers/reviews/delete-review";
import updateReview from "../controllers/reviews/update-review";
import {
  adminMiddleware,
  userMiddleware,
} from "../helper/middlewares/middlewares";
import { adminReviewsPrefix } from "../helper/prefix";

app.post("/reviews/:dishId", userMiddleware, addReview);
app.get("/reviews/:dishId", userMiddleware, displayReviews);
app.register((app, ops, next) => {
  app.put("/:reviewId", adminMiddleware, updateReview);
  app.delete("/:reviewId", adminMiddleware, deleteReview);
  next();
}, adminReviewsPrefix);
