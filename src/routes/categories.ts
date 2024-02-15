import app from "../server";
import addCategory from "../controllers/categories/add-category";
import listCategories from "../controllers/categories/list-categories";
import updateCategory from "../controllers/categories/update-category";
import deleteCategory from "../controllers/categories/delete-category";
import dishesByCategories from "../controllers/categories/dishes-by-category";
import adminListCategories from "../controllers/categories/admin-list-categories";
import { adminMiddleware, userMiddleware } from "../helper/middlewares/middlewares";

app.get("/categories/:categoryId", userMiddleware, dishesByCategories);
app.get("/categories", userMiddleware, listCategories);

//admin
app.post("/admin/categories", adminMiddleware, addCategory);
app.get("/admin/categories", adminMiddleware, adminListCategories);
app.put("/admin/categories/:categoryId", adminMiddleware, updateCategory);
app.delete("/admin/categories/:categoryId", adminMiddleware, deleteCategory);
/*app.register((app)=>{
  //admin
  app.post(
    "/admin/categories",
    { preHandler: [verifyToken, verifyAdmin] },
    addCategory
  );
  app.get(
    "/categories",
    { preHandler: [verifyToken, verifyAdmin] },
    adminListCategories
  );
  app.put(
    "/admin/categories/:categoryId",
    { preHandler: [verifyToken, verifyAdmin] },
    updateCategory
  );
  app.delete(
    "/admin/categories/:categoryId",
    { preHandler: [verifyToken, verifyAdmin] },
    deleteCategory
  );
},{prefix:"/admin"})*/
