import { FastifyReply, FastifyRequest } from "fastify";
import { collection } from "../../database/connection";
import handle from "../../core/request";
import { ObjectId } from "mongodb";

export default async function updateAddress(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(request);
  const addressId = requestHandler.input("id");
  const addressesCollection = collection("addresses");
  try {
    await addressesCollection.updateOne(
      { _id: new ObjectId(addressId) },
      { $set: request.body }
    );
    reply.status(200).send({ msg: "updated" });
  } catch (err) {
    reply.status(404).send({ Error: "error deleting address" });
  }
}
