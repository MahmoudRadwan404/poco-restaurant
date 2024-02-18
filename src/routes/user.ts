import app from "../server";
import signup from "../controllers/users/signup";
import displayUsers from "../controllers/users/display-users";
import displayUser from "../controllers/users/display-user";
import updateUser from "../controllers/users/update-user";
import deleteUser from "../controllers/users/delete-user";
import login from "../controllers/users/login";
import forget from "../controllers/users/forget";
import reset from "../controllers/users/reset";
import verifyEmail from "../controllers/users/verify-email";
import { adminMiddleware } from "../helper/middlewares/middlewares";
import test from "../controllers/users/test";
import { adminPrefix } from "../helper/prefix";
//Users Login,Registration,Forget,Reset.
app.post("/signup", signup);
app.post("/login", login);
app.post("/forget", forget);
app.post("/reset", reset);
app.post("/verify/email", verifyEmail);
app.register((app, ops, next) => {
  app.get("/users", displayUsers);
  app.patch("/users/:id", adminMiddleware, updateUser);
  app.delete("/users/:id", adminMiddleware, deleteUser);
  app.get("/users/:id", adminMiddleware, displayUser);

  next();
}, adminPrefix);
