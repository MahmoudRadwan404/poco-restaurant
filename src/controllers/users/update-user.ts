import { ObjectId } from "mongodb";
import { collection } from "../../database/connection";
import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";

export default async function updateUser(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const usersCollection = collection("users");
  const requestHandler = handle(request);
  const id = requestHandler.input("id");

  try {
    let newUser = await usersCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: request.body }
    );
    reply.status(200).send({ newUser });
  } catch (err) {
    reply.status(404).send(err);
  }
}
