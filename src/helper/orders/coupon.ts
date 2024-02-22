import { collection } from "../../database/connection";

export default async function applyCoupon(coupon: string, totalMoney: number) {
  const couponCollection = collection("coupons");
  const couponData = await couponCollection.findOne({ code: coupon });
  if (
    couponData?.type == "number" &&
    couponData.availableCoupons > 0 &&
    couponData.minimumOrder <= totalMoney
  ) {
    totalMoney = totalMoney - couponData.value;
  } else {
    totalMoney = totalMoney * (couponData?.value / 100);
  }
  await couponCollection.updateOne(
    { code: coupon },
    { $inc: { availableCoupons: -1 } }
  );
  return totalMoney;
}
