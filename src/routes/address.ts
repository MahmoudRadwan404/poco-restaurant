import app from "../server";
import getAddresses from "../controllers/address/get-addresses";
import createAddress from "../controllers/address/create-address";
import updateAddress from "../controllers/address/update-address";
import deleteAddress from "../controllers/address/delete-address";
import { userMiddleware } from "../helper/middlewares/middlewares";

app.get("/addresses", userMiddleware, getAddresses);
app.post("/addresses", userMiddleware, createAddress);

app.register(
  (app, ops, next) => {
    app.put("/:id", userMiddleware, updateAddress);
    app.delete("/:id", userMiddleware, deleteAddress);

    next();
  },
  { prefix: "/addresses" }
);
