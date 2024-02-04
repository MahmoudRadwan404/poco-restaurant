import { ObjectId } from "mongodb";
import { collection } from "../../database/connection";
import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
export default async function deleteUser(
  req: FastifyRequest,
  res: FastifyReply
) {
  const users = collection("users");
  const requestHandler = handle(req);
  const id = requestHandler.input("id");
  const deleted = await users.deleteOne({ _id: new ObjectId(id) });
  res.send(deleted);
}
