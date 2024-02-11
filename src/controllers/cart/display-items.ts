import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";

export default async function displayItems(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const cartCollection = collection("cart");
  const requestHandeler = handle(request);
  //const userId = requestHandeler.input("userId");
  const userId = (request as any).user._id
  const items = await cartCollection
    .aggregate([
      {
        $match: { userId: new ObjectId (userId) },
      },
      {
        $group: {
          _id: "$userId",
          totalPrice: { $sum: { $multiply: ["$quantity", "$price"] } },
          items: {
            $push: {
              itemId: "$_id",
              quantity: "$quantity",
              price: "$price",
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          items: 1,
          totalPrice: 1,
        },
      },
    ])
    .toArray();
  reply.status(200).send({items});
}
