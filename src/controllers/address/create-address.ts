import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";

export default async function createAddress(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const { street, city, address, type, area } = requestHandeler.only([
    "street",
    "city",
    "address",
    "type",
    "area",
  ]);
  if (!street || !city || !address || !type) {
    reply.send({ msg: "All fields are required" });
  }
  const userId = (request as any).user._id;
  const addressesCollection = collection("addresses");
  await addressesCollection.insertOne({
    street,
    city,
    address,
    type,
    userId,
    area,
  });
  reply.status(200).send({ msg: "inserted successfully" });
}
