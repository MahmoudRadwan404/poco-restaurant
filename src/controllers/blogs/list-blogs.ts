import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";

export default async function listBlogs(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const title = requestHandeler.input("title");
  const page = +requestHandeler.input("page") || 1;
  const limit = 5;
  const skip = (page - 1) * limit;
  const blogsCollection = collection("blogs");
  const filter = [];
  filter.push(title);
  const blogs = await blogsCollection.find({ ...filter }).toArray();
  reply.send(blogs);
}
