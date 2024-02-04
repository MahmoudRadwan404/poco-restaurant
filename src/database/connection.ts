// or as an es module:
import { MongoClient } from "mongodb";
// Connection URL
const url: string = String(process.env.DB_URL);
const client = new MongoClient(url);
// Database Name
const dbName = "admin";
// Use connect method to connect to the server
export async function connection() {
  await client.connect();
  console.log("connected to poco");
}
export function collection(collectionName: string) {
  return client.db(dbName).collection(collectionName);
}
