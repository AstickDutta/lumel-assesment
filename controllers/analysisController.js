const analysisService = require("../services/analysisService");
const { validateDateRange } = require("../utils/validation");
const logger = require("../utils/logger");

const calculateTotalRevenue = async (req, res) => {
  const { startDate, endDate } = req.query;

  if (!validateDateRange(startDate, endDate)) {
    return res.status(400).json({ error: "Invalid date range" });
  }

  try {
    const totalRevenue = await analysisService.calculateTotalRevenue(
      startDate,
      endDate
    );
    res.status(200).json({ totalRevenue });
  } catch (error) {
    logger.error("Error calculating total revenue:", error);
    res.status(500).json({ error: "Failed to calculate total revenue" });
  }
};

const calculateRevenueByProduct = async (req, res) => {
  const { startDate, endDate } = req.query;

  if (!validateDateRange(startDate, endDate)) {
    return res.status(400).json({ error: "Invalid date range" });
  }

  try {
    const revenueByProduct = await analysisService.calculateRevenueByProducts(
      startDate,
      endDate
    );
    res.status(200).json({ revenueByProduct });
  } catch (error) {
    logger.error("Error calculating revenue by product:", error);
    res.status(500).json({ error: "Failed to calculate revenue by product" });
  }
};

const calculateRevenueByCategory = async (req, res) => {
  const { startDate, endDate } = req.query;

  if (!validateDateRange(startDate, endDate)) {
    return res.status(400).json({ error: "Invalid date range" });
  }

  try {
    const revenueByCategory =
      await analysisService.calculateRevenueByCategories(startDate, endDate);
    res.status(200).json({ revenueByCategory });
  } catch (error) {
    logger.error("Error calculating revenue by category:", error);
    res.status(500).json({ error: "Failed to calculate revenue by category" });
  }
};

const calculateRevenueByRegion = async (req, res) => {
  const { startDate, endDate } = req.query;

  if (!validateDateRange(startDate, endDate)) {
    return res.status(400).json({ error: "Invalid date range" });
  }

  try {
    const revenueByRegion = await analysisService.calculateRevenueByRegions(
      startDate,
      endDate
    );
    res.status(200).json({ revenueByRegion });
  } catch (error) {
    logger.error("Error calculating revenue by region:", error);
    res.status(500).json({ error: "Failed to calculate revenue by region" });
  }
};

module.exports = {
  calculateTotalRevenue,
  calculateRevenueByProduct,
  calculateRevenueByRegion,
  calculateRevenueByCategory,
};
