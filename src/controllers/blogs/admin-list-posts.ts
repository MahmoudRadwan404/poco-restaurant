import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import listWithPagination from "../../helper/rud/list";

export default async function adminListPosts(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const title = requestHandeler.input("title");
  const page = +requestHandeler.input("page") || 1;
  const blogsCollection = collection("blogs");
  const filter = [];
  filter.push(title);
  const blogs = listWithPagination(blogsCollection, page, filter);
  reply.send({ blogs });
}
