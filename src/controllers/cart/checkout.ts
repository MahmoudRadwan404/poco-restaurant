import { FastifyReply, FastifyRequest } from "fastify";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";
import handle from "../../core/request";

export default async function checkout(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requessHandeler = handle(request);
  const addressId = requessHandeler.input("id");
  const addresses = collection("addresses");
  const cart = collection("cart");
  const ordersCollection = collection("orders");
  const userId = (request as any).user._id;
  const address = addresses.findOne({ _id: new ObjectId(addressId) });
  const meals = await cart.find({ userId: new ObjectId(userId) }).toArray();
  const status = "pending";
  await ordersCollection.insertOne({ meals, status, address });
  reply.send("Order placed successfully!");
}
