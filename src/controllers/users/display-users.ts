import { FastifyReply, FastifyRequest } from "fastify";
import { collection } from "../../database/connection";
import listWithPagination from "../../helper/rud/list";
import handle from "../../core/request";

export default async function displayUsers(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const usersCollection = collection("users");
  const requestHandler = handle(request);
  const page = +requestHandler.input("page") || 1;
  const users = await listWithPagination(usersCollection, page,[]);
  if (users) {
    reply.status(200).send(users);
  } else {
    reply.send({ msg: "Error from display users" });
  }
}
