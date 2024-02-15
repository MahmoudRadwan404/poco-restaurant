import app from "../server";
import acceptOrder from "../controllers/orders/accept-order";
import rejectOrder from "../controllers/orders/reject-order";
import acceptSpoiledFood from "../controllers/orders/accept-spoiled-food";
import rejectSpoiledFood from "../controllers/orders/reject-spoiled-food";
import listOrders from "../controllers/orders/list-orders";
import { adminMiddleware } from "../helper/middlewares/middlewares";

app.get("/admin/orders", adminMiddleware, listOrders);
app.patch("/admin/orders/reject/:orderId", adminMiddleware, rejectOrder);
app.patch("/admin/orders/accept/:orderId", adminMiddleware, acceptOrder);
app.patch("/admin/reject/:spoiledId", adminMiddleware, rejectSpoiledFood);
app.patch("/admin/accept/:spoiledId", adminMiddleware, acceptSpoiledFood);
