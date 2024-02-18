import app from "../server";
import listDishesAdmin from "../controllers/dishes/list-dishes-admin";
import addDish from "../controllers/dishes/add-dish";
import deleteDish from "../controllers/dishes/delete-dish";
import updateDish from "../controllers/dishes/update-dish";
import listDishes from "../controllers/dishes/list-dishes";
import showDish from "../controllers/dishes/show-dish";
import { adminMiddleware } from "../helper/middlewares/middlewares";
import { adminPrefix } from "../helper/prefix";

app.get("/dishes", listDishes);
app.get("/dishes/:dishId", showDish);
app.register(
  (app, ops, next) => {
    app.post("/dishes", adminMiddleware, addDish);
    app.get("/dishes", adminMiddleware, listDishesAdmin);
    app.put("/dishes/:dishId", adminMiddleware, updateDish);
    app.delete("/dishes/:dishId", adminMiddleware, deleteDish);
    next();
  },
  adminPrefix
);
