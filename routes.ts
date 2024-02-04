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
//Users Login,Registration,Forget,Reset.
app.get("/users", { preHandler: verifyToken }, displayUsers);
app.get("/users/:id", displayUser);
app.post("/signup", signup);
app.patch("/user/:id", updateUser);
app.delete("/user/:id", deleteUser);
app.post("/login", login);
app.post("/forget", forget);
app.post("/reset", reset);
app.post("/verify/email", verifyEmail);
//Restaurant categories
app.post("/categories", addCategory);
app.get("/category/:categoryId", dishesByCategories);
app.get("/categories", listCategories);
app.put("/category/:categoryId", updateCategory);
app.delete("/category/:categoryId", deleteCategory);
//Restaurant dishes
app.post("/dish", addDish);
app.get("/dishes", listDishes);
app.get("/dish/:dishId", showDish);
app.put("/dish/:dishId", updateDish);
app.delete("/dish/:dishId", deleteDish);
//Restaurant blogs
app.get("/blog", listBlogs);
app.get("/blog/:id", displayBlog);
app.post("/blog", addBlog);
app.put("/blog/:id", updateBlog);
app.delete("/blog/:id", deleteBlog);
//Restaurant cart
/*app.get("/cart/items", displayItems);
app.delete("/cart/:itemId", deleteItem);
app.put("/cart/:itemId", updateItem);
app.post("/cart/add/:itemId", addItem);
app.get("/pay", payment);*/
//Dishes reviews
app.post("/review/:dishId", addReview);
app.get("/review/:dishId", displayReviews);
app.put("/review/:reviewId", updateReview);
app.delete("/review/:reviewId", deleteReview);
//Restaurant admin
/*app.get("/admins", displayAdmins);
app.get("/admins/:id", displayAdmin);
app.post("/admin", addAdmin);
app.put("/admin", updateAdmin);
app.delete("/admin", deleteAdmin);*/
//Additional services
/*app.post("/messages", sendMessage);
app.post("/subscribe", subscribe);
app.get("/questions", questions);
*/
