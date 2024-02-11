import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";

export default async function updateCoupon(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(request);
  const couponId = requestHandler.input("couponId");
  const coupons = collection("coupons");
  try {
    await coupons.updateOne(
      { _id: new ObjectId(couponId) },
      { $set: request.body }
    );
    reply.send({ msg: "updated successfully" });
  } catch (err) {
    reply.status(404).send({ msg: "error updating coupons" });
  }
}
