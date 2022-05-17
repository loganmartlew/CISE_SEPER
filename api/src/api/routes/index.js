const { Router } = require('express');
const articleRoutes = require('./articles');

module.exports = () => {
  const app = Router();

  app.use('/articles', articleRoutes());

  return app;
};
