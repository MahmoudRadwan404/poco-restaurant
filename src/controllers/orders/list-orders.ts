import { FastifyReply, FastifyRequest } from "fastify";
import { collection } from "../../database/connection";
import handle from "../../core/request";
import listWithPagination from "../../helper/rud/list";

export default async function listOrders(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(req);
  const ordersCollections = collection("orders");
  const page = +requestHandler.input("page") || 1;
  const orders = await listWithPagination(ordersCollections, page, []);
  if (orders) {
    reply.send(orders);
  } else {
    reply.send("error from listing orders");
  }
}
