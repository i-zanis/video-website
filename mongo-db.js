const mongoose = require('mongoose');
const chalk = require('chalk');

const print = console.log;

const DbConnect = async () => {
  const con = await mongoose.connect(process.env.MONGO, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }).catch(() => {
    print(chalk.red('Cannot connect to DB'));
  });

  print(chalk.bgGreen(`MongoDB connected: ${con.connection.host}`));
};

module.exports(DbConnect);
