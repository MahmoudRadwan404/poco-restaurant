import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";
import deleteDoc from "../../helper/rud/delete";

export default async function deleteDish(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const dishesCollection = collection("dishes");
  const id = requestHandeler.input("dishId");
  const result = await deleteDoc(dishesCollection, id);
  if (result) {
    reply.send({ msg: result });
  } else {
    reply.send({ msg: "could not delete dish" });
  }
}
