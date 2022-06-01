const { Router } = require('express');
const ArticleService = require('../../services/ArticleService');

module.exports = () => {
  const app = Router();

  app.get('/', async (_, res) => {
    const articles = await ArticleService.getArticles();
    return res.status(200).json(articles);
  });

  app.get('/moderation', async (_, res) => {
    const articles = await ArticleService.getModeratorQueue();

    const sortedArticles = articles.sort((a, b) => {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });

    return res.status(200).json(sortedArticles);
  });

  app.post('/moderation', async (req, res) => {
    const { articleId, data } = req.body;

    try {
      await ArticleService.moderateArticle(articleId, data);
      return res.status(200).json({});
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  });

  app.get('/analysis', async (_, res) => {
    const articles = await ArticleService.getAnalysisQueue();

    const sortedArticles = articles.sort((a, b) => {
      return new Date(a.updatedAt) - new Date(b.updatedAt);
    });

    return res.status(200).json(sortedArticles);
  });

  app.post('/analysis', async (req, res) => {
    const { articleId, data } = req.body;

    try {
      await ArticleService.analyseArticle(articleId, data);
      return res.status(200).json({});
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  });

  app.post('/', async (req, res) => {
    const { articleData } = req.body;

    const newArticle = await ArticleService.createArticle(articleData);

    if (!newArticle) {
      return res.status(500).json({ message: 'Failed to create article' });
    }

    return res.status(201).json({ article: newArticle });
  });

  app.get('/:id', async (req, res) => {
    const { id } = req.params;

    const article = await ArticleService.getSingleArticle(id);

    if (!article) {
      return res.status(422).json({ message: 'Article not found' });
    }

    return res.status(200).json({ article });
  });

  return app;
};
