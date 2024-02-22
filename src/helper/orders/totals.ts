import { ObjectId } from "mongodb";
import { collection } from "../../database/connection";

export async function totals(items: any[]) {
  const dishesCollection = collection("dishes");
  
  let price = 0;
  for (let i = 0; i < items.length; i++) {
    const itemId = items[i].id;
    const quantities = items[i].quantity;
    const item = await dishesCollection.findOne({ _id: new ObjectId(itemId) });
    price += item?.price * quantities;
  }
  return price;
}
