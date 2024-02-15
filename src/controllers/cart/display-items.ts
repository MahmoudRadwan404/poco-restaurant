import { FastifyReply, FastifyRequest } from "fastify";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";
import { groupItems, matchedItems, showItems } from "./stages";

export default async function displayItems(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const cartCollection = collection("cart");
  const userId = (request as any).user._id;
  const items = await cartCollection
    .aggregate([matchedItems(userId), groupItems, showItems])
    .toArray();
  reply.status(200).send({ items });
}
