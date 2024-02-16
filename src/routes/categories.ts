import app from "../server";
import addCategory from "../controllers/categories/add-category";
import listCategories from "../controllers/categories/list-categories";
import updateCategory from "../controllers/categories/update-category";
import deleteCategory from "../controllers/categories/delete-category";
import dishesByCategories from "../controllers/categories/dishes-by-category";
import adminListCategories from "../controllers/categories/admin-list-categories";
import {
  adminMiddleware,
  userMiddleware,
} from "../helper/middlewares/middlewares";

app.get("/categories/:categoryId", userMiddleware, dishesByCategories);
app.get("/categories", userMiddleware, listCategories);

app.register(
  (app, ops, next) => {
    app.post("/categories", adminMiddleware, addCategory);
    app.get("/categories", adminMiddleware, adminListCategories);
    app.put("/categories/:categoryId", adminMiddleware, updateCategory);
    app.delete("/categories/:categoryId", adminMiddleware, deleteCategory);

    next();
  },
  { prefix: "/admin" }
);
