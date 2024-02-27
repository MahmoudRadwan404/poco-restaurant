import { ObjectId } from "mongodb";
import { collection } from "../../database/connection";

export async function totals(items: any[]) {
  const dishesCollection = collection("dishes");

  let price = 0; //use for of
  for (let i = 0; i < items.length; i++) {
    for (const item of items) {
      const itemId: string = item.id;
      const quantities = item.quantity;
      const fetchedItem = await dishesCollection.findOne({
        _id: new ObjectId(itemId),
      });
      if (fetchedItem) {
        price += fetchedItem.price * quantities;
      }
    }
  }
  return price;
}
