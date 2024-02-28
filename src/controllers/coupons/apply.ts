import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { pipeline } from "stream";
import { ObjectId } from "mongodb";
import { matchUserId, totalPrice } from "../../helper/coupons/stages";
//not finished
export default async function apply(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(request);
  //const couponId = requestHandler.input("couponId");
  const cartCollection = collection("cart");
  const couponsCollection = collection("userCoupon");
  const date = new Date(Date.now());
  const userId: string = (request as any).user._id;
  const users = collection("users");
  let coupon;
  let discountPercentage;
  try {
    coupon = await couponsCollection.findOne({ userId: userId });
    console.log(date);
    if (coupon?.coupon.start > date && coupon?.coupon.end < date) {
      return reply.send({ msg: "expired coupon" });
    }
    if (coupon?.coupon.type == "percentage") {
      discountPercentage = coupon?.coupon.value;

      const result = await cartCollection
        .aggregate([
          matchUserId(userId),
          totalPrice,
          {
            $addFields: {
              totalPrice: "$totalPrice",
              discountAmount: {
                $multiply: [
                  "$totalPrice",
                  { $divide: [discountPercentage, 100] },
                ],
              },
              discountPrice: { $subtract: ["$totalPrice", "$discountAmount"] },
            },
          },
          {
            $project: {
              _id: 0,
              userId: "$_id",
              totalPrice: 1,
              discountPrice: 1,
              items: 1,
            },
          },
        ])
        .toArray();

      reply.send(result);
    } else if (coupon?.coupon.type == "number") {
      const result = await cartCollection
        .aggregate([
          matchUserId(userId),
          totalPrice,
          {
            $project: {
              _id: 0,
              userId: "$_id",
              totalPrice: 1,
              discountPrice: {
                $subtract: [
                  "$totalPrice",
                  { $ifNull: [coupon?.coupon.value, 0] },
                ],
              },
              items: 1,
            },
          },
        ])
        .toArray();
      reply.send(result);
    }
  } catch (err) {
    console.log(err);
    reply.status(404).send({ msg: "error applying coupon" });
  }
}
