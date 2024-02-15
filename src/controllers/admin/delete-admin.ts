import { ObjectId } from "mongodb";
import { collection } from "../../database/connection";
import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import deleteDoc from "../../helper/rud/delete";

export default async function deleteAdmin(
  req: FastifyRequest,
  res: FastifyReply
) {
  const users = collection("users");
  const requestHandler = handle(req);
  const adminId = requestHandler.input("adminId");
  const result = await deleteDoc(users, adminId);
  if (result) {
    res.send({ msg: result });
  } else {
    res.send({ msg: "could not delete admin" });
  }
}
