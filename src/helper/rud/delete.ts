import { ObjectId } from "mongodb";

export default async function deleteDoc(collection: any, id: any) {
  try {
    const deleted = await collection.deleteOne({
      _id: new ObjectId(id),
    });
    return { msg: `deleted successfully ` };
  } catch (err) {
    return false;
  }
}
