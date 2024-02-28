import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { pipeline } from "stream";
import { ObjectId } from "mongodb";
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
  const userId : string= (request as any).user._id;
  const users = collection("users");
  let coupon;
  let discountPercentage;
  try {
    coupon = await couponsCollection.findOne({ userId: userId });
    console.log(coupon?.coupon.start > date)
    if (coupon?.coupon.start > date && coupon?.coupon.end < date) {
      return reply.send({ msg: "expired coupon" });
    }
    if (coupon?.coupon.type == "percentage") {
      discountPercentage = coupon.value;

      const result = await cartCollection.aggregate([
        {
          $match: { userId: userId },
        },
        {
          $group: {
            _id: "$userId",
            totalPrice: { $sum: { $multiply: ["$quantity", "$price"] } },
          },
        },
        {
          $addFields: {
            totalPrice: "$totalPrice",
          },
        },
        {
          $addFields: {
            discountAmount: {
              $multiply: [
                "$totalPrice",
                { $divide: [ discountPercentage,100] },
              ],
            },
          },
        },
        {
          $addFields: {
            discountPrice: { $subtract: ["$totalPrice", "$discountAmount"] },
          },
        },
        {
          $project: {
            totalPrice: 1,
            discountPrice: 1,
          },
        },
      ]).toArray();
      reply.send(result);
    } else if (coupon?.coupon.type == "number") {
      const result = await cartCollection.aggregate([
        {
          $match: { userId: userId },
        },
        {
          $group: {
            _id: "$userId",
            totalPrice: { $sum: { $multiply: ["$quantity", "$price"] } },
          },
        },
        {
          $addFields: {
            totalPrice: "$totalPrice",
          },
        },
        {
          $addFields: {
            discountPrice: { $subtract: ["$totalPrice", coupon?.coupon.value] },
          },
        },
        {
          $project: {
            totalPrice: 1,
            discountPrice: 1,
          },
        },
      ]).toArray();
      reply.send(result);
      
    }
  } catch (err) {
    reply.status(404).send({ msg: "error applying coupon" });
  }
}
