import { FastifyReply, FastifyRequest } from "fastify";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";

export default async function clear(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const userId = (request as any).user._id;
  const cartCollection = collection("cart");
  await cartCollection.deleteMany({ userId: new ObjectId(userId) });
  reply.status(200).send("deleted successfully");
}
