import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";

export default async function deleteCoupon(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(request);
  const couponId = requestHandler.input("couponId");
  const coupons = collection("coupons");
  try {
    await coupons.deleteOne({ _id: new ObjectId(couponId) });
    reply.send({ msg: "deleted successfully" });
  } catch (err) {
    reply.status(404).send({ msg: "error deleting coupons" });
  }
}
