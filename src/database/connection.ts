// or as an es module:
import { MongoClient } from "mongodb";
// Connection URL

let client: MongoClient | undefined;
// Database Name
const dbName = "admin";
// Use connect method to connect to the server
export async function connection() {
  if (client) {
    return;
  } else {
    const url= String(process.env.DB_URL) || "";
    client = new MongoClient(url);
    await client.connect();
  }
  console.log("connected to poco");
}

export function collection(collectionName: string) {
  return client!.db(dbName).collection(collectionName);
}
