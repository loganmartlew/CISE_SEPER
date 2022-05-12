const { Router } = require('express');
const ArticleService = require('../../services/ArticleService');

module.exports = () => {
  const app = Router();

  app.use('/', async (_, res) => {
    const articles = await ArticleService.getArticles();
    return res.status(200).json(articles);
  });

  return app;
};
