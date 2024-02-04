import { FastifyReply, FastifyRequest } from "fastify";
import { collection } from "../../database/connection";

export default async function displayUsers(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const usersCollection = collection("users");
  const users = await usersCollection.find({}).toArray();
  reply.status(200).send(users);
}
