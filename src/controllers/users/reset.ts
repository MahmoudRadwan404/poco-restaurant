import handle from "../../core/request";
import { FastifyReply } from "fastify";
import { collection } from "../../database/connection";
import hash from "../../utils/hashing-password";

export default async function reset(request: any, res: FastifyReply) {
  const requestHandler = handle(request);
  const password: string = requestHandler.input("password");
  const code: string = requestHandler.input("code");
  console.log(code, password);
  if (!password && !code) {
    return res.send({ error: "all fields are required" });
  }
  const usersCollection = collection("users");
  const user = await usersCollection.findOne({ code });

  if (!user) {
    return res.status(404).send({ error: "email not found" });
  }

  const newPassword = await hash(password);

  await usersCollection.updateOne(
    { code },
    { $set: { password: newPassword } }
  );
  await usersCollection.updateOne({ code }, { $unset: { code: code } });

  res.status(200).send({ message: "success" });
}
