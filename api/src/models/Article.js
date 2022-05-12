const mongoose = require('mongoose');
const { practiceSchema } = require('./Practice');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  doi: {
    type: String,
    required: true,
  },
  sePractice: {
    type: practiceSchema,
    required: true,
  },
});

const Article = mongoose.model('article', articleSchema);

module.exports = { Article };
