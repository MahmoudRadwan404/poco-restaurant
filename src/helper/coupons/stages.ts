export const totalPrice = {
  $group: {
    _id: "$userId",
    totalPrice: { $sum: { $multiply: ["$quantity", "$price"] } },
    items: { $push: { name: "$name", quantity: "$quantity" } },
  },
};
export function matchUserId(userId: any) {
  return {
    $match: { userId: userId },
  };
}
