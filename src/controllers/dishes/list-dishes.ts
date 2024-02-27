import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { pipeline } from "stream";
import { joinDishesWithReviews, showDishedAndReviews } from "./stages";

export default async function listDishes(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const dishesCollection = collection("dishes");
  const limit = 10;
  const page = +requestHandeler.input("page") || 1;
  const skip = (page - 1) * limit;
  const dishesForPagination = await dishesCollection
    .aggregate([
      {
        $match: {
          published: true,
        },
      },
    ])
    .toArray();
  const dishesLength = dishesForPagination.length;
  const dishes = await dishesCollection
    .aggregate([
      {
        $match: {
          published: true,
        },
      },
      joinDishesWithReviews,
      showDishedAndReviews,
      { $skip: skip },
      { $limit: limit },
    ])
    .toArray();

  reply.status(200).send({ page, limit, total: dishesLength, dishes });
}
