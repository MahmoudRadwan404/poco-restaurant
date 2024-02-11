import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";

export default async function setCoupon(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(request);
  const userId = requestHandler.input("userId");
  const couponId = requestHandler.input("couponId");
  const users = collection("users");
  try {
    await users.updateOne(
      { _id: new ObjectId(userId) },
      { $set: { coupon: new ObjectId(couponId) } }
    );
    reply.send({ msg: "coupon set successfully" });
  } catch (err) {
    reply.send({ msg: "error setting coupon" });
  }
}
