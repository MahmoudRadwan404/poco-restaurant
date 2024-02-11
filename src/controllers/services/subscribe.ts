import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";

export default async function subscribe(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const email = requestHandeler.input("email");
  const subscribe = collection("subscribe");
  const userId = (request as any).user._id;
  await subscribe.insertOne({ email, userId });
  reply.send({ msg: "successfully subscribed" });
}
