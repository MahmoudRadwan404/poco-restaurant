import app from "../server";
import getAddresses from "../controllers/address/get-addresses";
import createAddress from "../controllers/address/create-address";
import updateAddress from "../controllers/address/update-address";
import deleteAddress from "../controllers/address/delete-address";
import { userMiddleware } from "../helper/middlewares/middlewares";

app.get("/addresses/:userId", userMiddleware, getAddresses);
app.post("/addresses", userMiddleware, createAddress);
app.put("/addresses/:id", userMiddleware, updateAddress);
app.delete("/addresses/:id", userMiddleware, deleteAddress);
