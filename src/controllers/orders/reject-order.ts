import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";

export default async function rejectOrder(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(request);
  const orderId = requestHandler.input("orderId");
  const ordersCollection = collection("orders");
  try {
    await ordersCollection.updateOne(
      { _id: new ObjectId(orderId) },
      { $set: { status: "rejected" } }
    );
    reply.status(200).send({ msg: "these items are not found" });
  } catch (err) {
    reply.status(505).send({ msg: "Error, can't reject" });
  }
}
