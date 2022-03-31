const model = require("../Models/Order");
const getAllOrders = async () => {
  let dateStringInit = "2022-03-29T00:00Z";
  let dateStringEnd = "2022-03-30T23:59Z";
  const orders = await model
    .find({
      "booking.date": {
        $gte: dateStringInit,
        $lte: dateStringEnd,
      },
    })
    .lean();

  // const orders = await model
  //   .aggregate([
  //     // Stage 1: Filter pizza order documents by date range
  //     {
  //       $match: {
  //         "booking.date": {
  //           $gte: dateStringInit,
  //           $lt: dateStringEnd,
  //         },
  //       },
  //     },
  //   ])
  //   .exec();
  console.log(orders);
  return orders;
};

module.exports = {
  getAllOrders,
};
