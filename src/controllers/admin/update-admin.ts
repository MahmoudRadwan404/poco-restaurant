import { ObjectId } from "mongodb";
import { collection } from "../../database/connection";
import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import updateDoc from "../../helper/rud/update";

export default async function updateAdmin(
  req: FastifyRequest,
  res: FastifyReply
) {
  const usersCollection = collection("users");
  const requestHandler = handle(req);
  const adminId = requestHandler.input("adminId");
  const result = await updateDoc(
    usersCollection,
    [{ _id: new ObjectId(adminId) }],
    req
  );
  if (!result) {
    res.send("error updating address");
  } else {
    res.send(result);
  }
}
