const csv = require("csv-parser");
const fs = require("fs");
const db = require("../models");
const logger = require("../utils/logger");

const loadData = async (filePath) => {
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      try {
        await db.Order.destroy({ where: {} });
        await db.Product.destroy({ where: {} });
        await db.Customer.destroy({ where: {} });

        for (const row of results) {
          await db.Customer.upsert({
            customerId: row["Customer ID"],
            customerName: row["Customer Name"],
            customerEmail: row["Customer Email"],
            customerAddress: row["Customer Address"],
          });

          await db.Product.upsert({
            productId: row["Product ID"],
            productName: row["Product Name"],
            category: row["Category"],
            region: row["Region"],
          });

          await db.Order.create({
            orderId: row["Order ID"],
            productId: row["Product ID"],
            customerId: row["Customer ID"],
            quantitySold: parseInt(row["Quantity Sold"], 10),
            unitPrice: parseFloat(row["Unit Price"]),
            discount: parseFloat(row["Discount"]),
            shippingCost: parseFloat(row["Shipping Cost"]),
            paymentMethod: row["Payment Method"],
            dateOfSale: new Date(row["Date of Sale"]),
          });
        }

        logger.info("Data refreshed successfully");
      } catch (error) {
        logger.error("Error refreshing data:", error);
      }
    });
};

module.exports = { loadData };
