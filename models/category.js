const mongoose = require('mongoose');
// Adds pre-save validation for unique fields within a Mongoose schema
// Get violation error on unique constraint violation instead of E1100 from
// MongoDB
const uniqueValidator = require('mongoose-unique-validator');
const { Schema } = require('mongoose');

const categorySchema = new Schema({
  title: {
    String,
    minLength: [3, 'Title requires at least 3 characters'],
    trim: true,
    unique: true,
    uniqueCaseInsensitive: true,
    required: [true, 'Title is required'],
  },
  description: {
    String,
    minLength: [3, 'Description requires at least 3 characters'],
    required: [true, 'Description is required'],
  },
},
{ timestamps: true });

categorySchema.plugin(uniqueValidator, { message: '{PATH} already exists.' });

module.exports = mongoose.model('Category', categorySchema);
