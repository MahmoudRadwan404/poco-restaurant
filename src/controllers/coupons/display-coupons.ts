import { FastifyReply, FastifyRequest } from "fastify";
import { collection } from "../../database/connection";

export default async function displayCoupons(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const couponsCollection = collection("coupons");
  try {
    const coupons = await couponsCollection.find({}).toArray();
    reply.status(200).send(coupons);
  } catch (err) {
    reply.status(404).send({ msg: "error displaying coupons" });
  }
}
