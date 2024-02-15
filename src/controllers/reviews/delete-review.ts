import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";
import deleteDoc from "../../helper/rud/delete";

export default async function deleteReview(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const reviewId = requestHandeler.input("reviewId");
  const reviewsCollection = collection("reviews");
  const result = await deleteDoc(reviewsCollection, reviewId);
  if (result) {
    reply.send({ msg: result });
  } else {
    reply.send({ msg: "could not delete review" });
  }
}
