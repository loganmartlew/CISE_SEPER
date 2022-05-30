const { Article } = require('../models/Article');
const ArticleStage = require('../../../shared/ArticleStage');

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
      return;
    }
    if (!data.relevant) {
      return;
    }
    if (!data.reviewed) {
      return;
    }

    article.reviewStage = ArticleStage.ANALYSE;
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
