import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";
import deleteDoc from "../../helper/rud/delete";

export default async function deleteBlog(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const blogId = requestHandeler.input("blogId");
  const blogsCollection = collection("blogs");
  const result = await deleteDoc(blogsCollection, blogId);
  if (result) {
    reply.send({ msg: result });
  } else {
    reply.send({ msg: "could not blog " });
  }
}
