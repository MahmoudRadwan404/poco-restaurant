import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";
import deleteDoc from "../../helper/rud/delete";

export default async function deleteCoupon(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(request);
  const couponId = requestHandler.input("couponId");
  const coupons = collection("coupons");
  const result = await deleteDoc(coupons, couponId);
  if (result) {
    reply.send({ msg: result });
  } else {
    reply.send({ msg: "could not delete coupon" });
  }
}
