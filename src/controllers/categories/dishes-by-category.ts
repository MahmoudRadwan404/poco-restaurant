import { FastifyReply, FastifyRequest } from "fastify";
import { collection } from "../../database/connection";
import handle from "../../core/request";

export default async function dishesByCategories(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(request);
  const dishesCollection = collection("dishes");
  const page = +requestHandler.input("page") || 1;
  const categoryId = requestHandler.input("categoryId");
  const skip = (page - 1) * 15;
  const limit: number = 15;
  try {
    const dishes = await dishesCollection
      .find({ dishCategory: categoryId })
      .limit(limit)
      .skip(skip)
      .toArray();
    const pagination = {
      pages: Math.ceil(dishes.length / limit),
      page: page,
      categories: dishes.length,
    };
    reply.status(200).send({ pagination, dishes });
  } catch (err) {
    reply.status(404).send({ Error: "Error returning categories" });
  }
}
