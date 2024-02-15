import { FastifyReply, FastifyRequest } from "fastify";
import { collection } from "../../database/connection";
import listWithPagination from "../../helper/rud/list";
import handle from "../../core/request";

export default async function test(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const usersCollection = collection("users");
  const requestHandler = handle(request);
  const page = +requestHandler.input("page") || 1;
  const filter: any = [];
  const users = await usersCollection.find({ ...filter }).toArray();
  if (users) {
    reply.status(200).send(users);
  } else {
    reply.send({ msg: "Error from display users" });
  }
}
