import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";

export default async function addReview(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const dishId = requestHandeler.input("dishId");
  const rating: number = +requestHandeler.input("rate");
  const review: string = requestHandeler.input("review");
  const reviewer: string = requestHandeler.input("name");
  const email: string = requestHandeler.input("email");
  const reviewsCollection = collection("reviews");
  if (!rating || !review || !reviewer || !email) {
    reply.send({ msg: "All fields ara required" });
  }
  try {
    await reviewsCollection.insertOne({
      dishId: new ObjectId(dishId),
      rating,
      review,
      reviewer,
      email,
    });
    reply.status(200).send("inserted successfully");
  } catch (err) {
    reply.status(505).send({ msg: "error occurred in add reviews controller" });
  }
}
