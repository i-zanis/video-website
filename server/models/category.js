const mongoose = require('mongoose');
// Adds pre-save validation for unique fields within a Mongoose schema
// Get violation error on unique constraint violation instead of E1100 from
// MongoDB
const uniqueValidator = require('mongoose-unique-validator');
const { Schema } = require('mongoose');
const Msg = require('../utils/message-constants');

const categorySchema = new Schema(
  {
    // userId: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: 'User',
    //   required: true,
    // },
    title: {
      type: String,
      minLength: [3, Msg.TITLE_LENGTH_ERR],
      trim: true,
      unique: true,
      // uniqueValidator, won't allow upper/lower combination
      uniqueCaseInsensitive: true,
      required: [true, Msg.TITLE_REQ_ERR],
    },
    description: {
      type: String,
      minLength: [3, Msg.DESCRIPTION_LENGTH_ERR],
      required: [true, Msg.DESCRIPTION_REQ_ERR],
    },
  },
  { timestamps: true },
);
// TODO PATH ALREADY EXISTS
categorySchema.plugin(uniqueValidator, { message: '{PATH} already exists.' });

module.exports = mongoose.model('Category', categorySchema);
