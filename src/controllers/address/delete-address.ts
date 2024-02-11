import { FastifyReply, FastifyRequest } from "fastify";
import { collection } from "../../database/connection";
import handle from "../../core/request";
import { ObjectId } from "mongodb";

export default async function deleteAddress(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(request);
  const addressId = requestHandler.input("id");
  const addressesCollection = collection("addresses");
  try {
    await addressesCollection.deleteOne({ _id: new ObjectId(addressId) });
    reply.status(200).send({ msg: "deleted" });
  } catch (err) {
    reply.send({ Error: "error deleting address" });
  }
}
