import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";
import updateDoc from "../../helper/rud/update";

export default async function updateItem(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const cartCollection = collection("cart");
  const itemId: string = requestHandeler.input("itemId");
  const quantity = +requestHandeler.input("quantity");
  const result = await cartCollection.updateOne(
    { _id: new ObjectId(itemId) },
    { $set: { quantity: quantity } }
  );
  if (!result) {
    reply.send("error updating item");
  } else {
    reply.send(result);
  }
}
