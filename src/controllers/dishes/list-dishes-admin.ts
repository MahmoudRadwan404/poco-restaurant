import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { pipeline } from "stream";

export default async function listDishesAdmin(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const dishesCollection = collection("dishes");
  const limit = 10;
  const page = requestHandeler.input("page") || 1;
  const skip = (page - 1) * limit;
  const dishes = await dishesCollection
    .aggregate([
      {
        $lookup: {
          from: "reviews",
          localField: "_id",
          foreignField: "dishId",
          as: "newReviews",
        },
      },
      {
        $project: {
          name: 1,
          //newReviews:1,
          reviews: {
            $cond: {
              if: { $eq: [{ $ifNull: [{ $size: "$newReviews" }, 0] }, 0] },
              then: 0,
              else: "$newReviews",
            },
          },
          numberOfReviews: { $ifNull: [{ $size: "$newReviews" }, 0] },
          price: 1,
        },
      },
    ])
    .toArray();
  reply.status(200).send(dishes);
}
