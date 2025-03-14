const cron = require("node-cron");
const dataService = require("../services/dataService");
const logger = require("../utils/logger");

const scheduleDataRefreshRate = () => {
  cron.schedule("0 0 * * *", async () => {
    logger.info("Starting scheduled data refresh...");

    try {
      await dataService.loadData("./data.csv");
      logger.info("Scheduled data refresh completed successfully");
    } catch (error) {
      logger.error("Error during scheduled data refresh:", error);
    }
  });

  logger.info(
    "Cron job scheduled to refresh data every 24 hours (at midnight)"
  );
};

module.exports = { scheduleDataRefreshRate };
