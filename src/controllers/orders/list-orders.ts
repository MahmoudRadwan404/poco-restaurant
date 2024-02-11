import { FastifyReply, FastifyRequest } from "fastify";
import { collection } from "../../database/connection";

export default async function listOrders(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const ordersCollections = collection("orders");
  try {
    const orders = await ordersCollections.find({}).toArray();
    reply.send(orders);
  } catch (err) {
    reply.send({ msg: "error listing orders" });
  }
}
