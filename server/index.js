console.time('Load Time');
const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const DBConnect = require('./config/mongo-db');
const categoryRoutes = require('./routes/category');
const errorHandler = require('./middleware/error-handler');

dotenv.config({ path: './config/.env' });
const app = express();
const PORT = process.env.PORT || 3000;

DBConnect()
  .then(
    () => console.timeLog('Load Time'),
  );
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// parses json
app.use(express.json());
app.use('/api/v1/categories', categoryRoutes);
app.use(errorHandler);

const message = `App running on http://localhost:${PORT}`;
app.listen(PORT, () => {
  console.log(colors.cyan(`[${new Date().toLocaleTimeString()}] ${message}`));
});
