import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";
import updateDoc from "../../helper/rud/update";

export default async function updateBlog(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const blogId = requestHandeler.input("blogId");
  const blogsCollection = collection("blogs");
  const result = await updateDoc(
    blogsCollection,
    [{ _id: new ObjectId(blogId) }],
    request
  );
  if (!result) {
    reply.send("error updating address");
  } else {
    reply.send(result);
  }
}
