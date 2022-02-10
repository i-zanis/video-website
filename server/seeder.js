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
