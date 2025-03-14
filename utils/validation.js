const logger = require('./logger');

/**
 * Validate date range input
 * @param {string} startDate - Start date in YYYY-MM-DD format
 * @param {string} endDate - End date in YYYY-MM-DD format
 * @returns {boolean} - True if valid, false otherwise
 */
const validateDateRange = (startDate, endDate) => {
  if (!startDate || !endDate) {
    logger.error('Start date and end date are required');
    return false;
  }

  const start = new Date(startDate);
  const end = new Date(endDate);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    logger.error('Invalid date format. Use YYYY-MM-DD');
    return false;
  }

  if (start > end) {
    logger.error('Start date cannot be after end date');
    return false;
  }

  return true;
};

/**
 * Validate required fields in an object
 * @param {object} data - Object to validate
 * @param {string[]} requiredFields - Array of required field names
 * @returns {boolean} - True if all required fields are present, false otherwise
 */
const validateRequiredFields = (data, requiredFields) => {
  for (const field of requiredFields) {
    if (!data[field]) {
      logger.error(`Missing required field: ${field}`);
      return false;
    }
  }
  return true;
};

module.exports = {
  validateDateRange,
  validateRequiredFields,
};