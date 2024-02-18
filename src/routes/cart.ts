import app from "../server";
import displayItems from "../controllers/cart/display-items";
import clear from "../controllers/cart/clear";
import addItem from "../controllers/cart/add-item";
import updateItem from "../controllers/cart/update-item";
import checkout from "../controllers/cart/checkout";
import { userMiddleware } from "../helper/middlewares/middlewares";

app.post("/checkout/:id", userMiddleware, checkout);

app.get("/cart", userMiddleware, displayItems);
app.register(
  (app, ops, next) => {
    app.delete("/clear", userMiddleware, clear);
    app.put("/:itemId", userMiddleware, updateItem);
    app.post("/:itemId", userMiddleware, addItem);

    next();
  },
  { prefix: "/cart" }
);
