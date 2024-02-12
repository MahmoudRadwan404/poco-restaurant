import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";

export default async function addCategory(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(request);
  const categoryName = requestHandler.input("categoryName");
  const published = Boolean(requestHandler.input("published")) || false;
  const categories = collection("categories");
  try {
    const result = await categories.insertOne({ categoryName, published });
    reply.send({ categoryId: result.insertedId });
  } catch (err) {
    reply.status(404).send({ Error: "Error inserting category" });
  }
}
