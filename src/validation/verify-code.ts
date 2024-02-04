import { collection } from "../database/connection";

export default async function verifyCode(code: string) {
  const users = collection("users");
  const user = await users.findOne({ code: code });
  if (!user) {
    return false;
  }
  return true;
}
