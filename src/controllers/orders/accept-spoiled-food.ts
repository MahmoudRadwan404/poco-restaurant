import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";

export default async function acceptSpoiledFood(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(request);
  const orderId = requestHandler.input("spoiledId");
  const spoiledCollection = collection("spoiled");
  try {
    await spoiledCollection.updateOne(
      { _id: new ObjectId(orderId) },
      { $set: { status: "accepted" } }
    );
    reply
      .status(200)
      .send({
        msg: "we apologies for spoiling your food ,come to the restaurant and take your money",
      });
  } catch (err) {
    reply.status(505).send({ msg: "Error, can't accept" });
  }
}
