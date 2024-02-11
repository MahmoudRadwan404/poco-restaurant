import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";

export default async function answerQuestions(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const answer = requestHandeler.input("answer");
  const messageId = requestHandeler.input("messageId");
  const messagesCollection = collection("messages");
  const message = await messagesCollection.findOne({
    _id: new ObjectId(messageId),
  });
  const questions = collection("faq");
  await questions.insertOne({ answer, question: message?.subject });
  return reply.send({ success: true });
}
