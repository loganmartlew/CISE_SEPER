const { Article } = require('../models/Article');
const ArticleStage = require('../../../shared/ArticleStage');
const PracticeService = require('./PracticeService');

class ArticleService {
  static async getArticles() {
    const articles = await Article.find();
    return articles;
  }

  static async getAcceptedArticles() {
    const articles = await Article.find({
      $where: {
        reviewStage: ArticleStage.ACCEPTED,
      },
    });
    return articles;
  }

  static async getModeratorQueue() {
    const articles = await Article.find({
      reviewStage: ArticleStage.MODERATE,
    });
    return articles;
  }

  static async moderateArticle(articleId, data) {
    const article = await Article.findById(articleId);

    if (!data.notDuplicate) {
      article.rejectionReason = 'Article is a duplicate';
    }
    if (!data.relevant) {
      article.rejectionReason = 'Article is not relevant';
    }
    if (!data.reviewed) {
      article.rejectionReason = 'Article is not peer reviewed';
    }

    if (article.rejectionReason) {
      article.reviewStage = ArticleStage.REJECTED;
    } else {
      article.reviewStage = ArticleStage.ANALYSE;
    }

    article.save();
  }

  static async getAnalysisQueue() {
    const articles = await Article.find({
      reviewStage: ArticleStage.ANALYSE,
    });
    return articles;
  }

  static async getSingleArticle(id) {
    try {
      const article = await Article.findById(id);
      if (!article) return null;

      return article;
    } catch (error) {
      return null;
    }
  }

  static async analyseArticle(articleId, data) {
    const article = await Article.findById(articleId);

    if (typeof data === 'string') {
      article.rejectionReason = data;
      article.reviewStage = ArticleStage.REJECTED;
      article.save();
      return;
    }

    const practice = await PracticeService.getPractice(data.practiceId);

    article.title = data.title;
    article.authors = data.authors;
    article.year = data.year;
    article.doi = data.doi;
    article.sePractice = practice;

    article.reviewStage = ArticleStage.ACCEPTED;
    article.save();
  }

  // static async searchArticles(q) {}

  static async createArticle(articleData) {
    try {
      // Validate new article

      const { title, authors, year, doi, sePractice } = articleData;

      const newArticle = new Article();
      newArticle.title = title;
      newArticle.authors = authors;
      newArticle.year = year;
      newArticle.doi = doi;
      newArticle.sePractice = sePractice;
      newArticle.submitterEmail = '';
      newArticle.save();

      return newArticle;
    } catch (error) {
      return null;
    }
  }

  // static async updateArticle(newArticle) {}

  // static async deleteArticle(id) {}
}

module.exports = ArticleService;
