import { ObjectId } from "mongodb";
import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import deleteDoc from "../../helper/rud/delete";

export default async function deleteCategory(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(request);
  const categoryId = requestHandler.input("categoryId");
  const categories = collection("categories");
  const result = await deleteDoc(categories, categoryId);
  if (result) {
    reply.send({ msg: result });
  } else {
    reply.send({ msg: "could not delete category" });
  }
}
