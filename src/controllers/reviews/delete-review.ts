import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";

export default async function deleteReview(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const reviewId = requestHandeler.input("reviewId");
  const reviewsCollection = collection("reviews");
  const reviews = await reviewsCollection.deleteOne({
    _id: new ObjectId(reviewId),
  });
  reply.status(200).send({ msg: reviews });
}
