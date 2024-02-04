import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";

export default async function displayReviews(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const dishId = requestHandeler.input("dishId");
  const reviewsCollection = collection("reviews");
  const reviews = await reviewsCollection.find({ dishId }).toArray();
  reply.status(200).send(reviews);
}
