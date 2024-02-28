import { FastifyReply, FastifyRequest } from "fastify";
import { collection } from "../../database/connection";
import handle from "../../core/request";
import { ObjectId } from "mongodb";
import updateDoc from "../../helper/rud/update";

export default async function updateAddress(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(request);
  const addressId:string = requestHandler.input("id");
  const addressesCollection = collection("addresses");
  const result = await updateDoc(
    addressesCollection,
    [{ _id: new ObjectId(addressId) }],
    request
  );
  if (!result) {
    reply.send("error updating address");
  } else {
    reply.send(result);
  }
}
