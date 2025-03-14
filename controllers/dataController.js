const dataService = require("../services/dataService");
const logger = require("../utils/logger");

const refreshData = async (req, res) => {
  try {
    await dataService.loadData("./data.csv");
    res.status(200).json({ message: "Data refresh initiated" });
  } catch (error) {
    logger.error("Error refreshing data:", error);
    res.status(500).json({ error: "Failed to refresh data" });
  }
};

module.exports = { refreshData };
