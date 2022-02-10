const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');

const dotenv = require('dotenv');

dotenv.config({ path: './config/.env' });

const category = require('./models/category');
const DBConnect = require('./config/mongo-db');

DBConnect();

const categories = JSON.parse(
  fs.readFileSync('../server/dummy-data/categories.json', 'utf-8')
);

const importData = async () => {
  try {
    await category.create(categories);
    console.log('Data imported'.bgYellow);
  } catch (e) {
    console.log(e);
  }
};
const clearData = async () => {
  try {
    await category.deleteMany();
    console.log('Data cleared'.bgMagenta);
  } catch (e) {
    console.log(e);
  }
};

/** Returns an array containing the CLI args passed when the Node.js
 * process was launched.
 * Type in the terminal
 * To create data: node seeder -i
 * To clear data:  node seeder -cd */
if (process.argv[2] === '-id') {
  importData();
  // node seeder -d
} else if (process.argv[2] === '-cd') {
  clearData();
}
