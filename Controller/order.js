const repository = require("../repo/order");
const excelJS = require("exceljs");

const getOrdersService = async (req, res) => {
  try {
    const workbook = new excelJS.Workbook();
    const worksheet = workbook.addWorksheet("Orders");
    const path = "./files";
    const orders = await repository.getAllOrders();

    worksheet.columns = [
      { header: "Numero de orden", key: "orderNumber", width: 12 },
      { header: "Razón del test", key: "testReason", width: 15 },
      { header: "Dirección", key: "booking.address", width: 15 },
      { header: "Comuna", key: "booking.stateName", width: 15 },
      { header: "Ciudad", key: "booking.province", width: 15 },
      { header: "isCanceled", key: "isCanceled", width: 10 },
      { header: "deliveryPayment", key: "deliveryPayment", width: 10 },
      { header: "createdAt", key: "createdAt", width: 10 },
      { header: "updatedAt", key: "updatedAt", width: 10 },
    ];
    // let counter = 1;
    orders.forEach((order) => {
      worksheet.addRow(order);
      //   counter++;
    });

    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    );

    res.setHeader("Content-Disposition", `attachment; filename=ordenes.xlsx`);

    return workbook.xlsx.write(res).then(() => {
      res.status(200);
    });
  } catch (error) {
    console.log("Ocurrió un error getOrders controller ", error);
  }
};

module.exports = getOrdersService;
