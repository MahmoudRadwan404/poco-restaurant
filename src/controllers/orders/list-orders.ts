import { FastifyReply, FastifyRequest } from "fastify";
import { collection } from "../../database/connection";
import handle from "../../core/request";
import listWithPagination from "../../helper/rud/list";

export default async function listOrders(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(req);
  const ordersCollections = collection("orders");
  const page = +requestHandler.input("page") || 1;
  const pipeline = [
    { $unwind: "$order" },
    {
      $project: {
        _id: 0,
        orderId: "$_id",
        productName: "$order.name",
        quantity: "$order.quantity",
        price: "$order.price",
        totalPrice: { $multiply: ["$order.price", "$order.quantity"] },
      },
    },
    {
      $group: {
        _id: "$orderId",
        totalOrderPrice: { $sum: "$totalPrice" },
        items: {
          $push: {
            quantity: "$quantity",
            price: "$price",
            totalPrice: "$totalPrice",
          },
        },
      },
    },
  ];
  const orders = await ordersCollections.aggregate(pipeline).toArray();
  if (orders) {
    reply.send(orders);
  } else {
    reply.send("error from listing orders");
  }
}
