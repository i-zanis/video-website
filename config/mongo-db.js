const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config({ path: './config/.env' });
const print = console.log;

const DBConnect = async () => {
  const con = await mongoose
    .connect(process.env.MONGO)
    .catch((err) => {
      print(colors.red('Cannot connect to DB'), err);
    });

  print(colors.bgGreen(`MongoDB connected: ${con.connection.host}`).black);
};

module.exports = DBConnect;
