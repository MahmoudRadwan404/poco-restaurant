import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";

export default async function addItem(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const itemId:string = requestHandeler.input("itemId");
  const quantity = +requestHandeler.input("quantity");
  const dishes = collection("dishes");
  const dish = await dishes.findOne({ _id: new ObjectId(itemId) });
  if (quantity <= 0) {
    return reply.send({ msg: "Quantity must be a positive number" });
  }
  const userId = (request as any).user._id;
  const cartCollection = collection("cart");
  await cartCollection.insertOne({
    itemId,
    quantity,
    price: dish?.price,
    name:dish?.name,
    userId,
  });
  return reply.code(201).send({ message: "Item added to the cart" });
}
