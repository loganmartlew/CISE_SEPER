const mongoose = require('mongoose');
const ArticleStage = require('../../../shared/ArticleStage');
const { practiceSchema } = require('./Practice');

const articleSchema = new mongoose.Schema(
  {
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
    submitterEmail: {
      type: String,
      required: true,
    },
    rejectionReason: {
      type: String,
      required: false,
      default: '',
    },
    sePractice: {
      type: practiceSchema,
    },
    reviewStage: {
      type: String,
      enum: [...Object.values(ArticleStage)],
      default: ArticleStage.MODERATE,
    },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model('article', articleSchema);

module.exports = { Article };
