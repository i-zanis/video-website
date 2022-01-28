const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const DBConnect = require('./config/mongo-db');
const categoryRoutes = require('./routes/category');

dotenv.config({ path: './config/.env' });
const app = express();
const print = console.log;
const PORT = 3000;

DBConnect();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// parses json
app.use(express.json());
app.use('/api/v1/categories', categoryRoutes);

const message = `App running on http://localhost:${PORT}`;
app.listen(PORT, () => {
  print(colors.cyan(`[${new Date().toLocaleTimeString()}] ${message}`));
});
