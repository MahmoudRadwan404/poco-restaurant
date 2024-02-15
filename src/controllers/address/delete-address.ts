import { FastifyReply, FastifyRequest } from "fastify";
import { collection } from "../../database/connection";
import handle from "../../core/request";
import { ObjectId } from "mongodb";
import deleteDoc from "../../helper/rud/delete";

export default async function deleteAddress(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(request);
  const addressId = requestHandler.input("id");
  const addressesCollection = collection("addresses");
  const result = await deleteDoc(addressesCollection, addressId);
  if (result) {
    reply.send({ msg: result });
  } else {
    reply.send({ msg: "could not delete address" });
  }
}
