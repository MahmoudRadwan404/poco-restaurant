import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";

export default async function showMessages(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const messagesCollection = collection("messages");
  try {
    const messages = messagesCollection.find({}).toArray();
    reply.status(200).send(messages);
  } catch (err) {
    reply.status(505).send({ msg: "error showing messages" });
  }
}
