import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { totals } from "../../helper/orders/totals";
import applyCoupon from "../../helper/orders/coupon";
import { item } from "../../helper/orders/item-type";
import { ObjectId } from "mongodb";

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
  const couponsCollection = collection("coupon");
  const items: item[] = requestHandler.input("items");
  const coupon = requestHandler.input("coupon");
  let totalMoney = await totals(items);
  const createdAt = new Date(Date.now());
  const createdBy = (request as any).user._id;
  const status = "accepted";
  const theCoupon = await couponsCollection.findOne({ code: coupon });
  for (let item of items) {
    if (typeof item.id != "string" || typeof item.quantity != "number") {
      return reply.send("invalid types");
    }
  }
  if (!customer || !items || !shippingAddress) {
    return reply.status(404).send({ msg: "All fields are required" });
  }
  if (theCoupon) {
    totalMoney = await applyCoupon(coupon, totalMoney);
  } else {
    return reply.send({ msg: "Not valid coupon" });
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
    const orderDetails = await ordersCollection.findOne({
      _id: new ObjectId(result.insertedId),
    });
    reply.status(200).send(orderDetails);
  } catch (err) {
    reply.status(505).send({ msg: "Error from orders controller" });
  }
}
