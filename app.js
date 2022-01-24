const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const DBConnect = require('./config/mongo-db');

dotenv.config({ path: './config/.env' });
const app = express();
const print = console.log;
DBConnect();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
const PORT = 3000;
app.use((req,
  res,
  next) => {
  res.json({ title: 'test output' });
});

app.listen(PORT, () => {
  print(colors.green(`[${new Date().toLocaleTimeString()}] App running on http://localhost:${PORT}`));
});
