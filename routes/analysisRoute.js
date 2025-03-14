const express = require('express');
const router = express.Router();
const analysisController = require('../controllers/analysisController');

router.get('/revenue', analysisController.calculateTotalRevenue);

router.get('/revenue-by-product', analysisController.calculateRevenueByProduct);

router.get('/revenue-by-category', analysisController.calculateRevenueByCategory);

router.get('/revenue-by-region', analysisController.calculateRevenueByRegion);

module.exports = router;