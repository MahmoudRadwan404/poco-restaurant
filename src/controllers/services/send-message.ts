import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";

export default async function sendMessage(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const { name, email, message, subject } = requestHandeler.only([
    "name",
    "email",
    "message",
    "subject",
  ]);

  if (!name || !email || !message || !subject) {
    reply.status(404).send({ msg: "All fields are required" });
  }
  const messages = collection("messages");
  await messages.insertOne({ name, email, message, subject });
  return reply
    .status(201)
    .send({ msg: `Your message has been sent successfully` });
}
