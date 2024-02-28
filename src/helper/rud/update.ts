import { FastifyRequest } from "fastify";

export default async function updateDoc(
  collection: any,
  filter: any,
  request: FastifyRequest
) {
  try {
    const result = await collection.updateOne(...filter, {
      $set: request.body,
    });
    console.log(request.body);
    return result;
  } catch (err) {
    return false;
  }
}
