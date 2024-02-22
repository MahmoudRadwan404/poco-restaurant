import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";

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
  const items = requestHandler.input("items");
  let totalMoney = +requestHandler.input("totals");
  const coupon = requestHandler.input("coupon");
  const createdAt = new Date(Date.now());
  const createdBy = (request as any).user._id;
  const status = "accepted";
  if (!customer || !items || !totalMoney || !shippingAddress) {
    reply.status(404).send({ msg: "All fields are required" });
  }
  if (coupon) {
    const couponCollection = collection("coupons");
    const couponData = await couponCollection.findOne({ code: coupon });
    if (
      couponData?.type == "number" &&
      couponData.availableCoupons > 0 &&
      couponData.minimumOrder <= totalMoney
    ) {
      totalMoney = totalMoney - couponData.value;
    } else {
      totalMoney = totalMoney * (couponData?.value / 100);
    }
    await couponCollection.updateOne(
      { code: coupon },
      { $inc: { availableCoupons: -1 } }
    );
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
