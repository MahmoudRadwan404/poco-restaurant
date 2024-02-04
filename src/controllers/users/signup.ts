import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import validation from "../../validation/signup";
import { verifyEmail } from "../../utils/verify-email";
import { collection } from "../../database/connection";
import hash from "../../utils/hashing-password";

export default async function signup(request: FastifyRequest, reply: FastifyReply) {
  const requestHandeler = handle(request);
  const users = collection("users");
  const { firstName, lastName, email, phone, password, confirmPassword } =
    requestHandeler.only([
      "firstName",
      "lastName",
      "email",
      "phone",
      "password",
      "confirmPassword",
    ]);
  const flag: boolean = validation(
    firstName,
    lastName,
    email,
    phone,
    password,
    confirmPassword
  );
  if (!flag) {
    return reply.status(505).send({ msg: "All fields are required" });
  }
  const finalPass = await hash(password);
  await users.insertOne({
    firstName,
    lastName,
    email,
    phone,
    password:finalPass,
  });
  const code = Math.random().toString(36).slice(2, 7);
  try {
    await verifyEmail(email, code);
  } catch (err) {
    throw "Error from signup controller" + err;
  }
  await users.updateOne({ email }, { $set: { code } });

  reply.status(200).send({ msg: "see your verification code on your gmail" });
}
