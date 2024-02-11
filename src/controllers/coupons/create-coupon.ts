import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";

export default async function createCoupon(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(request);
  const start = requestHandler.input("start");
  const end = requestHandler.input("end");
  const numberOfUsers = +requestHandler.input("numberOfUsers");
  const type = requestHandler.input("type");
  const value = +requestHandler.input("value");
  const availableCoupons = +requestHandler.input("availableCoupons") || 0;
  const minimumOrder = +requestHandler.input("minimumOrder") || 0;
  const couponsCollection = collection("coupons");
  const code = Math.random().toString(36).substring(2, 10);
  if (
    !start ||
    !end ||
    !numberOfUsers ||
    !type ||
    !value ||
    !availableCoupons ||
    !minimumOrder
  ) {
    return reply.status(404).send({ msg: "All fields are required" });
  }
  try {
    await couponsCollection.insertOne({
      start:new Date(start),
      end:new Date(end),
      numberOfUsers,
      type,
      value,
      availableCoupons,
      minimumOrder,code
    });
    reply.status(200).send({ msg: "created successfully" });
  } catch (err) {
    reply.status(404).send({ msg: "error creating coupon" });
  }
}
