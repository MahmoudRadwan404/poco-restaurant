import verifyAdmin from "../../validation/admin/verify-admin";
import verifyToken from "../../validation/verify-token";

export const adminMiddleware = { preHandler: [verifyToken, verifyAdmin] };
export const userMiddleware = { preHandler: [verifyToken] };
