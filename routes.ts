import app from "./src/server";
import signup from "./src/controllers/users/signup";
import displayUsers from "./src/controllers/users/display-users";
import displayUser from "./src/controllers/users/display-user";
import updateUser from "./src/controllers/users/update-user";
import deleteUser from "./src/controllers/users/delete-user";
import login from "./src/controllers/users/login";
import forget from "./src/controllers/users/forget";
import reset from "./src/controllers/users/reset";
import verifyEmail from "./src/controllers/users/verify-email";
import verifyToken from "./src/validation/verify-token";
import addCategory from "./src/controllers/categories/add-category";
import listCategories from "./src/controllers/categories/list-categories";
import updateCategory from "./src/controllers/categories/update-category";
import deleteCategory from "./src/controllers/categories/delete-category";
import dishesByCategories from "./src/controllers/categories/dishes-by-category";
import addDish from "./src/controllers/dishes/add-dish";
import deleteDish from "./src/controllers/dishes/delete-dish";
import updateDish from "./src/controllers/dishes/update-dish";
import listDishes from "./src/controllers/dishes/list-dishes";
import showDish from "./src/controllers/dishes/show-dish";
import listBlogs from "./src/controllers/blogs/list-blogs";
import addBlog from "./src/controllers/blogs/add-blog";
import displayBlog from "./src/controllers/blogs/display-blog";
import deleteBlog from "./src/controllers/blogs/delete-blog";
import updateBlog from "./src/controllers/blogs/update-blog";
import addReview from "./src/controllers/reviews/add-review";
import displayReviews from "./src/controllers/reviews/display-reviews";
import deleteReview from "./src/controllers/reviews/delete-review";
import updateReview from "./src/controllers/reviews/update-review";
import sendMessage from "./src/controllers/services/send-message";
import questions from "./src/controllers/services/questions";
import subscribe from "./src/controllers/services/subscribe";
import displayItems from "./src/controllers/cart/display-items";
import clear from "./src/controllers/cart/clear";
import addItem from "./src/controllers/cart/add-item";
import updateItem from "./src/controllers/cart/update-item";
import checkout from "./src/controllers/cart/checkout";
import getAddresses from "./src/controllers/address/get-addresses";
import createAddress from "./src/controllers/address/create-address";
import updateAddress from "./src/controllers/address/update-address";
import deleteAddress from "./src/controllers/address/delete-address";
import setCoupon from "./src/controllers/coupons/set-coupon";
import displayCoupons from "./src/controllers/coupons/display-coupons";
import updateCoupon from "./src/controllers/coupons/update-coupon";
import deleteCoupon from "./src/controllers/coupons/delete-coupon";
import createCoupon from "./src/controllers/coupons/create-coupon";
import createAdmin from "./src/controllers/admin/create-admin";
import updateAdmin from "./src/controllers/admin/update-admin";
import deleteAdmin from "./src/controllers/admin/delete-admin";
import getAdmins from "./src/controllers/admin/get-admin";
import verifyAdmin from "./src/validation/admin/verify-admin";
import acceptOrder from "./src/controllers/orders/accept-order";
import rejectOrder from "./src/controllers/orders/reject-order";
import acceptSpoiledFood from "./src/controllers/orders/accept-spoiled-food";
import rejectSpoiledFood from "./src/controllers/orders/reject-spoiled-food";
import returnFood from "./src/controllers/services/return-food";
import apply from "./src/controllers/coupons/apply";
import showMessages from "./src/controllers/admin/show-messages";
import answerQuestions from "./src/controllers/services/questions";
import listOrders from "./src/controllers/orders/list-orders";
//Users Login,Registration,Forget,Reset.
app.get("/users", { preHandler: verifyToken }, displayUsers);
app.get("/users/:id", displayUser);
app.post("/signup", signup);
app.patch("/users/:id", { preHandler: verifyToken }, updateUser);
app.delete("/users/:id", { preHandler: verifyToken }, deleteUser);
app.post("/login", login);
app.post("/forget", forget);
app.post("/reset", reset);
app.post("/verify/email", verifyEmail);
//Restaurant categories
app.post("/categories", { preHandler: verifyToken }, addCategory);
app.get(
  "/categories/:categoryId",
  { preHandler: verifyToken },
  dishesByCategories
);
app.get("/categories", { preHandler: verifyToken }, listCategories);
app.put("/categories/:categoryId", { preHandler: verifyToken }, updateCategory);
app.delete(
  "/categories/:categoryId",
  { preHandler: verifyToken },
  deleteCategory
);
//Restaurant dishes
app.post("/dishes", { preHandler: verifyToken }, addDish);
app.get("/dishes", listDishes);
app.get("/dishes/:dishId", showDish);
app.put("/dishes/:dishId", { preHandler: verifyToken }, updateDish);
app.delete("/dishes/:dishId", { preHandler: verifyToken }, deleteDish);
//Restaurant blogs
app.get("/blogs", listBlogs);
app.get("/blogs/:id", displayBlog);
app.post("/blogs", { preHandler: verifyToken }, addBlog);
app.put("/blogs/:id", { preHandler: verifyToken }, updateBlog);
app.delete("/blogs/:id", { preHandler: verifyToken }, deleteBlog);
//Restaurant cart
app.get("/cart", { preHandler: [verifyToken] }, displayItems);
app.delete("/cart/clear", { preHandler: verifyToken }, clear);
app.put("/cart/:itemId", { preHandler: verifyToken }, updateItem);
app.post("/cart/:itemId", { preHandler: [verifyToken] }, addItem);
app.get("/checkout", { preHandler: [verifyToken] }, checkout);
//user address
app.get("/addresses/:userId", { preHandler: verifyToken }, getAddresses);
app.post("/addresses", { preHandler: verifyToken }, createAddress);
app.put("/addresses/:id", { preHandler: verifyToken }, updateAddress);
app.delete("/addresses/:id", { preHandler: verifyToken }, deleteAddress);
//Restaurant coupons
app.get("/coupon/items", { preHandler: verifyToken }, displayCoupons);
app.delete("/coupon/:couponId", { preHandler: verifyToken }, deleteCoupon);
app.put("/coupon/:couponId", { preHandler: verifyToken }, updateCoupon);
app.post("/coupon", { preHandler: verifyToken }, createCoupon);
app.put(
  "/set/:userId/coupon/:couponId",
  { preHandler: verifyToken },
  setCoupon
);
app.get("/coupon/apply", apply); //not finished
//Dishes reviews
app.post("/reviews/:dishId", { preHandler: verifyToken }, addReview);
app.get("/reviews/:dishId", { preHandler: verifyToken }, displayReviews);
app.put("/reviews/:reviewId", { preHandler: verifyToken }, updateReview);
app.delete("/reviews/:reviewId", { preHandler: verifyToken }, deleteReview);
//Restaurant admin
app.get("/admins", { preHandler: [verifyToken, verifyAdmin] }, getAdmins);
app.post("/admins", { preHandler: [verifyToken, verifyAdmin] }, createAdmin);
app.put(
  "/admins/:adminId",
  { preHandler: [verifyToken, verifyAdmin] },
  updateAdmin
);
app.delete(
  "/admins/:adminId",
  { preHandler: [verifyToken, verifyAdmin] },
  deleteAdmin
);
//admin manege orders and spoiled food to return money
app.get("/orders",{ preHandler: [verifyToken,verifyAdmin] },listOrders)
app.patch(
  "/orders/reject/:orderId",
  { preHandler: [verifyToken, verifyAdmin] },
  rejectOrder
);
app.patch(
  "/orders/accept/:orderId",
  { preHandler: [verifyToken, verifyAdmin] },
  acceptOrder
);
app.patch(
  "/reject/:spoiledId",
  { preHandler: [verifyToken, verifyAdmin] },
  rejectSpoiledFood
);
app.patch(
  "/accept/:spoiledId",
  { preHandler: [verifyToken, verifyAdmin] },
  acceptSpoiledFood
);
//user return spoiled food
app.post("/return", { preHandler: [verifyToken] }, returnFood);
//Additional services

app.post("/contactUs", sendMessage);
app.get("/messages", { preHandler: [verifyToken, verifyAdmin] }, showMessages);
app.post("/subscribe", subscribe);
app.get("/faq", questions);
app.post(
  "/faq/:messageId",
  { preHandler: [verifyToken, verifyAdmin] },
  answerQuestions
);
