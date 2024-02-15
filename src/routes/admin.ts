import app from "../server";
import createAdmin from "../controllers/admin/create-admin";
import updateAdmin from "../controllers/admin/update-admin";
import deleteAdmin from "../controllers/admin/delete-admin";
import getAdmins from "../controllers/admin/get-admin";
import { adminMiddleware } from "../helper/middlewares/middlewares";

app.get("/admins", adminMiddleware, getAdmins);
app.post("/admins", adminMiddleware, createAdmin);
app.put("/admins/:adminId", adminMiddleware, updateAdmin);
app.delete("/admins/:adminId", adminMiddleware, deleteAdmin);
