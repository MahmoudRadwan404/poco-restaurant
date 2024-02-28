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
  const couponId: string = requestHandler.input("couponId");
  const users = collection("users");
  const couponCollection = collection("coupons");
  const coupon = await couponCollection.findOne({
    _id: new ObjectId(couponId),
  });
  const userCoupon = collection("userCoupon");
  console.log(couponId, " ", userId);
  try {
    if (coupon?.numberOfUsers > 0 && coupon?.availableCoupons > 0) {
      const result = await couponCollection.updateOne(
        { _id: new ObjectId(couponId) },
        { $inc: { numberOfUsers: -1, availableCoupons: -1 } }
      );

      if (result.modifiedCount === 1) {
        await userCoupon.insertOne({ coupon, userId: new ObjectId(userId) });
        if (result.modifiedCount > 0) {
          reply.send({ msg: "coupon set successfully" });
        }
      } else {
        reply.send({ msg: "failed sitting coupon" });
      }
    }
  } catch (err) {
    reply.send({ msg: "error setting coupon" });
  }
}
