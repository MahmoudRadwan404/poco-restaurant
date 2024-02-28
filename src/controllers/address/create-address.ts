import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";

export default async function createAddress(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const { street, city, paymentType, area } = requestHandeler.only([
    "street",
    "city",
    "paymentType",
    "area",
  ]);
  if (!street || !city || !paymentType || !area) {
    reply.send({ msg: "All fields are required" });
  }
  const userId = (request as any).user._id;
  const addressesCollection = collection("addresses");
  await addressesCollection.insertOne({
    street,
    city,
    paymentType,
    userId,
    area,
  });
  reply.status(200).send({ msg: "inserted successfully" });
}
