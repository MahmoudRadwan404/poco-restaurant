import { FastifyReply, FastifyRequest } from "fastify";
import { collection } from "../../database/connection";
import handle from "../../core/request";
import listWithPagination from "../../helper/rud/list";

export default async function dishesByCategories(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(request);
  const dishesCollection = collection("dishes");
  const page = +requestHandler.input("page") || 1;
  const categoryId = requestHandler.input("categoryId");
  const result =await listWithPagination(dishesCollection, page, [{ categoryId }]);
  if (!result) {
    reply.status(404).send({ Error: "Error returning categories" });
  } else {
    reply.status(404).send({ dishes: result });
  }
}
