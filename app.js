const express = require('express');
const db = require('./models');
const dataRoutes = require('./routes/dataRoute.js');
const analysisRoutes = require('./routes/analysisRoute.js');
const orderRoutes = require('./routes/orderRoute.js');
const { scheduleDataRefreshRate } = require('./jobs/dataRefreshJob.js');

const app = express();
app.use(express.json());

db.sequelize.sync().then(() => {
  console.log('Database synced');
});

scheduleDataRefreshRate();

app.use('/api', dataRoutes);
app.use('/api/analysis', analysisRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});