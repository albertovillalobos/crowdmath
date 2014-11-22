'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  name: String, 
  info: String,
  active: Boolean,
  number: Number
});

module.exports = mongoose.model('Question', QuestionSchema);