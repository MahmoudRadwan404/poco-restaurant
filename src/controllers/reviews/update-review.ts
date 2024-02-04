import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";

export default async function updateReview(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const reviewId = requestHandeler.input("reviewId");
  const reviewsCollection = collection("reviews");
  const reviews = await reviewsCollection.updateOne(
    {
      _id: new ObjectId(reviewId),
    },
    {
      $set: request.body,
    }
  );
  reply.status(200).send({ msg: reviews });
}
