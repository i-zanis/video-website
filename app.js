const express = require('express');
const chalk = require('chalk');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: './config.env' });
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
const PORT = process.env.PORT || 4000;
const print = console.log;
app.use((req,
  res,
  next) => {
  res.json({ title: 'test output' });
});

app.listen(PORT, () => {
  print(chalk.green(`[${new Date().toLocaleTimeString()}] App running on http://localhost:${PORT}`));
});
