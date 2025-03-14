const express = require('express');
const router = express.Router();

const analysisRoutes = require('./analysisRoutes');
const dataRoutes = require('./dataRoutes');
const orderRoutes = require('./orderRoutes');

router.use('/analysis', analysisRoutes);
router.use('/data', dataRoutes);
router.use('/orders', orderRoutes);

module.exports = router;