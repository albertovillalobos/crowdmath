'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SolutionSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  question: Number
});

module.exports = mongoose.model('Solution', SolutionSchema);