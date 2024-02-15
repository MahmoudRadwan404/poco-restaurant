import { FastifyReply, FastifyRequest } from "fastify";
import { collection } from "../../database/connection";
import listWithPagination from "../../helper/rud/list";
import handle from "../../core/request";

export default async function getAddresses(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const userId = (request as any).user._id;
  const addressesCollection = collection("addresses");
  const requestHandler = handle(request);
  const page = +requestHandler.input("page") || 1;
  const addresses = await listWithPagination(addressesCollection, page, [
    { userId },
  ]);
  if (addresses) {
    reply.status(200).send({ addresses });
  } else {
    reply.send("error");
  }
}
