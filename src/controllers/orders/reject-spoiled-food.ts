import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";

export default async function rejectSpoiledFood(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(request);
  const orderId = requestHandler.input("spoiledId");
  const spoiledCollection = collection("spoiled");
  try {
    await spoiledCollection.updateOne(
      { _id: new ObjectId(orderId) },
      { $set: { status: "rejected" } }
    );
    reply.status(200).send({ msg: "you spoiled your food ,can't return money" });
  } catch (err) {
    reply.status(505).send({ msg: "Error, can't accept" });
  }
}
