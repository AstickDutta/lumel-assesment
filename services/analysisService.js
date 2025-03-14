const db = require('../models');

const calculateRevenueByProducts = async (startDate, endDate) => {
  const orders = await db.Order.findAll({
    where: {
      dateOfSale: {
        [db.Sequelize.Op.between]: [startDate, endDate],
      },
    },
    include: [
      {
        model: db.Product,
        as: 'Product',
        attributes: ['productName'],
      },
    ],
  });

  const revenueByProduct = orders.reduce((acc, order) => {
    const productName = order.Product.productName;
    const revenue = order.quantitySold * order.unitPrice;

    if (!acc[productName]) {
      acc[productName] = 0;
    }
    acc[productName] += revenue;

    return acc;
  }, {});

  return revenueByProduct;
};

const calculateRevenueByCategories = async (startDate, endDate) => {
  const orders = await db.Order.findAll({
    where: {
      dateOfSale: {
        [db.Sequelize.Op.between]: [startDate, endDate],
      },
    },
    include: [
      {
        model: db.Product,
        as: 'Product',
        attributes: ['category'],
      },
    ],
  });

  const revenueByCategory = orders.reduce((acc, order) => {
    const category = order.Product.category;
    const revenue = order.quantitySold * order.unitPrice;

    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += revenue;

    return acc;
  }, {});

  return revenueByCategory;
};

/**
 * Calculate total revenue by region for a given date range
 */
const calculateRevenueByRegions = async (startDate, endDate) => {
  const orders = await db.Order.findAll({
    where: {
      dateOfSale: {
        [db.Sequelize.Op.between]: [startDate, endDate],
      },
    },
    include: [
      {
        model: db.Product,
        as: 'Product',
        attributes: ['region'],
      },
    ],
  });

  const revenueByRegion = orders.reduce((acc, order) => {
    const region = order.Product.region;
    const revenue = order.quantitySold * order.unitPrice;

    if (!acc[region]) {
      acc[region] = 0;
    }
    acc[region] += revenue;

    return acc;
  }, {});

  return revenueByRegion;
};

module.exports = {
  calculateRevenueByProducts,
  calculateRevenueByCategories,
  calculateRevenueByRegions,
};