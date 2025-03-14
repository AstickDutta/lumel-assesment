const db = require("../models");
const logger = require("../utils/logger");

const getAllOrders = async (req, res) => {
  try {
    const orders = await db.Order.findAll();
    res.status(200).json({ orders });
  } catch (error) {
    logger.error("Error fetching orders:", error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

const getOrdersByCustomerId = async (req, res) => {
  const { customerId } = req.params;

  try {
    const orders = await db.Order.findAll({
      where: { customerId },
    });
    res.status(200).json({ orders });
  } catch (error) {
    logger.error("Error fetching orders by customer ID:", error);
    res.status(500).json({ error: "Failed to fetch orders by customer ID" });
  }
};

const createOrder = async (req, res) => {
  const orderData = req.body;

  try {
    const newOrder = await db.Order.create(orderData);
    res.status(201).json({ order: newOrder });
  } catch (error) {
    logger.error("Error creating order:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
};

module.exports = {
  getAllOrders,
  getOrdersByCustomerId,
  createOrder,
};
