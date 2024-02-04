import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import verifyCode from "../../validation/verify-code";
import { collection } from "../../database/connection";
export default async function verifyEmail(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const users = collection("users");
  const { code } = requestHandeler.only(["code"]);
  const flag = await verifyCode(code);
  if (!flag) {
    return reply.send({ msg: "Not valid  " });
  }
  await users.updateOne({ code }, { $unset: code });
  reply.send({ msg: "verified successfully" });
}
