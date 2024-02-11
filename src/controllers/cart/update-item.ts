import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";

export default async function updateItem(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const cartCollection = collection("cart");
  const itemId = requestHandeler.input("itemId");
  const userId = (request as any).user._id;
  const quantity = requestHandeler.input("quantity");
  await cartCollection.updateOne(
    { itemId: new ObjectId(itemId), userId: new ObjectId(userId) },
    { quantity: quantity }
  );
  return reply.status(200).send({ message: "success" });
}
