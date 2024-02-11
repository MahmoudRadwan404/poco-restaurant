import { FastifyReply, FastifyRequest } from "fastify";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";

export default async function checkout(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const ordersCollection = collection("orders");
  const cart = collection("cart");
  const userId = (request as any).user._id;
  const order = await cart.find({ userId: new ObjectId(userId) }).toArray();
  const status = "pending";
  await ordersCollection.insertOne({ order, status });
  reply.send("Order placed successfully!");
}
