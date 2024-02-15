import app from "../server";
import displayItems from "../controllers/cart/display-items";
import clear from "../controllers/cart/clear";
import addItem from "../controllers/cart/add-item";
import updateItem from "../controllers/cart/update-item";
import checkout from "../controllers/cart/checkout";
import { userMiddleware } from "../helper/middlewares/middlewares";

app.get("/cart", userMiddleware, displayItems);
app.delete("/cart/clear", userMiddleware, clear);
app.put("/cart/:itemId", userMiddleware, updateItem);
app.post("/cart/:itemId", userMiddleware, addItem);
app.get("/checkout", userMiddleware, checkout);
