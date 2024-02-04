import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";

export default async function addDish(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const dishes = collection("dishes");
  const name: string = requestHandeler.input("dishName");
  const categoryId: string = requestHandeler.input("categoryId");
  const price: number = +requestHandeler.input("price");
  const description: string = requestHandeler.input("description");
  const ingredients: string = requestHandeler.input("ingredients");
  if (!name || !categoryId || !price || !description || !ingredients) {
    reply.status(200).send({ msg: "all fields are required" });
  }
  await dishes.insertOne({ name, categoryId, price, description, ingredients });
  reply.send({ msg: "inserted successfully" });
}
