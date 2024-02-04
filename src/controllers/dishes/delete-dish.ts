import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";

export default async function deleteDish(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const dishesCollection = collection("dishes");
  const id = requestHandeler.input("dishId");
  const dish = await dishesCollection.deleteOne({ _id: new ObjectId(id) });
  reply.status(200).send(dish);
}
