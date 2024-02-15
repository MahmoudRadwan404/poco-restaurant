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
  const itemId = requestHandeler.input("itemId");
  const userId = (request as any).user._id;
  const quantity = requestHandeler.input("quantity");
  const result = await updateDoc(
    cartCollection,
    [{ itemId: new ObjectId(itemId) }, { userId: new ObjectId(userId) }],
    request
  );
  if (!result) {
    reply.send("error updating address");
  } else {
    reply.send(result);
  }
}
