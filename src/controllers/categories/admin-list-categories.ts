import { FastifyReply, FastifyRequest } from "fastify";
import { collection } from "../../database/connection";
import handle from "../../core/request";
import listWithPagination from "../../helper/rud/list";

export default async function adminListCategories(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(request);
  const categoriesCollection = collection("categories");
  const page = +requestHandler.input("page") || 1;
  const result = listWithPagination(categoriesCollection, page, []);
  if (!result) {
    return reply.status(200).send({ msg: "Error from listAdminCategories" });
  }
  reply.status(200).send({ result });
}
