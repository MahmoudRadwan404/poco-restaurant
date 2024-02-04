import { collection } from "../../database/connection";
import handle from "../../core/request";
import { FastifyReply } from "fastify";
import newAccessToken from "../../utils/generate-access-token";
import verifyPassword from "../../validation/verify-password";
import { loginValidation } from "../../validation/login";

export default async function login(request: any, reply: FastifyReply) {
  const requestHandler = handle(request);
  const usersCollection = collection("users");
  const { email, password } = requestHandler.only(["email", "password"]);
  console.log(email, password);
  if (!loginValidation(email , password )) {
    return reply.send({ error: "email and password are both required" });
  }
  const accessToken = collection("accessToken");

  const user = await usersCollection.findOne({ email: email });
  if (!user) {
    return reply.status(404).send({
      error: "User not found",
    });
  }
  const secretKey: string = process.env.SECRETKEY || "";
  console.log(secretKey);
  const token = await newAccessToken({ email }, secretKey, {
    expiresIn: "10d",
    algorithm: "HS256",
  });
  //console.log(token)
  const finalPassword: string = user.password;
  console.log(finalPassword);
  const passCompare = await verifyPassword(password , finalPassword);
  console.log(passCompare, "  ", password);
  if (passCompare) {
    await accessToken.insertOne({ id: user._id, token: token });
    delete user.password;
    reply.status(200).send({
      user: user,
      accessToken: token,
    });
  } else {
    return reply.send("failed login");
  }
}
