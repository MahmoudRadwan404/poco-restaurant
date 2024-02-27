import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";
import { joinDishesWithReviews, showDishedAndReviews } from "./stages";

export default async function showDish(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const dishesCollection = collection("dishes");
  const id: string = requestHandeler.input("dishId");
//  const dish = await dishesCollection.findOne({ _id: new ObjectId(id) });
const dish = await dishesCollection
.aggregate([
  {
    $match: {
      _id: new ObjectId(id) ,
    },
  },
  joinDishesWithReviews,
  showDishedAndReviews,
])
.toArray();
  reply.status(200).send(dish);
}
