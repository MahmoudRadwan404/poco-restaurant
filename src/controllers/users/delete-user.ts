import { ObjectId } from "mongodb";
import { collection } from "../../database/connection";
import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import deleteDoc from "../../helper/rud/delete";
export default async function deleteUser(
  req: FastifyRequest,
  res: FastifyReply
) {
  const users = collection("users");
  const requestHandler = handle(req);
  const id = requestHandler.input("id");
  const result = await deleteDoc(users, id);
  if (result) {
    res.send({ msg: result });
  } else {
    res.send({ msg: "could not delete address" });
  }
}
