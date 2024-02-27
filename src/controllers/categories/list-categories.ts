import { FastifyReply, FastifyRequest } from "fastify";
import { collection } from "../../database/connection";
import handle from "../../core/request";
import listWithPagination from "../../helper/rud/list";
export default async function listCategories(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(request);
  const categoriesCollection = collection("categories");
  const page = +requestHandler.input("page") || 1;
  const categories = await listWithPagination(categoriesCollection, page, []);
  if (categories) {
    reply.send(categories);
  } else {
    reply.send("error from list categories");
  }
}
