export const joinDishesWithReviews = {
  $lookup: {
    from: "reviews",
    localField: "_id",
    foreignField: "dishId",
    as: "newReviews",
  },
};

export const showDishedAndReviews = {
  $project: {
    name: 1,
    reviews: {
      $cond: {
        if: { $eq: [{ $ifNull: [{ $size: "$newReviews" }, 0] }, 0] },
        then: 0,
        else: "$newReviews",
      },
    },
    numberOfReviews: { $ifNull: [{ $size: "$newReviews" }, 0] },
    price: 1,
  },
};
