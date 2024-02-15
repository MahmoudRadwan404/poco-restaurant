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
  const couponCollection = collection("coupon");
  const coupon = await couponCollection.findOne({
    _id: new ObjectId(couponId),
  });
  const userCoupon = collection("userCoupon");
  try {
    await userCoupon.insertOne({ coupon, userId: new ObjectId(userId) });
    const result = await couponCollection.updateOne(
      { _id: new ObjectId(couponId) },
      { $inc: { numberOfUsers: -1 } }
    );
    if (result.modifiedCount === 1) {
      if (result.modifiedCount > 0) {
        reply.send({ msg: "coupon set successfully" });
      }
    } else {
      reply.send({ msg: "failed sitting coupon" });
    }
  } catch (err) {
    reply.send({ msg: "error setting coupon" });
  }
}
