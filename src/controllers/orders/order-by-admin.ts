import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { totals } from "../../helper/orders/totals";
import applyCoupon from "../../helper/orders/coupon";

export default async function orderByAdmin(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(request);
  const { customer, shippingAddress } = requestHandler.only([
    "customer",
    "shippingAddress",
  ]);
  const ordersCollection = collection("orders");
  const items: any[] = requestHandler.input("items"); //contains array of objects of quantities and mealId
  const coupon = requestHandler.input("coupon");
  let totalMoney = await totals(items);
  const createdAt = new Date(Date.now());
  const createdBy = (request as any).user._id;
  const status = "accepted";
  if (!customer || !items  || !shippingAddress) {
    reply.status(404).send({ msg: "All fields are required" });
  }
  if (coupon) {
    totalMoney = await applyCoupon(coupon, totalMoney);
  }
  try {
    const result = await ordersCollection.insertOne({
      customer,
      items,
      totalMoney,
      coupon,
      shippingAddress,
      createdAt,
      createdBy,
      status,
    });
    reply.status(200).send(result);
  } catch (err) {
    reply.status(505).send({ msg: "Error from orders controller" });
  }
}
