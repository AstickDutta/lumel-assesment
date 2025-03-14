const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.post('/refresh', dataController.refreshData);

module.exports = router;