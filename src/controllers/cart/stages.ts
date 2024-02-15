import { ObjectId } from "mongodb";

export function matchedItems(userId: string) {
  return { $match: { userId: new ObjectId(userId) } };
}
export const groupItems = {
  $group: {
    _id: "$userId",
    totalPrice: { $sum: { $multiply: ["$quantity", "$price"] } },
    items: {
      $push: {
        itemId: "$_id",
        quantity: "$quantity",
        price: "$price",
      },
    },
  },
};

export const showItems = {
  $project: {
    _id: 0,
    items: 1,
    totalPrice: 1,
  },
};
