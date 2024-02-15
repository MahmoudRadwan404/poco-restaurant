import app from "../server";
import listDishesAdmin from "../controllers/dishes/list-dishes-admin";
import addDish from "../controllers/dishes/add-dish";
import deleteDish from "../controllers/dishes/delete-dish";
import updateDish from "../controllers/dishes/update-dish";
import listDishes from "../controllers/dishes/list-dishes";
import showDish from "../controllers/dishes/show-dish";
import { adminMiddleware } from "../helper/middlewares/middlewares";

app.get("/dishes", listDishes);
app.get("/dishes/:dishId", showDish);
app.post("/admin/dishes", adminMiddleware, addDish);
app.get("/admin/dishes", adminMiddleware, listDishesAdmin);
app.put("/admin/dishes/:dishId", adminMiddleware, updateDish);
app.delete("/admin/dishes/:dishId", adminMiddleware, deleteDish);
