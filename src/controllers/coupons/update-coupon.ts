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
  const start = requestHandler.input("start");
  const end = requestHandler.input("end");
  const numberOfUsers = +requestHandler.input("numberOfUsers");
  const type = requestHandler.input("type");
  const value = +requestHandler.input("value");
  const availableCoupons = +requestHandler.input("availableCoupons");
  const minimumOrder = +requestHandler.input("minimumOrder");
  const filter: any = {};
  if (start) {
    filter["start"] = new Date(start);
  }
  console.log(start)
  if (end) {
    filter["end"] =  new Date(end);
  }
  if (numberOfUsers) {
    filter["numberOfUsers"] = numberOfUsers;
  }
  if (type) {
    filter["type"] = type;
  }
  if (value) {
    filter["value"] = value;
  }
  if (availableCoupons) {
    filter["availableCoupons"] = availableCoupons;
  }
  if (minimumOrder) {
    filter["minimumOrder"] = minimumOrder;
  }
  try {
    await coupons.updateOne({ _id: new ObjectId(couponId) }, { $set: filter });
    reply.send({ msg: "updated successfully" });
  } catch (err) {
    reply.status(404).send({ msg: "error updating coupons" });
  }
}
