import { FastifyReply } from "fastify";
import Jwt from "jsonwebtoken";
import { collection } from "../database/connection";

export default async function verifyToken(req: any, res: FastifyReply) {
  const authHeader =
    req.headers["Authorization"] || req.headers["authorization"];

  if (!authHeader) {
    return res
      .status(403)
      .send({ error: "Invalid authorization, token is required" });
  }

  const token = authHeader.split(" ")[1];
  const accessToken = collection("accessToken");
  const users = collection("users");

  try {
    const secretKey: string = process.env.SECRETKEY || "";
    await Jwt.verify(token, secretKey);
    const found = await accessToken.findOne({ token: token });

    if (!found) {
      return res.status(404).send({ error: "not found" });
    }

    const user = await users.findOne({ _id: found.id });
    req["user"] = user; //push new key to request
  } catch (err) {
    res.status(500).send({ error: "Error verifying token" });
  }
}
