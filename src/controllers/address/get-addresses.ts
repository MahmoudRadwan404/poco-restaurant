import { FastifyReply, FastifyRequest } from "fastify";
import { collection } from "../../database/connection";

export default async function getAddresses(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const userId = (request as any).user._id;
  const addressesCollection = collection("addresses");
  const addresses = await addressesCollection.find({ userId }).toArray();
  reply.status(200).send({ addresses });
}
